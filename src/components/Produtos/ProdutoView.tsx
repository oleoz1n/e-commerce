import React from "react";
import Image from "next/image";

interface Produto {
    imagem: { src: string; alt: string };
    nome: string;
    preco: number;
    desc: string;
}

export default function ProdutoView({ imagem, nome, preco, desc }: Produto) {
    return (
        <div className="flex h-fit max-w-full flex-row items-center gap-4 p-4 max-xl:flex-col">
            <div className="flex w-3/6 justify-center rounded-lg">
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
                <p className="text-center text-xl font-semibold">R$ {preco}</p>
                <button className="rounded-lg bg-slate-700 p-2 font-semibold text-white transition-all hover:scale-105 active:scale-95 dark:bg-zinc-700">
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    );
}
