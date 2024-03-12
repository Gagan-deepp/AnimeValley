"use server";

import { connectDB } from "../ConnectDB";
import communityModel from "../Models/CommunityModel";
import talkModel from "../Models/TalkModel";
import userModel from "../Models/UserModel";

export async function createCommunity(id, name, username, image, bio, createdById) {
    try {
        connectDB();

        console.log("I am here making community")

        // Find the user with the provided unique id
        const user = await userModel.findOne({ id: createdById });

        if (!user) {
            throw new Error("User not found"); // Handle the case if the user with the id is not found
        }

        const newCommunity = new communityModel({
            uniqueID: id,
            name: name,
            userName: username,
            image: image,
            bio: bio,
            createdBy: user._id
        });

        const createdCommunity = await newCommunity.save();

        // Update User model
        user.communities.push(createdCommunity._id);
        await user.save();

        return createdCommunity;
    } catch (error) {
        console.error("Error creating community:", error);
        throw error;
    }
}

export async function fetchCommunities({ searchText, pageNo, pageSize }) {
    try {
        connectDB();

        const skipAmount = (pageNo - 1) * pageSize;
        const regex = new RegExp(searchText, "i");

        // If the search string is not empty, add the $or operator to match either username or name fields.
        // const query = {}
        // if (searchText.trim() !== "") {
        //     query.$or = [
        //         { username: { $regex: regex } },
        //         { name: { $regex: regex } },
        //     ];
        // }


        const communityQuery = communityModel.find()
            .sort({ createdAt: "desc" })
            .skip(skipAmount)
            .limit(pageSize)
            .populate({ path: "members", model: "User", select: "id name image" })

        const createdBy = await userModel.find({ _id: communityQuery.createdBy })

        const totalCommunities = await communityModel.countDocuments(communityQuery)
        const allCommunities = await communityQuery.exec();

        const isNext = totalCommunities > skipAmount + allCommunities.length;

        return { allCommunities, isNext, createdBy }

    } catch (error) {
        throw new Error(`Fetching All Talks Error : ${error.message} `)
    }
}

export async function addMemberToCommunity(organizationID, userID) {
    try {

        connectDB();

        const community = await communityModel.findOne({ uniqueID: organizationID })

        if (!community) {
            throw new Error("Community not found");
        }

        const user = await userModel.findOne({ id: userID })

        if (!community) {
            throw new Error("User not found");
        }

        // 
        // IMP: Check if member is already present in community
        if (community.members.includes(user._id)) {
            return ({ message: "You are already member of the community!" })
        }

        // NOTE: Add member to community database
        community.members.push(user._id);
        await community.save()

        // NOTE: add communitiy(organization) to user database
        user.communities.push(community._id)
        await user.save();

        return community

    } catch (error) {
        throw new Error(`Error while adding member in organization : ${error.message} `)
    }
}

export async function removeMemberFromCommunity(communityID, userID) {
    try {
        connectDB()
        const community = await communityModel.findOne({ uniqueID: communityID }, { _id: 1 })
        const user = await userModel.findOne({ id: userID }, { _id: 1 })

        if (!community) {
            throw new Error("Community Not Found !!");
        }

        if (!user) {
            throw new Error("OMGG: User not found !!");
        }

        //NOTE: Remove (PULL) user || member and community from each other resp

        await communityModel.updateOne({ _id: community._id }, { $pull: { members: user._id } })
        await userModel.updateOne({ _id: user._id }, { $pull: { communities: community._id } })

        return { success: true }

    } catch (error) {
        console.log(error)
        throw new Error(`Error While removing member from community : ${error.message}`)
    }
}

export async function updateCommunity(communityID, name, username, image) {
    try {
        connectDB();
        const updatedCommuntiy = await communityModel.findOneAndUpdate({ uniqueID: communityID }, { name, userName: username, image })

        if (!updatedCommuntiy) {
            throw new Error("community Not Found || Unable to Update community");
        }
        return updatedCommuntiy

    } catch (error) {
        console.log(error)
        throw new Error(`Error while updating member details in community : ${error.message}`)
    }
}

export async function deleteCommunity(communityId) {
    try {
        connectDB();

        // Find the community by its ID and delete it
        console.log('communityId : ', communityId)
        const deletedCommunity = await communityModel.findOneAndDelete({
            uniqueID: communityId,
        });

        console.log('deletedCommunity : ', deletedCommunity)
        if (!deletedCommunity) {
            throw new Error("Community not found");
        }

        // Delete all threads associated with the community
        await talkModel.deleteMany({ communities: deletedCommunity._id });

        // Find all users who are part of the community
        const communityUsers = await userModel.find({ communities: deletedCommunity._id });

        // Remove the community from the 'communities' array for each user
        const updateUserPromises = communityUsers.map((user) => {
            user.communities.pull(deletedCommunity._id);
            return user.save();
        });

        await Promise.all(updateUserPromises);

        return deletedCommunity;
    } catch (error) {
        console.error("Error deleting community: ", error);
        throw error;
    }
}