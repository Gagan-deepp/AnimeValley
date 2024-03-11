import Image from "next/image"

const Rightsidebar = async ({ communities }) => {
  return (
    <div className='rightsidebar bg-[#f9f3db] rounded-3xl mt-8' >
      <div>
        <h3 className='heading-new text-xl text-gray-4' > Top Communities ~ </h3>

        <div className=' flex flex-col gap-2 bg-[#4c4863] '>
          {communities.map((community, index) => (
            <div key={index} >
              <div>
                <Image src={community.image} width={30} height={30} alt={community.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Rightsidebar