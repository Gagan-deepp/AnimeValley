import Image from "next/image"

const ProfileHeader = ({ user }) => {
    return (
        <>
            <div className="bg-[#fdf3db] p-4 h-[10rem] relative rounded-3xl">
                <Image src={"/banner/profile.webp"} alt="Profile_banner" fill className="rounded-3xl" />
            </div>

            <div className="flex flex-row gap-4 px-12 relative h-12" >
                <div className="relative w-[7rem]" >
                    <div className="absolute top-[-68px]" >
                        <div className="w-24 h-24 relative rounded-2xl" >
                            <Image src={user.image} alt={user.name} fill className="rounded-2xl" />
                        </div>
                    </div>
                </div>

                <div className="relative h-12 flex-1" >
                    <div className="absolute top-[-64px]" >
                        <div className="flex flex-col gap-1" >
                            <h3 className="subHeading text-light-2" > {user.name} </h3>

                            <div className="flex gap-1 items-start pr-4" >
                                <Image src={"/assest/bio.svg"} alt="bio" width={18} height={18} />

                                <p className="capitalize text-light-6 font-heading text-xs leading-4" > {user.bio} </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute right-0 w-24" >
                    <div className="absolute top-[-52px] " >
                        <div className=" bg-light-2 p-2 rounded-2xl flex gap-2 font-semibold font-heading-2 cursor-pointer" >
                            <Image src={"/assest/edit.svg"} alt='edit' width={18} height={18} className="rounded-2xl" /> Edit
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileHeader