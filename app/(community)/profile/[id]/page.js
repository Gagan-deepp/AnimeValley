import Rightsidebar from "@/components/talks/Rightsidebar"
import ProfileHeader from "@/components/webcomp/ProfileHeader"
import ProfileTab from "@/components/webcomp/ProfileTab";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation";

const page = async ({ params }) => {

  const user = await currentUser();
  if (!user) return;
  
  const userInfo = await fetchUser({ userID: params.id })
  if (!userInfo.onBoard) redirect("/onboarding")

  const userData = {
    id: user.id,
    username: user.username,
    name: userInfo.name || "",
    bio: userInfo.bio || "",
    image: userInfo ? userInfo?.image : user.imageUrl,
    talksLength: userInfo.talks.length || 0
  };

  return (
    <section className="w-full flex gap-6" >
      <div className="flex-1 mt-8 flex flex-col gap-4" >
        <h3 className="heading-new" > Whispers of Identity </h3>

        <div>
          <ProfileHeader user={userData} />
          <ProfileTab length={userData.talksLength} currentUserId={user.id} accountId={userInfo.id} accountType='User' />
        </div>
      </div>
      <Rightsidebar />
    </section>
  )
}

export default page