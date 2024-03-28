import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ItemProduto({
    imagem,
    nome,
    preco,
    id,
}: {
    imagem: { src: string; alt: string };
    nome: string;
    preco: number;
    id: number;
}) {
    return (
        <Link
            href={"produtos/" + id}
            className="flex max-w-72 flex-col flex-wrap items-center justify-center rounded-lg bg-slate-200 p-3 dark:bg-zinc-700"
        >
            <div className="flex">
                <Image
                    className="h-fit w-fit rounded-lg"
                    width={250}
                    height={250}
                    src={imagem.src}
                    alt={imagem.alt}
                    draggable={false}
                />
            </div>
            <div className="mt-2 text-center">
                <h1 className="flex max-w-72 flex-wrap overflow-hidden break-normal text-lg font-bold">
                    {nome}
                </h1>
                <p className="text-sm">R$ {preco}</p>
            </div>
        </Link>
    );
}
