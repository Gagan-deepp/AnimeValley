import AddTalk from "@/components/talks/AddTalk";
import Rightsidebar from '@/components/talks/Rightsidebar';
import TalkCard from '@/components/talks/TalkCard';
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchPost } from '@/lib/actions/talks.action';
import { currentUser } from '@clerk/nextjs'
import { TbArrowBigRightFilled } from "react-icons/tb";

// NOTE: Function
const page = async ({ searchParams }) => {

  const user = await currentUser()

  const resultPost = await fetchPost({ searchText: searchParams.search ? searchParams.search : "", pageNo: 1, pageSize: 5 });
  return (
    <div className='main-container pb-24' >
      <AddTalk />
      <div className="w-full h-full" >
        <div className="w-full flex gap-6 h-full" >
          <div className='w-full flex-1 h-full flex-grow' >
            <div className='my-8 mb-4 text-light-5'>
              <h1 className='font-heading-2 text-3xl font-medium flex items-center gap-2' > Whispers of Connection <TbArrowBigRightFilled /> </h1>
            </div>

            <div className='flex xl:hidden' >
              <Rightsidebar />
            </div>
            <div className='my-8 text-light-5 flex xl:hidden'>
              <h1 className='font-heading-2 text-3xl font-medium flex items-center gap-2' > Whispers in Talk <TbArrowBigRightFilled />  </h1>
            </div>

            <div className="h-[90vh] w-full bg-[#322d37a1] p-4 rounded-2xl relative overflow-y-scroll"  >
              <div className="flex flex-col gap-2 items-center" >
                {resultPost.allTalks.length === 0 ? (<p> No Talks Currently On At This Time !! </p>) : (
                  resultPost?.allTalks?.map((talk, index) => (
                    <div key={index} className="w-full justify-center flex" > 
                      <TalkCard
                        id={talk._id}
                        currentUserId={user.id}
                        parentId={talk.parentId}
                        heading={talk.heading}
                        content={talk.content}
                        author={talk.author}
                        community={talk.communities?.name}
                        createdAt={talk.createdAt}
                        comments={talk.children}
                      />
                    </div>
                  )))}
              </div>
            </div>
          </div>
          <div className='hidden xl:flex' >
            <Rightsidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page