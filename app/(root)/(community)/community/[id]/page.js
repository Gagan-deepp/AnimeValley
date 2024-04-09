import Rightsidebar from "@/components/talks/Rightsidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileHeader from "@/components/webcomp/ProfileHeader"
import ProfileTalk from "@/components/webcomp/ProfileTalk";
import Usercard from "@/components/webcomp/Usercard";
import { CommunityTabs } from "@/constants/data";
import { fetchCommunityInfo } from "@/lib/actions/community.action";
import { currentUser } from "@clerk/nextjs"
import Image from "next/image";
import AddTalk from "@/components/talks/AddTalk";
import AccountBack from "@/components/webcomp/AccountBack";

const page = async ({ params }) => {

    const user = await currentUser();
    if (!user) return;
    const communityInfo = await fetchCommunityInfo(params.id)

    const userData = {
        id: user.id,
        name: communityInfo.name || "",
        bio: communityInfo.bio || "",
        image: communityInfo ? communityInfo?.image : user.imageUrl,
    };

    return (
        <section className='main-container items-start' >
            <AddTalk />
            <div className="w-full" >
                <div className="w-full flex gap-6" >
                    <div className="flex-1 mt-8 flex flex-col gap-4" >
                        <h3 className="heading-new sm:flex hidden" > Whispers of Identity </h3>
                        <div className="flex flex-col relative" >
                            <AccountBack title="Whispers of Identity" />
                            <ProfileHeader user={userData} />
                            <div className="mt-4" >
                                <Tabs className="w-full rounded-2xl" defaultValue="talks" >

                                    <TabsList className="tab rounded-2xl" >
                                        {CommunityTabs.map((tab, index) => (
                                            <TabsTrigger key={index} className="tab rounded-2xl" value={tab.value} >
                                                <Image src={tab.img} alt={tab.name} width={24} height={24} />
                                                <p className="max-sm:hidden text-light-3 font-heading-2" > {tab.name} </p>
                                                {tab.name === "Talks" && <p className="text-gray-4 bg-light-2 px-2 py-1 rounded-xl" > {communityInfo.talks.length} </p>}
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>

                                    <TabsContent value="talks" className="w-full" >
                                        <ProfileTalk accountType="Community" accountId={communityInfo._id} />
                                    </TabsContent>

                                    <TabsContent value="members" className="w-full" >
                                        <section className="mt-5 flex flex-col gap-3" >
                                            {communityInfo?.members.map((member, index) => (
                                                <Usercard
                                                    key={index}
                                                    id={member.id}
                                                    isOwner={member._id.toString() === communityInfo.createdBy.toString() ? true : false}
                                                    name={member.name}
                                                    username={member.userName}
                                                    image={member.image}
                                                />
                                            ))}
                                        </section>
                                    </TabsContent>

                                    <TabsContent value="requests" className="w-full" >
                                        <p className="text-base font-bold font-ui-text-3 text-center text-light-6" > We are Currently On It!! </p>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>

                    <div className="xl:flex hidden" >
                        <Rightsidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page