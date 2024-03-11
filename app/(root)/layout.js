import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AnimeValley",
    description: "A common hotspot for all anime , manga , manhwalover",
};

import Footer from "@/components/webcomp/Footer";
import Header from "@/components/webcomp/Header";

export default function RootLayout({ children }) {

    return (

        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className}`}>
                    <Header />
                    <div className="flex h-screen flex-col" >
                        <main className="flex-1" > {children} </main>
                        <Footer />
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}