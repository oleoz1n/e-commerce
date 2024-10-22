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
    const [user, setUser] = useState<string | null>("");
    useEffect(() => {
        const user = localStorage.getItem("userEcommerce");

        if (
            user != null &&
            user !== "" &&
            user !== "{}" &&
            user !== "undefined"
        ) {
            setUser(user);
            setLoading(false);
        } else {
            localStorage.setItem(
                "userEcommerce",
                '{"role":"user", "cart": {}}',
            );
            setLoading(false);
        }
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
