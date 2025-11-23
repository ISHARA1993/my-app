import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <h1>Blog</h1><hr />
            {children}
        </html>
    );
}
