import { ScrollableArea } from "@/components/extras/MotionDiv";
import AddTalk from "@/components/talks/AddTalk";
import Rightsidebar from '@/components/talks/Rightsidebar';
import TalkCard from '@/components/talks/TalkCard';
import { fetchPost } from '@/lib/actions/talks.action';
import { currentUser } from '@clerk/nextjs';
import { TbArrowBigRightFilled } from "react-icons/tb";

// NOTE: Function
const page = async ({ searchParams }) => {

  const user = await currentUser()

  const resultPost = await fetchPost({ searchText: searchParams.search ? searchParams.search : "", pageNo: 1, pageSize: 5 });
  return (
    <div className='w-full md:w-[90%] mx-auto min-h-screen sm:px-6 px-6 sm:pb-10 pt-5 max-md:pb-5 pb-10 overflow-hidden'>
      <AddTalk />
      <div className="h-screen flex flex-col w-full">
        <div className="flex gap-6 w-full h-full">
          {/* Whisper Connection and Talk Div */}
          <div className='h-full flex flex-col w-[65%]'>

            {/* Heading */}
            <div className='my-8 mb-4 text-light-5'>
              <h1 className='font-heading-2 text-3xl font-medium flex items-center gap-2'>
                Whispers of Connection <TbArrowBigRightFilled />
              </h1>
            </div>

            {/* Talk Card */}
            <div className="w-full bg-[#322d37a1] p-4 rounded-2xl flex-1 overflow-hidden">
              <ScrollableArea className="flex flex-col gap-2 items-center h-full">
                {resultPost.allTalks.length === 0 ? (
                  <p>No Talks Currently On At This Time !!</p>
                ) : (
                  resultPost?.allTalks?.map((talk, index) => (
                    <div key={index} className="w-full justify-center flex">
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
                  ))
                )}
              </ScrollableArea>
            </div>

            {/* For Mobile */}
            <div className='xl:hidden mt-8'>
              <div className='mb-4 text-light-5'>
                <h1 className='font-heading-2 text-3xl font-medium flex items-center gap-2'>
                  Whispers in Talk <TbArrowBigRightFilled />
                </h1>
              </div>
              <Rightsidebar />
            </div>
          </div>

          {/* Right SideBar */}
          <div className='hidden xl:flex'>
            <Rightsidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page