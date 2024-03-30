import React, { useState } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import Produto from "@/interface/Produto";

export default function ProdutosCarrinho({
    imagem,
    nome,
    preco,
    qtd,
}: Produto) {
    const [quantidade, setQuantidade] = useState(qtd ? qtd : 0);
    return (
        <>
            <div className="flex h-fit flex-col gap-4 bg-slate-200 p-4 dark:bg-zinc-700">
                <div className="flex h-fit w-full flex-row">
                    <div className="max-w-1/2 h-fit">
                        <Image
                            className="border-2 border-slate-700 dark:border-zinc-400"
                            width={150}
                            height={150}
                            src={imagem.src}
                            alt={imagem.alt}
                        />
                    </div>
                    <div className="flex w-1/2 flex-col justify-center pl-4">
                        <p className="text-limited-1 font-semibold">{nome}</p>
                        <p className="text-limited-1 font-bold">{preco}</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div>
                        <button
                            disabled={quantidade === 1}
                            className="rounded-full bg-white p-1 dark:bg-zinc-800"
                            onClick={() => setQuantidade(quantidade - 1)}
                        >
                            <svg
                                viewBox="0 0 1024 1024"
                                width="1em"
                                height="1em"
                                fill="rgb(var(--foreground-rgb))"
                                aria-hidden="false"
                                focusable="false"
                            >
                                <path d="M170.666667 506.666667c0-20.608 16.725333-37.333333 37.333333-37.333334h608a37.333333 37.333333 0 1 1 0 74.666667H208A37.333333 37.333333 0 0 1 170.666667 506.666667z"></path>
                            </svg>
                        </button>
                        <input
                            type="text"
                            value={quantidade}
                            onKeyPress={(event) => {
                                if (isNaN(Number(event.key))) {
                                    event.preventDefault();
                                }
                            }}
                            autoComplete="off"
                            inputMode="numeric"
                            className="bg-transparent text-center text-[rgb(var(--foreground-rgb))] outline-none"
                            size={quantidade.toString().length}
                            onChange={(e) =>
                                setQuantidade(Number(e.target.value))
                            }
                        />
                        <button
                            className="rounded-full bg-white p-1 dark:bg-zinc-800"
                            onClick={() => setQuantidade(quantidade + 1)}
                        >
                            <svg
                                viewBox="0 0 1024 1024"
                                width="1em"
                                height="1em"
                                fill="rgb(var(--foreground-rgb))"
                                aria-hidden="false"
                                focusable="false"
                            >
                                <path d="M522.666667 844.8c-21.333333 0-38.4-17.066667-38.4-38.4l2.133333-270.933333-270.933333 2.133333c-21.333333 0-36.266667-17.066667-38.4-36.266667 0-21.333333 17.066667-38.4 36.266666-38.4l270.933334-2.133333 2.133333-270.933333c0-21.333333 17.066667-36.266667 38.4-36.266667s36.266667 17.066667 36.266667 38.4l-2.133334 270.933333 270.933334-2.133333c21.333333 0 36.266667 17.066667 38.4 36.266667 0 21.333333-17.066667 38.4-36.266667 38.4l-270.933333 2.133333-2.133334 270.933333c2.133333 19.2-14.933333 36.266667-36.266666 36.266667z"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button className=" transition-all hover:scale-110 hover:text-red-700 active:scale-95">
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
