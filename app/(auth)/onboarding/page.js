import Onboard from '@/components/forms/Onboard'
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const page = async () => {

    const user = await currentUser();
    if (!user) return null; // to avoid typescript warnings

    const userInfo = await fetchUser({ userID: user.id });
    if (userInfo?.onBoard) redirect("/");

    const userData = {
        id: user.id,
        objectId: userInfo?._id,
        username: userInfo ? userInfo?.username : user.username,
        name: userInfo ? userInfo?.name : user.firstName ?? "",
        bio: userInfo ? userInfo?.bio : "",
        image: userInfo ? userInfo?.image : user.imageUrl,
    };

    return (
        <main className='max-w-3xl mx-auto flex flex-col px-10 py-20 gap-6' >
            <h1 className='font-bold text-light-1 text-xl' > Few More Steps To Go.... </h1>
            <p className='font-bold text-light-2 text-base' > Complete Few More Steps to land your desired location </p>

            <section className='bg-dark-2 p-10 rounded-xl'>
                <Onboard userData={userData} title={"continue"} />
            </section>
        </main>
    )
}

export default page