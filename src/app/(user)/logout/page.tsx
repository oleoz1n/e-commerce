"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function LogOut() {
    const router = useRouter();
    useEffect(() => {
        localStorage.removeItem("userEcommerceId");
        router.replace("/login");
    }, []);
    return <div></div>;
}
