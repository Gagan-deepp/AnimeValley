import Onboard from "@/components/forms/Onboard";
import AddTalk from "@/components/talks/AddTalk";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { TbArrowBigRightFilled } from "react-icons/tb";

const page = async () => {

    const user = await currentUser();
    if (!user) return null; // to avoid typescript warnings

    const userInfo = await fetchUser({ userID: user.id });
    if (!userInfo?.onBoard) redirect("/");

    const userData = {
        id: user.id,
        objectId: JSON.stringify(userInfo?._id),
        username: userInfo ? userInfo?.userName : user.username,
        name: userInfo ? userInfo?.name : user.firstName ?? "",
        bio: userInfo ? userInfo?.bio : "",
        image: userInfo ? userInfo?.image : user.imageUrl,
    };

    return (
        <section className='main-container items-start' >
            <AddTalk />
            <div className="w-full" >
                <div className="w-full flex gap-6" >
                    <div className="flex-1 mt-8 flex flex-col gap-4" >
                        <h3 className="heading-new flex gap-2" > Whispers of Identity Craft <TbArrowBigRightFilled /></h3>

                        <section className='bg-dark-2 p-10 rounded-xl'>
                            <Onboard userData={userData} title={"Whisper Update"} />
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
