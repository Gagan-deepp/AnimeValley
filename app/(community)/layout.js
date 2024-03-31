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
import BottomNav from "@/components/extras/BottomNav";

export default function RootLayout({ children }) {

    return (

        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} max-w-[100vw] overflow-x-hidden`}>
                    <div className="flex min-h-[100dvh] flex-col relative w-full" >
                        <Leftsidebar />
                        <main className="flex-1 bg-[#383143] w-full" >
                            <section className='' >
                                {children}
                            </section>
                        </main>
                        <BottomNav />
                        <Footer />
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}