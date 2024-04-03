import React, { useEffect, useState } from "react";
import Image from "next/image";
import Produto from "@/interface/Produto";
import PopUp from "../PopUp";

export default function ProdutoView({
    desc,
    imagem,
    nome,
    preco,
    id,
}: Produto) {
    const userId = localStorage.getItem("userEcommerceId");
    const [disabled, setDisabled] = useState(false);
    const handleAddCart = async () => {
        setDisabled(true);
        const response = await fetch(`/api/users/${userId}/cart/${id}`, {
            method: "PUT",
            body: JSON.stringify({ qtd: "add" }),
        });
        if (response.status === 200) {
            setIsError(false);
            setShowPopUp(true);
        } else {
            setShowPopUp(true);
            setIsError(true);
        }
        setDisabled(false);
    };
    const [showPopUp, setShowPopUp] = useState(false);
    const [isError, setIsError] = useState(false);

    return (
        <>
            {showPopUp && (
                <PopUp
                    title={isError ? "Erro" : "Sucesso"}
                    subtitle={
                        isError
                            ? "Erro no servidor, tente novamente mais tarde."
                            : "O produto foi adicionado ao carrinho com sucesso!"
                    }
                    setShowPopUp={() => setShowPopUp(false)}
                />
            )}
            <div className="flex h-fit max-w-full flex-row items-center gap-4 p-4 max-xl:flex-col">
                <div className="flex w-3/6 justify-center rounded-lg max-xl:w-full">
                    <Image
                        className="h-fit rounded-lg border-2 border-slate-700 max-xl:w-full dark:border-zinc-700"
                        width={1000}
                        height={1000}
                        src={imagem.src}
                        alt={imagem.alt}
                        draggable={false}
                    />
                </div>
                <div className="flex h-auto w-full flex-col items-center justify-center gap-5 text-center max-xl:h-full max-xl:max-w-lg">
                    <h1 className="break-anywhere break-words text-center text-4xl font-bold">
                        {nome}
                    </h1>
                    <p className=" break-anywhere break-words text-center text-base">
                        {desc}
                    </p>
                    <p className="text-center text-xl font-semibold">
                        R$ {preco}
                    </p>
                    <button
                        onClick={handleAddCart}
                        disabled={disabled}
                        className="rounded-lg bg-slate-700 p-2 font-semibold text-white transition-all hover:scale-105 active:scale-95 dark:bg-zinc-700"
                    >
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </>
    );
}
