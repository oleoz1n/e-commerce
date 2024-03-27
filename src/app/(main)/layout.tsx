import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "E-commerce",
    description: "Desenvolvido por oLeoz1n",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <Loading>{children} </Loading>;
}
