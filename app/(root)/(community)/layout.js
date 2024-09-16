import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AnimeValley",
    description: "A common hotspot for all anime , manga , manhwalover",
};

import { LenisDiv } from "@/components/extras/MotionDiv";
import Leftsidebar from "@/components/talks/Leftsidebar";

export default function RootLayout({ children }) {

    return (
        <LenisDiv>
            <Leftsidebar />
            <div className="bg-[#383143] w-full z-10 " >
                {children}
            </div>
        </LenisDiv>
    )
}