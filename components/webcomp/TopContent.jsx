import { fetchAnime, fetchAnimeMovie, fetchPopularAnime, fetchPopularmanga } from '@/lib/actions/fetch.action'
import Card from './Card'
import Arrow from '../extras/Arrow';
import { currentUser } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.actions';

const TopContent = async ({ page, title, type }) => {
    let response;
    if (page === 'second') {
        response = await fetchPopularAnime(1)
    }
    else if (page === 'fourth') {
        response = await fetchAnimeMovie(1)
    }
    else {
        response = await fetchAnime(1)
    }

    const user = await currentUser();
    const userInfo = await fetchUser({ userID: user?.id });

    return (

        <section className='w-full pb-6 relative' >
            <div>
                <h2 className='font-ui-text-3 font-bold text-3xl text-light-2' > {title} </h2>
            </div>
            <div className='mt-10' >
                <Card data={response?.data} type={type} userID={JSON.stringify(userInfo?._id)} />
            </div>

            <Arrow href={"/"} />
        </section>
    )
}

export default TopContent