'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { IoClose } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { usePathname } from "next/navigation";
import { deleteTalk } from "@/lib/actions/talks.action"
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"


const Setting = ({ id, currentUserId, authorID, isComment }) => {
    const pathname = usePathname();
    return (
        <div>
            <Drawer>
                <DrawerTrigger asChild>
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }} >
                        <SlOptionsVertical className='text-light-3 align font-bold' />
                    </motion.div>
                </DrawerTrigger>

                <DrawerContent className="w-[70%] min-h-[30dvh] bg-dark-1 border-none left-[15%] overflow-hidden rounded-3xl pb-5" >
                    <div className="flex flex-col relative gap-6" >

                        <DrawerHeader className="flex justify-between items-center" >
                            <DrawerTitle className="text-light-2 text-2xl" >
                                Options
                            </DrawerTitle>
                            <DrawerClose className="cursor-pointer">
                                <IoClose className="text-light-2 text-xl" />
                            </DrawerClose>
                        </DrawerHeader>

                        <div className="px-8 flex flex-col gap-6" >
                            {currentUserId === authorID &&
                                <div className="flex items-center cursor-pointer" >
                                    < div className='flex-center gap-3'
                                        onClick={async () => {
                                            await deleteTalk(JSON.parse(id), pathname)
                                        }}>
                                        <Image src={'/assest/delete.svg'} alt='share' width={18} height={18} />
                                        <p className="text-xl text-light-7 font-ui-text-2" > Delete </p>
                                    </div>
                                </div>}
                            {
                                !isComment &&
                                <div className='flex self-start gap-3 cursor-pointer' title="share" >
                                    <Image
                                        title="share"
                                        src={'/assest/share.svg'}
                                        alt='share'
                                        width={20}
                                        height={20}
                                    />
                                    <p className="text-xl text-light-7 font-ui-text-2" > Share </p>
                                </div>
                            }

                            <div className="text-xl text-light-7 font-ui-text-2" >
                                <DrawerClose>
                                    Close
                                </DrawerClose>
                            </div>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Setting