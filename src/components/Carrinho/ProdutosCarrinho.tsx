import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import LoadingCircle from "../LoadingCircle";
import Link from "next/link";

export default function ProdutosCarrinho({
    produtoId,
    qtd,
    setTotal,
    total,
    userId,
    setCart,
}: {
    produtoId: string;
    qtd: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    setCart: React.Dispatch<React.SetStateAction<{} | null>>;
    total: number;
    userId: string;
}) {
    const [quantidade, setQuantidade] = useState(qtd ? qtd : 0);
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState<number | null>(null);
    const [imagem, setImagem] = useState<{ src: string; alt: string } | null>(
        null,
    );
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`/api/produtos/${produtoId}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.error) return;
                setNome(data.sucess.nome);
                setPreco(data.sucess.preco);
                setImagem(data.sucess.imagem);
            });
    }, []);
    useEffect(() => {
        if (preco) {
            setTotal(total + quantidade * preco);
        }
    }, [preco]);
    useEffect(() => {
        if (imagem) setLoading(false);
    }, [imagem]);

    const handleRefreshQuantidade = async (value: number) => {
        setTotal(total + (value - quantidade) * preco!);
        if (value <= 0) return handleDelete();
        setDisabled(true);
        const response = await fetch(`/api/users/${userId}/cart/${produtoId}`, {
            method: "PUT",
            body: JSON.stringify({ qtd: value }),
        });
        const data = await response.json();
        if (response.status == 200) setQuantidade(data["cart"][produtoId]);
        setDisabled(false);
    };

    const handleDelete = async () => {
        const response = await fetch(`/api/users/${userId}/cart/${produtoId}`, {
            method: "DELETE",
        });
        if (response.status == 200) {
            setCart((prev) => {
                const newCart: { [key: string]: any } = { ...prev };
                delete newCart[produtoId];
                return newCart;
            });
        }
    };
    return (
        <>
            <div
                id={`container-cart-${produtoId}`}
                className="flex h-fit w-full flex-col gap-4 bg-slate-200 p-4 dark:bg-zinc-700"
            >
                {loading ? (
                    <LoadingCircle />
                ) : (
                    <>
                        <div className="flex h-fit w-full flex-row">
                            <div className="max-w-1/2 h-fit">
                                <Image
                                    className="border-2 border-slate-700 dark:border-zinc-400"
                                    width={150}
                                    height={150}
                                    src={imagem?.src ?? ""}
                                    alt={imagem?.alt ?? ""}
                                />
                            </div>
                            <div className="flex w-1/2 flex-col justify-center pl-4">
                                <Link
                                    href={"/produtos/" + produtoId}
                                    className="text-limited-1 font-semibold underline transition-all hover:text-purple-600 active:scale-95"
                                >
                                    {nome}
                                </Link>
                                <p className="text-limited-1 font-bold">
                                    {preco}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <button
                                    disabled={disabled}
                                    className="rounded-full bg-white p-1 disabled:opacity-50 dark:bg-zinc-800"
                                    onClick={() =>
                                        handleRefreshQuantidade(quantidade - 1)
                                    }
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
                                    disabled={disabled}
                                    value={quantidade}
                                    onKeyPress={(event) => {
                                        if (isNaN(Number(event.key))) {
                                            event.preventDefault();
                                        }
                                    }}
                                    autoComplete="off"
                                    inputMode="numeric"
                                    className="bg-transparent text-center text-[rgb(var(--foreground-rgb))] outline-none disabled:opacity-50"
                                    size={quantidade.toString().length}
                                    onChange={(e) =>
                                        setQuantidade(Number(e.target.value))
                                    }
                                    onBlur={(e) =>
                                        handleRefreshQuantidade(
                                            Number(e.target.value),
                                        )
                                    }
                                />
                                <button
                                    className="rounded-full bg-white p-1 disabled:opacity-50 dark:bg-zinc-800"
                                    onClick={() =>
                                        handleRefreshQuantidade(quantidade + 1)
                                    }
                                    disabled={disabled}
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
                                <button
                                    onClick={() => handleDelete()}
                                    className=" transition-all hover:scale-110 hover:text-red-700 active:scale-95 disabled:opacity-50"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
