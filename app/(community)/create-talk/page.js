import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import CreateTalk from '@/components/forms/CreateTalk';
import { FaArrowRight } from 'react-icons/fa6';
import Rightsidebar from "@/components/talks/Rightsidebar";

const page = async () => {

    const user = await currentUser();
    if (!user) return null;

    // fetch organization list created by user
    const userInfo = await fetchUser({ userID: user.id });
    if (!userInfo.onBoard) redirect("/onboarding")
    return (
        <section className='fw-full flex gap-6' >
            <div className='w-full flex-1' >

                <div className='my-8 text-light-5'>
                    <h1 className='font-heading-2 text-3xl font-medium flex items-center gap-4' > Create Talk <FaArrowRight />  </h1>
                </div>

                <CreateTalk userId={userInfo._id.toString()} />
            </div>

            <Rightsidebar />
        </section>
    )
}

export default page