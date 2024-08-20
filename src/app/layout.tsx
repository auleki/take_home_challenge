"use client"
import type {Metadata} from "next";
import React from 'react'
import {Lexend} from "next/font/google";
import "./globals.css";
import EventContextProvider from "@/context/EventContext";
import TopNavbar from "@/components/navigation/TopNavbar";

const inter = Lexend({subsets: ["latin"]});

const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: Element;
}>) {
    // @ts-ignore
    return (
        <EventContextProvider>
            <html lang="en">
            <body className={inter.className}>
            <TopNavbar/>
            {children}
            </body>
            </html>
        </EventContextProvider>
    );
}
