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
    return (
        <html lang="pt-br">
            <body className={inter.className && "flex flex-col"}>
                <Loading>{children} </Loading>
            </body>
        </html>
    );
}
