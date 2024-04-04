'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Arrow from "../extras/Arrow";

const OurCommunity = () => {

    return (

        <section className='slideWrapper mt-[10rem] relative pb-12 sm:pb-8' >
            <div>
                <h2 className='font-ui-text-4 font-bold text-3xl text-light-2' > Tales Of Our Community </h2>
            </div>

            <Arrow href={"/community"} />

            <div className='mt-12 flex-center' >
                <BentoGrid className="max-w-4xl  md:auto-rows-[15rem]">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            index={i}
                            img={item.image}
                            description={item.description}
                            header={item.header}
                            className={item.className}
                        />
                    ))}
                </BentoGrid>
            </div>

        </section>


    )
}

export default OurCommunity



// bg-[#141414] 
const Skeleton = ({ image, bg }) => (

    <Link href={"/community"} className="relative h-full rounded-xl flex p-4 items-center gap-3">
        {/* <Image src={bg} alt="test" fill className="z-[-1] rounded-xl" /> */}

        {image && <div className="relative w-20 h-20" >
            <Image src={image} alt="test" fill />
        </div>}

        <div className=" flex-center " >
            <h3 className="text-[#8a8a8a] font-ui-text-4 text-3xl" > 10+ <span className="text-light-1" > Anime </span> Communities </h3>
        </div>

    </Link>
);
const SkeletonThree = ({ image, title, bg }) => (

    <Link href={"/community"} className="relative h-full rounded-xl flex p-4">
        <Image src={bg} alt="test" fill className="z-[-1] rounded-xl" />

        {image && <div className="relative w-20 h-20" >
            <Image src={image} alt="test" fill />
        </div>}

        <div className="flex-center" >
            <h3 className="text-[#8a8a8a] font-ui-text-4 text-3xl" > {title} </h3>
        </div>

    </Link>
);
const SkeletonTwo = ({ image, title, bg }) => {

    return (
        <Link href={"/community"} className="relative md:h-full h-52 rounded-xl flex p-4 bg-glassmorphism3 items-center justify-center">
            <Image src={bg} alt="test" fill className="z-[-1] rounded-xl" />


            <div className="flex items-center z-0 " >
                {image && <div className="relative w-10 h-10" >
                    <Image src={image} alt="test" fill />
                </div>}

                <div className="" >
                    <h3 className="text-light-7 font-ui-text font-semibold text-3xl" > {title} </h3>
                </div>
            </div>

            {title && <motion.div className=" absolute bottom-0 left-2 ">
                <p className="font-ui-text text-light-2 text-sm" > 20+ Daily Active Members </p>
            </motion.div>}

        </Link>
    )
};
const items = [
    {
        header: <Skeleton image={"/assest/group.svg"} />,
        className: "md:col-span-2",
    },
    {
        header: <SkeletonTwo image={"/assest/profile.svg"} bg={"/banner/test-final.jpg"} title={"20+"} />,
        className: "md:col-span-1",
    },
    {
        header: <SkeletonTwo bg={"/banner/comm.png"} />,
        className: "md:col-span-1",
    },
    {
        header: <SkeletonThree title={"Know More About Our Community "} bg={"/banner/bg-final.jpg"} />,
        className: "md:col-span-2",
    },
];
