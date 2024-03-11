import Comment from "@/components/forms/Comment";
import Rightsidebar from "@/components/talks/Rightsidebar";
import TalkCard from "@/components/talks/TalkCard"
import { fetchTalkById } from "@/lib/actions/talks.action";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";


const page = async ({ params }) => {

    if (!params.id) return null;

    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser({ userID: user.id })

    if (!userInfo.onBoard) redirect("/onboarding")

    const talk = await fetchTalkById(params.id)

    return (
        <section className="w-full flex gap-6" >
            <div className="w-full flex-1" >

                <div className='my-8 text-light-5'>
                    <h1 className='font-heading-2 text-3xl font-medium flex items-center gap-4' > Talks <FaArrowRight />  </h1>
                </div>
                <TalkCard
                    id={talk._id}
                    currentUserId={user.id}
                    parentId={talk.parentId}
                    heading={talk.heading}
                    content={talk.content}
                    author={talk.author}
                    community={talk.community}
                    createdAt={talk.createdAt}
                    comments={talk.children}
                />

                <div className="w-full" >
                    <div className="mt-7" >
                        <Comment
                            talkId={talk.id}
                            currentUserImg={user.imageUrl}
                            currentUserId={userInfo._id.toString()}
                        />
                    </div>

                    <div className="mt-5" >
                        {
                            talk.children.map((child, index) => (
                                <TalkCard
                                    key={index}
                                    id={child._id}
                                    currentUserId={child?.id || ""}
                                    parentId={child.parentId}
                                    heading={child.heading}
                                    content={child.content}
                                    author={child.author}
                                    community={child.community}
                                    createdAt={child.createdAt}
                                    comments={child.children}
                                    isComment={true}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Rightsidebar />
        </section>
    )
}

export default page