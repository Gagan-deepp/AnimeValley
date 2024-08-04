import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from 'sonner'
import { ClerkProvider } from "@clerk/nextjs";
import { FaCircleCheck } from "react-icons/fa6";
import BottomNav from "@/components/extras/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AnimeValley",
    description: "A common hotspot for all anime , manga , manhwalover",
};


export default function RootLayout({ children }) {

    return (

        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-4`}>
                    <div className="" >
                        <main className="relative" >
                            <section className='flex' >

                                {children}
                                <BottomNav />
                            </section>
                        </main>
                    </div>
                    <Toaster richColors expand={false} position="top-center" />
                </body>
            </html>
        </ClerkProvider>
    );
}