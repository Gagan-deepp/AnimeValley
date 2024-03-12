import Image from "next/image"
import Link from "next/link"

const Rightsidebar = async ({ communities }) => {

  console.log("Communities : ", communities)
  return (
    <Link href={"/"} className='rightsidebar bg-[#5b5464] rounded-3xl mt-8' >
      <div>
        <h3 className='heading-new text-xl text-light-6' > Top Communities ~ </h3>

        <div className=' flex flex-col gap-2 mt-5'>
          {communities.map((community, index) => (
            <div key={index} className="rounded-2xl bg-red-400 p-4 flex gap-3" >
              <div className="w-24 h-24 relative" >
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default Rightsidebar