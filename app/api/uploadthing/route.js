import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
    router: ourFileRouter,
});


// export async function fetchCommunities({
//     searchText,
//     pageNo,
//     pageSize
// }) {
//     try {
//         connectDB();

//         const skipAmount = (pageNo - 1) * pageSize;
//         const regex = new RegExp(searchText, "i");

//         const query = {}
//         if (searchText.trim() !== "") {
//             query.$or = [
//                 { username: { $regex: regex } },
//                 { name: { $regex: regex } },
//             ];
//         }


//         const communityQuery = communityModel.find(query)
//             .sort({ createdAt: "desc" })
//             .skip(skipAmount)
//             .limit(pageSize)
//             .populate({ path: "members", model: "User" })

//         const totalCommunities = await communityModel.countDocuments(communityQuery)
//         const allCommunities = await communityQuery.exec();

//         const isNext = totalCommunities > skipAmount + allCommunities.length;

//         return { allCommunities, isNext }

//     } catch (error) {
//         throw new Error(`Fetching All Talks Error : ${error.message} `)
//     }
// }