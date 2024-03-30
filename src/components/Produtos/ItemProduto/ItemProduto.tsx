import React from "react";
import Image from "next/image";
import Link from "next/link";
import Produto from "@/interface/Produto";

export default function ItemProduto({ imagem, nome, id, preco }: Produto) {
    return (
        <Link
            href={"produtos/" + id}
            className="flex h-96 w-72 flex-col items-center justify-center rounded-lg bg-slate-200 p-3 transition-all hover:scale-105 active:scale-95 max-sm:h-full max-sm:w-full dark:bg-zinc-700"
        >
            <div className="flex h-full w-full items-center justify-center">
                <Image
                    className="h-fit w-fit rounded-lg max-lg:h-full"
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
