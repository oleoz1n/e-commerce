"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingCircle from "@/components/LoadingCircle";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Loading({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState<string | null>("");
    useEffect(() => {
        setUserId(localStorage.getItem("userEcommerceId"));
        if (userId == null) {
            router.push("/login");
        } else if (userId != "" && userId != null) {
            setLoading(false);
        }
    }, [userId]);
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
