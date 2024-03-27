import { fetchTalkByUser } from "@/lib/actions/user.actions"
import TalkCard from "../talks/TalkCard"
import { redirect } from "next/navigation"
import { commmunityTalks } from "@/lib/actions/community.action";
import { ScrollArea } from "../ui/scroll-area";

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

            <ScrollArea className="my-10 h-[90vh] bg-[#322d37a1] p-4 rounded-2xl" >
                <div className="flex flex-col gap-2 items-center" >
                    {userTalks.talks.length > 0 ?
                        userTalks.talks.map((talk, index) => (
                            <TalkCard
                                key={index}
                                id={talk._id}
                                currentUserId={currentUserId}
                                parentId={talk.parentId}
                                heading={talk.heading}
                                content={talk.content}
                                author={accountType === "User" ? { name: userTalks.userName, image: userTalks.image } : { name: talk.author.name, image: talk.author.image }}
                                community={talk.community}
                                createdAt={talk.createdAt}
                                comments={talk.children}
                            />
                        ))
                        : <div className="w-full">
                            <h3 className="text-lg font-ui-text-4 text-light-2" > No Talks !! </h3>
                        </div>}
                </div>
            </ScrollArea>
        </section>
    )
}

export default ProfileTalk
