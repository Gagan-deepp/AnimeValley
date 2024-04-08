import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AnimeValley",
    description: "A common hotspot for all anime , manga , manhwalover",
};

import Footer from "@/components/webcomp/Footer";
import Leftsidebar from "@/components/talks/Leftsidebar";

export default function RootLayout({ children }) {

    return (
        <div className="flex min-h-[100dvh] flex-col relative w-full" >
            <Leftsidebar />
            <main className="flex-1 bg-[#383143] w-full" >
                <section className='' >
                    {children}
                </section>
            </main>
            <Footer />
        </div>
    );
}