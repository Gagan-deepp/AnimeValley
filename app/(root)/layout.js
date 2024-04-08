import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from 'sonner'
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/webcomp/Header";
import Footer from "@/components/webcomp/Footer";
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
                    <div className="flex" >
                        <main className="flex-1 relative" >
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