import Image from 'next/image'
import Link from 'next/link'
import { BiMessageSquareDetail } from "react-icons/bi";


const TalkCard = ({ id, currentUserId, parentId, content, author, community, createdAt, comments, isComment, heading }) => {

  return (
    <article className={`w-full relative ${isComment ? 'p-4 px-6 xs:px-7 bg-color-comment gap-3 ' : 'gap-4 bg-[#5b5464] px-8 pt-6 pb-5 hover:bg-card-bg-hover hover:scale-[1.01]'}  flex flex-col  my-4 rounded-[2rem]  duration-300 cursor-pointer ease-in-out `} >

      <div className={`flex w-full flex-1 flex-row ${isComment ? 'gap-4' : 'gap-5'} items-center relative`} >
        <div className='flex flex-col items-center'>
          <Link href={`/profile/${author.id}`} className={`relative ${isComment ? 'h-10 w-10' : 'h-14 w-14'}`}>
            <Image
              src={author.image}
              alt='user_community_image'
              fill
              className={`cursor-pointer ${isComment ? 'rounded-full' : 'rounded-2xl'}  grayscale-[30%]`}
            />
          </Link>
        </div>

        <div className='flex flex-1 flex-col gap-1 text-light-2' >
          <h3 className='font-ui-text-3 font-bold text-xl' > {heading} </h3>

          <div className={`flex gap-3 ${!isComment && 'mt-2'}`} >
            <div className='thread-card_bar' />
            <p className='font-ui-text' > {content} </p>
          </div>
        </div>

        <div className='flex gap-4 items-center' >
          <p className='text-gray-3 text-base lowercase font-ui-text-2' > @{author.name} </p>
          {!isComment &&
            <div className='flex self-start hover:scale-[1.1] duration-150 ease-in-out p-2 rounded-full bg-gray-5'>
              <Image
                src={'/assest/share.svg'}
                alt='share'
                width={20}
                height={20}
              />
            </div>}
        </div>
      </div>

      <div className='bg-gray-4 rounded-xl w-full h-[1px]' />

      <div className='flex gap-8 items-center text-gray-3 text-xs' >
        <div className='flex items-center gap-2' >
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
          <BiMessageSquareDetail />
          <p> {comments.length} Repl{comments.length > 1 ? 'ies' : 'y'}  </p>
        </Link>
      </div>
    </article>
  )
}

export default TalkCard