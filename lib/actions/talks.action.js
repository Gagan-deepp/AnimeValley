"use server"

import { revalidatePath } from "next/cache";
import { connectDB } from "../ConnectDB"
import talkModel from "../Models/TalkModel";
import userModel from "../Models/UserModel";


// ! content = description    == Incase I forgot
export const createTalk = async ({ heading, content, communities, author, path }) => {
    try {
        connectDB();

        const createTalk = await talkModel.
            create(
                {
                    heading: heading,
                    content: content,
                    author: author,
                    communities: null
                })

        //! Update User data and add Talk(thread) to it
        await userModel.findByIdAndUpdate(author, { $push: { talks: createTalk._id } });
        revalidatePath(path)

    } catch (error) {
        throw new Error(`Error while creating talk : ${error.message}`)
    }
}

export const fetchPost = async (pageNo = 1, pageSize = 10) => {
    try {
        connectDB();

        const skipAmount = (pageNo - 1) * pageSize

        const query = talkModel.find({ parentId: { $in: [null, undefined] } })
            .sort({ createdAt: "desc" })
            .skip(skipAmount)
            .limit(pageSize)
            .populate({ path: "author", model: "User" })
            .populate({
                path: "children",
                populate: {
                    path: 'author',
                    model: 'User',
                    select: "id name parentId"
                }
            })
        const totalTalks = talkModel.countDocuments({ parentId: { $in: [null, undefined] } })
        const allTalks = await query.exec();

        const isNext = totalTalks > skipAmount + allTalks.length;

        return { allTalks, isNext }

    } catch (error) {
        throw new Error(`Fetching All Talks Error : ${error.message} `)
    }
}

export const fetchTalkById = async (id) => {
    try {
        connectDB()

        const talk = await talkModel.findById(id)
            .populate({ path: "author", model: "User", select: "_id id name image" })
            .populate({
                path: "children",
                populate: [
                    {
                        path: 'author',
                        model: 'User',
                        select: "_id name parentId image"
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