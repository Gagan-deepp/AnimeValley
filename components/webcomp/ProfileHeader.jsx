import Image from "next/image"
import Link from "next/link"

const ProfileHeader = ({ user, accountType }) => {
    return (
        <div className="relative h-fit bg-mainColor-2 mt-10 rounded-2xl pb-3" >

            <div className="h-[10rem] relative rounded-2xl">
                <Image src={"/banner/profile.webp"} alt="Profile_banner" fill className=" rounded-t-2xl  object-cover" />
                <div className="absolute right-4 top-10 sm:hidden inline-block" >
                    <div >
                        {user.Clerkid === user.Mongoid && accountType === 'User' && (<Link href={"/profile/edit"} className=" bg-light-2 p-2 rounded-2xl flex gap-2 font-semibold font-heading-2 cursor-pointer" >
                            <Image src={"/assest/edit.svg"} alt='edit' width={18} height={18} className="rounded-2xl" />
                        </Link>)}
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:items-start items-center gap-24 sm:flex-row sm:gap-4 px-12 relative md:rounded-none rounded-b-2xl" >
                <div className="relative w-full sm:w-[7rem] flex-center" >
                    <div className="absolute top-[-68px] left-0" >
                        <div className="md:w-[6rem] md:h-[6rem] w-36 h-36 relative rounded-3xl " >
                            <Image src={user.image} alt={user.name} fill className="rounded-3xl" />
                        </div>
                    </div>
                </div>

                <div className="relative h-12 flex-1 self-start" >
                    <div className="sm:absolute sm:top-[-64px]" >
                        <div className="flex flex-col gap-3 md:gap-1" >
                            <h3 className="subHeading text-light-2" > {user.name} </h3>

                            {accountType === 'User' && <div className=" flex md:hidden gap-1 items-start pr-4 " >
                                <Image src={"/assest/id.svg"} alt="bio" width={18} height={18} />

                                <p className="text-light-6 font-ui-text text-xs leading-4" > @{user.username} </p>
                            </div>}
                            <div className="flex gap-1 items-start pr-4" >
                                <Image src={"/assest/bio.svg"} alt="bio" width={18} height={18} />

                                <p className="capitalize text-light-6 font-ui-text text-xs leading-4" > {user.bio} </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="absolute right-0 w-24 hidden sm:inline-block" >
                    <div className="absolute top-[-52px] " >
                        {user.Clerkid === user.Mongoid && accountType === 'User' && (<Link href={"/profile/edit"} className=" bg-light-2 p-2 rounded-2xl flex gap-2 font-semibold font-heading-2 cursor-pointer" >
                            <Image src={"/assest/edit.svg"} alt='edit' width={18} height={18} className="rounded-2xl" /> Edit
                        </Link>)}
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ProfileHeader