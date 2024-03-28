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
        <div className="flex h-fit max-w-4xl flex-row gap-4 p-4 max-lg:flex-col">
            <div className="flex justify-center rounded-lg border-2 border-slate-700 dark:border-zinc-700">
                <Image
                    className="h-fit rounded-lg max-lg:w-full"
                    width={1000}
                    height={1000}
                    src={imagem.src}
                    alt={imagem.alt}
                    draggable={false}
                />
            </div>
            <div className="flex h-auto w-full flex-col items-center justify-center text-center max-lg:h-full max-lg:max-w-lg">
                <h1 className="flex max-w-72 flex-wrap overflow-hidden break-normal text-center text-4xl font-bold">
                    {nome}
                </h1>
                <p className="text-center text-xl font-semibold">R$ {preco}</p>
                <p className="text-md text-center ">{desc}</p>
                <button className="mt-4 rounded-lg bg-slate-700 p-2 font-semibold text-white transition-all hover:scale-105 active:scale-95 dark:bg-zinc-700">
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    );
}
