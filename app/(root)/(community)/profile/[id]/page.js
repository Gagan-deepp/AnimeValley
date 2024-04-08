import Rightsidebar from "@/components/talks/Rightsidebar"
import ProfileHeader from "@/components/webcomp/ProfileHeader"
import ProfileTab from "@/components/webcomp/ProfileTab";
import { fetchUser } from "@/lib/actions/user.actions";
import AddTalk from "@/components/talks/AddTalk";
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation";
import AccountBack from "@/components/webcomp/AccountBack";

const page = async ({ params }) => {

  const user = await currentUser();
  if (!user) return;

  const userInfo = await fetchUser({ userID: params.id })
  if (!userInfo.onBoard) redirect("/onboarding")

  const userData = {
    Clerkid: user.id,
    Mongoid: userInfo.id,
    username: user.username || userInfo.userName,
    name: userInfo.name || "",
    bio: userInfo.bio || "",
    image: userInfo ? userInfo?.image : user.imageUrl,
    talksLength: userInfo.talks.length || 0
  };

  return (
    <section className='main-container items-start sm:px-6 px-4' >
      <AddTalk />
      <div className="w-full" >
        <div className="w-full flex gap-10" >
          <div className="flex-1 sm:mt-8 flex flex-col gap-4" >
            <h3 className="heading-new sm:flex hidden" > Whispers of Identity </h3>

            <div className="flex flex-col relative" >
              <AccountBack title="Whispers of Identity" />
              <ProfileHeader user={userData} accountType='User' />
              <ProfileTab length={userData.talksLength} currentUserId={user.id} accountId={userInfo.id} accountType='User' />
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