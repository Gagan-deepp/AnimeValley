import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import AddTalk from "@/components/talks/AddTalk";
import CreateTalk from '@/components/forms/CreateTalk';
import Rightsidebar from "@/components/talks/Rightsidebar";
import { TbArrowBigRightFilled } from "react-icons/tb";
import { fetchCommunities } from "@/lib/actions/community.action";

const page = async () => {

    const user = await currentUser();
    if (!user) return null;

    // fetch organization list created by user
    const userInfo = await fetchUser({ userID: user.id });
    if (!userInfo.onBoard) redirect("/onboarding");

    const result = await fetchCommunities({
        searchText: "",
        pageNo: 1,
        pageSize: 4
    })

    return (

        <section className='main-container items-start' >
            <AddTalk />
            <div className="w-full" >
                <div className='fw-full flex gap-6' >
                    <div className='w-full flex-1' >

                        <div className='my-8 text-light-5'>
                            <h1 className='font-heading-2 text-3xl font-medium flex items-center gap-4' > Create Talk <TbArrowBigRightFilled />  </h1>
                        </div>

                        <CreateTalk communities={JSON.stringify(result?.allCommunities)} userId={userInfo._id.toString()} />
                    </div>

                    <Rightsidebar />
                </div>
            </div>
        </section>
    )
}

export default page