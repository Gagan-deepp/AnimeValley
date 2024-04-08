import { fetchCommunities } from "@/lib/actions/community.action"
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image"
import Link from "next/link"
import Arrow from "../extras/Arrow";

const Rightsidebar = async () => {

  const result = await fetchCommunities({
    searchText: "",
    pageNo: 1,
    pageSize: 4
  })

  const bgs = ['#eceaeb', '#faf1dc', '#d3f1e7',];

  return (
    <div className='rightsidebarAdj xl:rightsidebar bg-[#5b5464] rounded-3xl' >
      <div>
        <h3 className='heading-new text-xl text-light-6' > Top Communities ~ </h3>

        <div className={`grid grid-cols-2 gap-4 mt-5 relative ${result.allCommunities.length === 0 ? "grid-cols-1" : ""}`}>
          <Arrow href={"/community"} />
          {result.allCommunities.length === 0 ?
            <p className="font-ui-text-4 font-bold text-light-6 text-center" > No Communities !! </p>
            : result.allCommunities.map((community, index) => (
              <Link href={`/community/${community.uniqueID}`} key={index}
                style={{ background: `${bgs[(index % 3 + 3) % 3]}` }}
                className={`rounded-3xl p-2  gap-1 flex flex-col h-[15rem] w-full md:w-[10rem]`} >

                <div className="flex gap-2 items-center " >
                  <div className="w-8 h-8 relative" >
                    <Image src={community.createdBy.image} fill alt={community.createdBy.name} className="object-cover rounded-full" />
                  </div>

                  <div className="flex flex-col justify-center" >
                    <p className="font-ui-text-4 font-semibold text-sm leading-3" > {community.createdBy.name} </p>
                    <p className="text-xs font-ui-text-2" > @{community.createdBy.userName} </p>
                  </div>
                </div>

                <div className='flex-1 rounded-2xl relative flex'>
                  <div className="absolute top-0 right-0 left-0 z-0 w-full h-full rounded-2xl" >
                    <Image src={community.image} className="rounded-2xl w-full h-full"
                      width={100} height={100}
                      alt="bg" quality={100} />
                  </div>

                  <div className="z-[1] relative px-2 flex flex-1 flex-col self-end bg-glassmorphism backdrop-blur-md rounded-2xl overflow-hidden" >
                    <div>
                      <div>
                        <p className="text-base font-ui-text font-extrabold" > {community.name} </p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 items-center" >
                      <div className=" flex items-center rounded-2xl gap-1 p-2 bg-glassmorphism2 backdrop-blur-lg" >
                        <Image src={"/assest/profile.svg"} alt="bio" width={15} height={15} />
                        <span className="text-xs font-bold text-light-1" > {community.members.length} </span>
                      </div>

                      <div className="bg-glassmorphism2 backdrop-blur-md flex items-center rounded-2xl gap-2 p-2" >
                        <Image src={"/assest/bio.svg"} alt="bio" width={15} height={15} />
                        <span className="text-xs text-light-1" > {community.talks.length} </span>
                      </div>
                    </div>
                  </div>
                </div>

              </Link>
            ))}
        </div>
        {!result.isNext && result.allCommunities.length > 1 && <div className="justify-center items-center hidden mt-3 xl:flex">
          <p className="text-light-7 font-ui-text-4 flex items-center gap-2" > See more <FaChevronRight />  </p>
        </div>}
      </div>
    </div >
  )
}

export default Rightsidebar