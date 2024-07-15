import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AnimeValley",
    description: "A common hotspot for all anime , manga , manhwalover",
};

import Leftsidebar from "@/components/talks/Leftsidebar";
import { LenisDiv } from "@/components/extras/MotionDiv";

export default function RootLayout({ children }) {

    return (
        <LenisDiv className="flex min-h-[100dvh] flex-col relative w-full" >
            <Leftsidebar />
            <main className="flex-1 bg-[#383143] w-full z-10" >
                <section className='' >
                    {children}
                </section>
            </main>
        </LenisDiv>
    );
}