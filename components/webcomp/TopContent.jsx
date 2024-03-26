import { fetchAnime, fetchPopularAnime } from '@/lib/actions/fetch.action'
import Card from './Card'
import Arrow from '../extras/Arrow';
import { currentUser } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const TopContent = async ({ page, title }) => {
    let response;
    if (page === 'second') {
        response = await fetchPopularAnime(1)
    } else {
        response = await fetchAnime(1)
    }

    const user = await currentUser();
    const userInfo = await fetchUser({ userID: user?.id });
    // if (userInfo?.onBoard) redirect("/");

    return (

        <section className='w-full pb-6 relative' >
            <div>
                <h2 className='font-ui-text-4 font-bold text-3xl text-light-2' > {title} </h2>
            </div>
            <div className='mt-12' >
                <Card data={response?.data} userID={JSON.stringify(userInfo?._id)} />
            </div>

            <Arrow href={"/"} />
        </section>
    )
}

export default TopContent