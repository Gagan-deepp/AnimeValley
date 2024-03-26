import Image from "next/image"
import Link from "next/link"

const Usercard = ({ id, name, username, image, isOwner }) => {
    return (
        <Link href={`/profile/${id}`} className="bg-[#5b546490] backdrop-blur-lg p-4 rounded-2xl" >
            <div className="flex items-center flex-1 justify-between" >
                <div className="flex gap-2 items-start" >
                    <div className="w-12 h-12 relative" >
                        <Image src={image} alt={name} fill className="rounded-2xl " />
                    </div>

                    <div>
                        <div className="flex gap-3 items-center" >
                            <p className="text-light-2 font-ui-text font-semibold " > {name} </p>
                        </div>
                        <p className="text-gray-3 font-normal text-sm leading-3 font-ui-text-2" > @{username} </p>
                    </div>
                </div>

                <div >
                    {isOwner && <Image src={"/assest/owner.png"} alt="Owner" width={24} height={24} />}
                </div>
            </div>
        </Link>
    )
}

export default Usercard
