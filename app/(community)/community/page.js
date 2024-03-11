import Rightsidebar from '@/components/talks/Rightsidebar';
import TalkCard from '@/components/talks/TalkCard';
import { fetchCommunities } from '@/lib/actions/community.action';
import { fetchPost } from '@/lib/actions/talks.action';
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/dist/server/api-utils';
import { TbArrowBigRightFilled } from "react-icons/tb";

const page = async () => {

  const user = await currentUser()
  if (!user) return;

  const userInfo = await fetchUser({ userID: user.id })
  if (!userInfo.onBoard) redirect("/onboarding")

  const resultPost = await fetchPost();

  const result = await fetchCommunities({
    searchText: "",
    pageNo: 1,
    pageSize: 5
  })
  console.log(result)
  return (
    <section className="w-full flex gap-6" >
      <div className='w-full flex-1' >
        <div className='my-8 text-light-5'>
          <h1 className='font-heading-2 text-3xl font-medium flex items-center gap-4' > Whispers of Connection <TbArrowBigRightFilled />  </h1>
        </div>
        {
          resultPost.allTalks.length === 0 ? (<p> No Talks Currently On At This Time !! </p>) : (
            resultPost?.allTalks?.map((talk, index) => (
              <div key={index}>
                <TalkCard
                  id={talk._id}
                  currentUserId={user.id}
                  parentId={talk.parentId}
                  heading={talk.heading}
                  content={talk.content}
                  author={talk.author}
                  community={talk.community}
                  createdAt={talk.createdAt}
                  comments={talk.children}
                />
              </div>
            ))
          )
        }
      </div>
      <Rightsidebar communities={result.allCommunities} />
    </section>
  )
}

export default page