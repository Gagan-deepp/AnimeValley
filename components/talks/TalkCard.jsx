import { dateFormat } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import { BiMessageSquareDetail } from "react-icons/bi";
import TalkBtn from './TalkBtn';


const TalkCard = ({ id, currentUserId, parentId, content, author, community, createdAt, comments, isComment, heading }) => {

  const testDate = dateFormat(createdAt)
  return (
    <article className={`w-[95%] relative ${isComment ? 'p-4 px-4 xs:px-7 bg-color-comment gap-3 ' : 'gap-3 bg-[#5b5464] sm:px-8 px-6 pt-6 pb-6 hover:bg-card-bg-hover hover:scale-[1.01]'}  flex flex-col  my-4 rounded-[2rem]  duration-300 cursor-pointer ease-in-out `} >

      <div className={`flex w-full flex-1 md:flex-row flex-col ${isComment ? 'gap-4' : 'sm:gap-5 gap-3'} relative`} >
        <div className='flex justify-between items-center w-full md:w-auto'>
          <Link href={`/profile/${author.id}`} className={`relative items-center ${isComment ? 'h-10 w-10' : 'h-14 w-14'}`}>
            <Image
              src={author.image}
              alt='user_community_image'
              fill
              className={`cursor-pointer ${isComment ? 'rounded-full' : 'rounded-2xl'} `}
            />

          </Link>
          <div className='flex md:hidden items-center gap-2'>
            {!isComment && community !== undefined ?
              <p className='text-sm font-ui-text bg-[#322d37a1] px-3 py-2  rounded-2xl text-gray-3 min-[480]:flex md:hidden hidden sm:flex'>
                {community}
              </p>
              : ""}
            <p className='text-gray-3 text-base lowercase font-ui-text-2 ' > @{author.name} </p>
          </div>
        </div>

        <div className='flex flex-1 flex-col text-light-2 gap-2 sm:gap-0' >
          <div className='flex items-center justify-between' >
            <h3 className='font-ui-text-3 font-bold text-xl' > {heading} </h3>
          </div>

          <div className={`flex gap-3 p-2`} >
            <div className='thread-card_bar' />
            <p className='font-ui-text' > {content} </p>
          </div>
        </div>

        <TalkBtn id={JSON.stringify(id)} currentUserId={currentUserId}
          authorName={author.userName} authorID={author.id} isComment={isComment} />
      </div>

      <div className='bg-gray-4 rounded-xl w-full h-[1px]' />

      <div className='flex flex-row gap-4 sm:gap-8 items-start sm:items-center justify-between text-gray-3 text-xs' >
        <div className='flex gap-8 items-center' >
          <div className='flex items-center gap-2' title='Like' >
            <Image
              src={'/assest/like.svg'}
              alt='addBtn'
              width={20}
              height={20}
            />
            <p> 2.5k </p>
          </div>
          <div className='flex items-center gap-2' >
            <Image
              src={'/assest/dislike.svg'}
              alt='addBtn'
              width={20}
              height={20}
            />
            <p> 342 </p>
          </div>
          <Link href={`/community/talk/${id}`} className='flex items-center gap-2' >
            <BiMessageSquareDetail className='text-[20px]' />
            <p> {comments.length} Repl{comments.length > 1 ? 'ies' : 'y'}  </p>
          </Link>
        </div>

        <div className='hidden items-center gap-4 md:flex ' >
          {!isComment && community !== undefined ?
            <p className='text-sm font-ui-text bg-[#322d37a1] px-3 py-2  rounded-2xl' >
              {community}
            </p>
            : ""}
          <p className='text-xs text-gray-3 sm:flex hidden' > {testDate} </p>
        </div>
      </div>
    </article>
  )
}

export default TalkCard