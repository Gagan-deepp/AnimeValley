"use server"

import { revalidatePath } from "next/cache";
import { connectDB } from "../ConnectDB"
import userModel from "../Models/UserModel";
import talkModel from "../Models/TalkModel";
import communityModel from "../Models/CommunityModel";
import bookModel from "../Models/BookMarkModel";

export const updateUser = async ({ userID, userName, name, image, bio, path }) => {
    try {
        connectDB();
        await userModel.findOneAndUpdate({ id: userID },
            { userName: userName.toLowerCase(), name, bio, image, onBoard: true },
            { upsert: true })

        if (path === '/profile/edit') {
            revalidatePath(path)
        }
    } catch (error) {
        throw new Error(`Failed to Update User : ${error.message}`)
    }
}

export const fetchUser = async ({ userID }) => {
    try {
        connectDB();
        const userData = await userModel.findOne({ id: userID })
            .populate({ path: "communities", model: communityModel })
        return userData;
    } catch (error) {
        console.log(error)
        throw new Error(`Error while fetching User : ${error.message}`)
    }
}

export const fetchTalkByUser = async ({ accountId }) => {
    try {

        connectDB();
        const talks = await userModel.findOne({ id: accountId })
            .populate(
                {
                    path: 'talks',
                    model: 'Talks',
                    populate: [
                        {
                            path: 'children',
                            model: 'Talks',
                            populate: {
                                path: 'author',
                                model: 'User'
                            }
                        }
                    ]
                }
            )

        return talks

    } catch (error) {
        throw new Error(`Error Occur At fetchTalkByUser : ${error.message}`)
    }
}

export const fetchUserActivity = async ({ userID }) => {
    try {
        connectDB();
        const userTalks = await talkModel.find({ author: userID })

        const childrenTalk = userTalks.reduce((acc, talk) => { return acc.concat(talk.children) }, [])

        const replies = await talkModel.find({
            _id: { $in: childrenTalk },
            author: { $ne: userID }, // Exclude threads authored by the same user
        }).populate({
            path: "author",
            model: "User",
            select: "name image _id username",
        });

        return replies

    } catch (error) {
        throw new Error(`Error will fetching Activity : ${error}`)
    }
}

export const fetchUserBookMark = async ({ userID }) => {
    try {
        connectDB();
        const bookmarks = await userModel.findOne({ id: userID }, { talks: 0, communities: 0 }).populate({
            path: "bookmarks",
            model: "BookMarks"
        })

        return bookmarks;
    } catch (error) {
        throw new Error(`Error while fetching book marks : ${error.message}`)
    }
}

export const addBookMarkUser = async ({ userID, name, animeID, image, airing, status, path }) => {
    try {
        console.log("Bookmark action")
        connectDB();

        const createBookMark = await bookModel.create({
            name: name,
            animeID: animeID,
            image: image,
            airing: airing,
            status: status,
        })
        createBookMark.users.push(userID);
        await createBookMark.save()
        await userModel.findByIdAndUpdate(userID, { $push: { bookmarks: createBookMark._id } });
        revalidatePath(path)

    } catch (error) {
        console.log(error)
        throw new Error(`Error while Adding Bookmark : ${error.message}`)
    }
}

export const userProfileUpdate = async ({ userID, image, userName }) => {
    try {
        connectDB();
        const updatedUser = await userModel.findOneAndUpdate({ id: userID },
            { userName: userName.toLowerCase(), image })

        if (!updatedUser) {
            throw new Error("User Not Found || Unable to Update User Webhook");
        }
        return updatedUser

    } catch (error) {
        console.log(error)
        throw new Error(`Failed to Update User Webhook : ${error.message}`)
    }
}