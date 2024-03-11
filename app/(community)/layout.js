import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AnimeValley",
    description: "A common hotspot for all anime , manga , manhwalover",
};

import Footer from "@/components/webcomp/Footer";
import Leftsidebar from "@/components/talks/Leftsidebar";
import AddTalk from "@/components/talks/AddTalk";

export default function RootLayout({ children }) {

    return (

        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className}`}>
                    <div className="flex h-screen flex-col" >
                        <main className="flex-1 bg-[#383143]" >
                            <section className='flex flex-row' >
                                <Leftsidebar />
                                <div className='main-container items-start' >
                                    <AddTalk />
                                    <div className="w-full" >
                                        {children}
                                    </div>
                                </div>
                            </section>
                        </main>
                        <Footer />
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}