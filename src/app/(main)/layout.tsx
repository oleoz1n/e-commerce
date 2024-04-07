"use client";
import next from "next";
import Loading from "./loading";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const userId = localStorage.getItem("userEcommerceId");
    const router = useRouter();
    useEffect(() => {
        if (!userId) {
            router.push("/login");
        }
    }, [userId]);

    console.log(userId);
    return <Loading>{children} </Loading>;
}
