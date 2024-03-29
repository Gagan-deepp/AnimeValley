import Rightsidebar from "@/components/talks/Rightsidebar"
import ProfileHeader from "@/components/webcomp/ProfileHeader"
import ProfileTab from "@/components/webcomp/ProfileTab";
import { fetchUser } from "@/lib/actions/user.actions";
import AddTalk from "@/components/talks/AddTalk";
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation";

const page = async ({ params }) => {

  const user = await currentUser();
  if (!user) return;

  const userInfo = await fetchUser({ userID: params.id })
  if (!userInfo.onBoard) redirect("/onboarding")

  const userData = {
    Clerkid: user.id,
    Mongoid: userInfo.id,
    username: user.username,
    name: userInfo.name || "",
    bio: userInfo.bio || "",
    image: userInfo ? userInfo?.image : user.imageUrl,
    talksLength: userInfo.talks.length || 0
  };

  return (
    <section className='main-container items-start' >
      <AddTalk />
      <div className="w-full" >
        <div className="w-full flex gap-6" >
          <div className="flex-1 mt-8 flex flex-col gap-4" >
            <h3 className="heading-new" > Whispers of Identity </h3>

            <div>
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