import { ProfileTabs } from "@/constants/data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import Image from "next/image"
import ProfileTalk from "./ProfileTalk"

const ProfileTab = ({ length, accountType, accountId , currentUserId }) => {
    return (
        <div className="mt-4" >
            <Tabs className="w-full rounded-2xl" defaultValue="talks" >

                <TabsList className="tab rounded-2xl" >
                    {ProfileTabs.map((tab, index) => (

                        <TabsTrigger key={index} className="tab rounded-2xl" value={tab.name} >
                            <Image src={tab.img} alt={tab.name} width={24} height={24} />
                            <p className="max-sm:hidden text-light-3 font-heading-2" > {tab.name} </p>
                            {tab.name === "Talks" && <p className="text-gray-4 bg-light-2 px-2 py-1 rounded-xl" > {length} </p>}
                        </TabsTrigger>

                    ))}
                </TabsList>

                {ProfileTabs.map((tab, index) => (
                    <TabsContent key={index} value={tab.name} className="w-full" >
                        <ProfileTalk accountType={accountType} accountId={accountId} currentUserId={currentUserId} />
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

export default ProfileTab
