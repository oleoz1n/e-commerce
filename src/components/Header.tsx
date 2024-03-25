"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineBulb } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";
import NavMobile from "./NavMobile";

export default function Header() {
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
            {windowSize.width <= 768 && windowSize.width != 0 ? (
                <NavMobile />
            ) : (
                <nav className="flex h-fit w-full flex-row items-center justify-evenly">
                    <button className=" flex h-full flex-col items-center justify-center">
                        <IoBagRemove className="h-6 w-6" />
                        <h1 className="text-2xl">Produtos</h1>
                    </button>
                    <button className=" flex h-full flex-col items-center justify-center">
                        <AiOutlineBulb className="h-10 w-10" />
                        <h1 className="text-3xl">E-commerce</h1>
                    </button>
                    <button className=" flex h-full flex-col items-center justify-center">
                        <FaShoppingCart className="h-6 w-6" />
                        <h1 className="text-2xl">Carrinho</h1>
                    </button>
                </nav>
            )}
        </header>
    );
}
