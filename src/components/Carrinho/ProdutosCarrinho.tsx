import React from "react";
import Image from "next/image";

interface Produto {
    nome: string;
    preco: number;
    imagem: { src: string; alt: string };
}

export default function ProdutosCarrinho({ imagem, nome, preco }: Produto) {
    return (
        <div className="flex h-fit w-4/6 flex-row bg-slate-200 p-4 max-lg:w-full dark:bg-zinc-700">
            <div className="h-fit w-fit border-2 border-slate-700 dark:border-zinc-400">
                <Image
                    width={100}
                    height={100}
                    src={imagem.src}
                    alt={imagem.alt}
                />
            </div>
            <div className="flex flex-col p-4">
                <p className="text-limited-1">{nome}</p>
                <p className="text-limited-1">{preco}</p>
            </div>
        </div>
    );
}
