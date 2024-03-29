import Image from "next/image"
import Link from "next/link"

const ProfileHeader = ({ user, accountType }) => {
    return (
        <div className="sm:relative absolute top-0 left-0 right-0 sm:h-fit h-[50vh]" >
            <div className="p-4 sm:h-[10rem] h-1/2 relative rounded-b-[5rem] sm:rounded-3xl">
                <Image src={"/banner/profile.webp"} alt="Profile_banner" fill className=" rounded-b-3xl sm:rounded-[5rem]" />
                <div className="absolute right-4 top-10 sm:hidden inline-block" >
                    <div >
                        {user.Clerkid === user.Mongoid && accountType === 'User' && (<Link href={"/profile/edit"} className=" bg-light-2 p-2 rounded-2xl flex gap-2 font-semibold font-heading-2 cursor-pointer" >
                            <Image src={"/assest/edit.svg"} alt='edit' width={18} height={18} className="rounded-2xl" />
                        </Link>)}
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:items-start items-center gap-24 sm:flex-row sm:gap-4 px-12 relative h-12" >
                <div className="relative w-[7rem]" >
                    <div className="absolute top-[-68px]" >
                        <div className="sm:w-24 sm:h-24 w-36 h-36 relative rounded-2xl " >
                            <Image src={user.image} alt={user.name} fill className="rounded-2xl" />
                        </div>
                    </div>
                </div>

                <div className="relative h-12 flex-1 self-start" >
                    <div className="sm:absolute sm:top-[-64px]" >
                        <div className="flex flex-col gap-1" >
                            <h3 className="subHeading text-light-2" > {user.name} </h3>

                            <div className="flex gap-1 items-start pr-4" >
                                <Image src={"/assest/bio.svg"} alt="bio" width={18} height={18} />

                                <p className="capitalize text-light-6 font-heading text-xs leading-4" > {user.bio} </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute right-0 w-24 hidden sm:inline-block" >
                    <div className="absolute top-[-52px] " >
                        {user.Clerkid === user.Mongoid && accountType === 'User' && (<Link href={"/profile/edit"} className=" bg-light-2 p-2 rounded-2xl flex gap-2 font-semibold font-heading-2 cursor-pointer" >
                            <Image src={"/assest/edit.svg"} alt='edit' width={18} height={18} className="rounded-2xl" /> Edit
                        </Link>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader