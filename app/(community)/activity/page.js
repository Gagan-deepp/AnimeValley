import Rightsidebar from "@/components/talks/Rightsidebar";
import { fetchUser, fetchUserActivity } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

const page = async () => {

    const user = await currentUser()
    if (!user) return;

    const userInfo = await fetchUser({ userID: user.id })
    if (!userInfo.onBoard) redirect("/onboarding")

    // NOTE: fetchUser Activity
    const activities = await fetchUserActivity({ userID: userInfo._id })
    return (
        <section className="w-full flex gap-6" >
            <div className='w-full flex-1' >
                <div className='my-8 text-light-5'>
                    <h1 className='font-heading-2 text-3xl font-medium flex items-center gap-4' > Whispers of the Day <FaArrowRight />  </h1>
                </div>

                {
                    activities.map((activity, index) => {
                        return (
                            <Link href={`/community/talk/${activity.parentId}`} key={index} >
                                <article className="flex gap-4 px-4 py-2 items-center rounded-2xl bg-dark-4" >
                                    <Image src={activity.author.image} alt={activity.author.name} width={30} height={30} className="rounded-2xl" />

                                    <p className="text-light-4 text-base font-ui-text" > <span className="text-blue font-ui-text-2">{activity.author.name} </span> commented on your Talk </p>
                                </article>
                            </Link>
                        )
                    })
                }
            </div>

            <Rightsidebar />
        </section>
    )
}

export default page
