"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingCircle from "@/components/LoadingCircle";
import { useEffect, useState } from "react";

export default function Loading({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <>
            {loading ? (
                <>
                    <div></div>
                    <LoadingCircle />
                    <div></div>
                </>
            ) : (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            )}
        </>
    );
}
