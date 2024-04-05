'use client'
import { deleteTalk } from "@/lib/actions/talks.action"
import Image from "next/image"
import { usePathname } from "next/navigation"

const TalkBtn = ({ id, currentUserId, authorName, authorID, isComment }) => {
    const pathname = usePathname();

    return (
        <div className='sm:flex gap-4 items-center hidden' >
            <p className='text-gray-3 text-base lowercase font-ui-text-2' > @{authorName} </p>
            {currentUserId === authorID && (< div className='flex self-start hover:scale-[1.1] duration-150 ease-in-out p-2 rounded-full bg-gray-5'
                onClick={async () => {
                    await deleteTalk(JSON.parse(id), pathname)
                }}>
                <Image src={'/assest/delete.svg'} alt='share' width={20} height={20} />
            </div>)}
            {
                !isComment &&
                <div className='hidden sm:flex self-start hover:scale-[1.1] duration-150 ease-in-out p-2 rounded-full bg-gray-5' title="share" >
                    <Image
                        title="share"
                        src={'/assest/share.svg'}
                        alt='share'
                        width={20}
                        height={20}
                    />
                </div>
            }
        </div >
    )
}

export default TalkBtn
