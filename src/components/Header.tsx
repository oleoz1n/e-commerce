"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineBulb } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";
import NavMobile from "./NavMobile";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Adiciona um event listener para o redimensionamento da janela
        window.addEventListener("resize", handleResize);

        // Remove o event listener quando o componente é desmontado
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <header className="h-fit w-full ">
            {windowSize.width < 768 ? (
                <div className="flex h-16">
                    <NavMobile />
                    <div className="flex h-full w-full flex-row items-center justify-center">
                        <div className=" flex h-full flex-col items-center justify-center">
                            <AiOutlineBulb className="h-10 w-10" />
                            <h1 className="text-3xl">E-commerce</h1>
                        </div>
                    </div>
                </div>
            ) : (
                <nav className="relative flex h-fit w-full flex-row items-center justify-evenly">
                    <Link
                        href="/logout"
                        className="absolute left-2 top-2 rounded-full bg-red-500 p-4"
                    >
                        <CiLogout />
                    </Link>
                    <Link
                        scroll={false}
                        href={"/produtos"}
                        className="flex h-full flex-col items-center justify-center duration-300 hover:scale-110 active:scale-95"
                    >
                        <IoBagRemove className="h-6 w-6" />
                        <h1 className="text-2xl">Produtos</h1>
                    </Link>
                    <Link
                        scroll={false}
                        href={"/"}
                        className=" flex h-full flex-col items-center justify-center duration-300 hover:scale-110 active:scale-95"
                    >
                        <AiOutlineBulb className="h-10 w-10" />
                        <h1 className="text-3xl">E-commerce</h1>
                    </Link>
                    <Link
                        scroll={false}
                        href={"/carrinho"}
                        className=" flex h-full flex-col items-center justify-center duration-300 hover:scale-110 active:scale-95"
                    >
                        <FaShoppingCart className="h-6 w-6" />
                        <h1 className="text-2xl">Carrinho</h1>
                    </Link>
                </nav>
            )}
        </header>
    );
}
