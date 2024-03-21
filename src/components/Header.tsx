import React from "react";
import { AiOutlineBulb } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";

export default function Header() {
    return (
        <header className="w-full h-fit flex justify-evenly items-center flex-row">
            <button className=" h-full flex justify-center flex-col items-center">
                <IoBagRemove className="w-6 h-6" />
                <h1 className="text-2xl">Produtos</h1>
            </button>
            <button className=" h-full flex justify-center flex-col items-center">
                <AiOutlineBulb className="w-10 h-10" />
                <h1 className="text-3xl">E-commerce</h1>
            </button>
            <button className=" h-full flex justify-center flex-col items-center">
                <FaShoppingCart className="w-6 h-6" />
                <h1 className="text-2xl">Carrinho</h1>
            </button>
        </header>
    );
}
