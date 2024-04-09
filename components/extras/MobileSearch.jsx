import Image from "next/image"
import RootSearch from '../forms/RootSearch'

const MobileSearch = () => {
    const items = [
        {
            img: "/banner/profile.webp",
            content: "Anime",
        },
        {
            img: "/banner/test.png",
            content: "Upcoming Anime",
        },
        {
            img: "/banner/bg.webp",
            content: "Most Popular Anime ...?",
        },
        {
            img: "/banner/bg-final.jpg",
            content: "Manga World",
        },

    ];


    return (
        <div className='w-full h-full flex flex-col gap-7' >
            <div className='w-full flex sm:hidden' >
                <RootSearch />
            </div>

            <div className="w-full h-full flex flex-col gap-9" >
                <div>
                    <h3 className='text-base sm:text-3xl font-ui-text-3 font-bold text-light-2' > Discover Your Interest </h3>
                </div>


                <div className="w-full mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 gap-y-12">
                    {items.map((item, i) => (
                        <div className="min-h-[8rem] w-full h-full bg-glassmorphism3 hover:bg-glassmorphism2 rounded-xl flex relative cursor-pointer" key={i} >
                            <div className="h-full w-full sm:w-1/2 relative rounded-t-xl rounded-bl-lg z-0" >
                                <Image src={item.img} alt="search_img" fill className="object-cover rounded-tl-xl rounded-bl-lg" />
                            </div>

                            <div className="flex-1 flex-center hover:bg-glassmorphism2 sm:relative absolute inset-0 z-[1] bg-glassmorphism3" >
                                <p className="text-light-6 font-heading-design text-base" > {item.content} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MobileSearch