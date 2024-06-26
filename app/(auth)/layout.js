import React from "react";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Auth",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {

    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark
            }}
        >
            <html lang='en'>
                <body className={`${inter.className} bg-dark-1 flex-center h-dvh`}>{children}</body>
            </html>
        </ClerkProvider>
    );
}