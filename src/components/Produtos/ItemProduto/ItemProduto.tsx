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
            className="flex h-96 max-w-72 flex-col items-center justify-center rounded-lg bg-slate-200 p-3 transition-all hover:scale-105 active:scale-95 max-xl:h-fit max-xl:max-h-96 dark:bg-zinc-700"
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
            <div className="mt-2 flex max-w-64 flex-col gap-1 text-center">
                <h1 className="text-limited text-md font-semibold max-xl:text-xl">
                    {nome}
                </h1>
                <p className="p-2 text-lg font-bold">R$ {preco}</p>
            </div>
        </Link>
    );
}
