import { fetchTalkByUser } from "@/lib/actions/user.actions"
import TalkCard from "../talks/TalkCard"
import { redirect } from "next/navigation"
import { commmunityTalks } from "@/lib/actions/community.action";

const ProfileTalk = async ({ accountType, accountId, currentUserId }) => {

    let userTalks;
    if (accountType === "User") {
        userTalks = await fetchTalkByUser({ accountId: accountId })
    } else {
        userTalks = await commmunityTalks(accountId)
    }

    if (!userTalks) {
        redirect("/")
    }

    return (
        <section>
            <div>
                {userTalks.talks.length > 0 ?
                    userTalks.talks.map((talk, index) => (
                        <TalkCard
                            key={index}
                            id={talk._id}
                            currentUserId={currentUserId}
                            parentId={talk.parentId}
                            heading={talk.heading}
                            content={talk.content}
                            author={accountType === "User" ? { name: userTalks.name, image: userTalks.image } : { name: talk.author.name, image: talk.author.image }}
                            community={talk.community}
                            createdAt={talk.createdAt}
                            comments={talk.children}
                        />
                    ))
                    : <div className="w-full">
                        <h3 className="text-lg font-ui-text-4 text-light-2" > No Talks !! </h3>
                    </div>}
            </div>
        </section>
    )
}

export default ProfileTalk
