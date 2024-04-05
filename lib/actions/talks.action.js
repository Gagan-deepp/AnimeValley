"use server"

import { revalidatePath } from "next/cache";
import { connectDB } from "../ConnectDB"
import talkModel from "../Models/TalkModel";
import userModel from "../Models/UserModel";
import communityModel from "../Models/CommunityModel";


// ! content = description    == Incase I forgot
export const createTalk = async ({ heading, content, community, author, path }) => {
    try {
        connectDB();

        const createTalk = await talkModel.
            create(
                {
                    heading: heading,
                    content: content,
                    author: author,
                    communities: community
                })

        //! Update Community data and add Talk(thread) to it
        await communityModel.findByIdAndUpdate(community, { $push: { talks: createTalk._id } });

        //! Update User data and add Talk(thread) to it
        await userModel.findByIdAndUpdate(author, { $push: { talks: createTalk._id } });
        revalidatePath(path)

    } catch (error) {
        throw new Error(`Error while creating talk : ${error.message}`)
    }
}

export const fetchPost = async ({ searchText, pageNo, pageSize }) => {
    try {
        connectDB();
        const skipAmount = (pageNo - 1) * pageSize;
        const regex = new RegExp(searchText, "i");

        //    If the search string is not empty, add the $or operator to match either username or name fields.
        const testQuery = {}
        if (searchText.trim() !== "") {
            testQuery.$or = [
                { heading: { $regex: regex } },
                { content: { $regex: regex } },
            ];
        }

        testQuery.parentId = { $in: [null, undefined] }
        const query = talkModel.find(testQuery)
            .sort({ createdAt: "desc" })
            .skip(skipAmount)
            .limit(pageSize)
            .populate({ path: "author", model: "User" })
            .populate({
                path: "communities",
                model: "Community",
                select: "name"
            })
            .populate({
                path: "children",
                populate: {
                    path: 'author',
                    model: 'User',
                    select: "id name parentId"
                }
            })
        const totalTalks = talkModel.countDocuments(testQuery)
        const allTalks = await query.exec();
        const isNext = totalTalks > skipAmount + allTalks.length;

        return { allTalks, isNext }

    } catch (error) {
        console.log(error)
        throw new Error(`Fetching All Talks Error : ${error.message} `)
    }
}

export const fetchTalkById = async (id) => {
    try {
        connectDB()

        const talk = await talkModel.findById(id)
            .populate({ path: "author", model: "User", select: "_id id name userName image" })
            .populate({
                path: "children",
                populate: [
                    {
                        path: 'author',
                        model: 'User',
                        select: "_id name parentId userName image"
                    },
                    {
                        path: "children",
                        model: "Talks",
                        select: "_id name parentId image"
                    }
                ]
            }).exec()

        return talk
    } catch (error) {
        throw new Error(`Fetching Single Talk Error : ${error.message} `)
    }
}

export const addComment = async ({ talkId, CommentTxt, userId, path }) => {
    connectDB();

    try {

        const originalTalk = await talkModel.findById(talkId);

        if (!originalTalk) {
            throw new Error("Talk Not Found");
        }

        const commentTalk = new talkModel({
            content: CommentTxt,
            author: userId,
            parentId: talkId
        })

        const savedComment = await commentTalk.save();

        originalTalk.children.push(savedComment._id);

        await originalTalk.save();

        revalidatePath(path)

    } catch (error) {
        console.log(error)
        throw new Error("Error while adding comment")
    }
}

export const fetchAllChildTalk = async (talkID) => {
    const childTalk = await talkModel.find({ parentId: talkID })

    const descendentTalk = [];

    for (const child of childTalk) {
        const descendants = await fetchAllChildTalk(child._id);
        descendentTalk.push(child, ...descendants);
    }

    return descendentTalk;
}

export const deleteTalk = async (id ,path ) => {
    try {
        connectDB();

        const mainTalk = await talkModel.findById(id).populate("author communities");
        if (!mainTalk) {
            throw new Error(`Talk not found`)
        }

        const childMainTalk = await fetchAllChildTalk(id);

        const allTalks = [id, ...childMainTalk];

        await talkModel.deleteMany({ _id: { $in: allTalks } })

        const uniqueAuthorIDS = new Set(
            [
                ...childMainTalk.map((talk) => talk.author?._id?.toString()),
                mainTalk.author?._id?.toString()
            ].filter((id) => id !== undefined || null)
        );

        await userModel.updateMany(
            { _id: { $in: Array.from(uniqueAuthorIDS) } },
            { $pull: { talks: { $in: allTalks } } }
        );

        const uniqueCommunityIDS = new Set(
            [
                ...childMainTalk.map((talk) => talk.communities?._id?.toString()),
                mainTalk.communities?._id?.toString()
            ].filter((id) => id !== undefined || null)
        );

        await communityModel.updateMany(
            { _id: { $in: Array.from(uniqueCommunityIDS) } },
            { $pull: { talks: { $in: allTalks } } }
        );

        revalidatePath(path)

    } catch (error) {
        console.log(error);
        throw new Error(`Error while DeletingTalk : ${error.message}`)
    }
}