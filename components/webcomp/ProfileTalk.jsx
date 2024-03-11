import { fetchTalkByUser } from "@/lib/actions/user.actions"
import TalkCard from "../talks/TalkCard"
import { redirect } from "next/navigation"

const ProfileTalk = async ({ accountType, accountId, currentUserId }) => {

    const userTalks = await fetchTalkByUser({ accountId: accountId })

    if (!userTalks) {
        redirect("/")
    }
    return (
        <section>
            <div>
                {userTalks.talks.map((talk, index) => (
                    <TalkCard
                        key={index}
                        id={talk._id}
                        currentUserId={currentUserId}
                        parentId={talk.parentId}
                        heading={talk.heading}
                        content={talk.content}
                        author={accountType==="User" ? { name : userTalks.name , image : userTalks.image} : { name : talk.author.name , image : talk.author.image}}
                        community={talk.community}
                        createdAt={talk.createdAt}
                        comments={talk.children}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProfileTalk
