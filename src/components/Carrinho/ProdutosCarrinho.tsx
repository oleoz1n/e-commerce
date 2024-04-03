import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import LoadingCircle from "../LoadingCircle";
import Link from "next/link";
import Modal from "../Modal";

const PopupCustom = (
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>,
    handleDelete: () => void,
    handleRefreshQuantidade: (
        value: number,
        quantidadeAnterior: number,
    ) => void,
) => {
    return (
        <Modal>
            <div className="relative flex h-full max-h-96 w-full max-w-[50rem] flex-col items-center justify-evenly gap-4 rounded-xl bg-slate-200 p-8 text-center dark:bg-zinc-700">
                <button
                    onClick={() => {
                        setShowPopup(false);
                        handleRefreshQuantidade(1, 0);
                    }}
                    className="absolute right-4 top-4 text-2xl transition-all hover:scale-110 active:scale-95"
                >
                    <svg
                        className="h-10 w-10 pt-2"
                        fill="none"
                        stroke="rgb(var(--foreground-rgb))"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
                <h1 className="text-4xl">Remover</h1>
                <p className="text-xl">
                    Tem certeza que deseja remover esse item?
                </p>
                <div className="flex w-[60%] flex-col gap-3 max-lg:w-full">
                    <button
                        className="w-full rounded-xl bg-red-700 px-4 py-2 text-white transition-all duration-200 active:scale-95"
                        onClick={() => {
                            setShowPopup(false);
                            handleDelete();
                        }}
                    >
                        Remover
                    </button>
                    <button
                        className="w-full rounded-xl bg-white px-4 py-2 transition-all duration-200 hover:brightness-90 active:scale-95 dark:bg-zinc-900 dark:hover:brightness-125"
                        onClick={() => {
                            setShowPopup(false);
                            handleRefreshQuantidade(1, 0);
                        }}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </Modal>
    );
};

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
    const [qntOnClick, setQntOnClick] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
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

    const handleRefreshQuantidade = async (
        value: number,
        quantidadeAnterior: number,
    ) => {
        setDisabled(true);
        setTotal(total + (value - quantidadeAnterior) * preco!);
        if (value <= 0) return ConfirmDelete();
        const response = await fetch(`/api/users/${userId}/cart/${produtoId}`, {
            method: "PUT",
            body: JSON.stringify({ qtd: value }),
        });
        const data = await response.json();
        if (response.status == 200) setQuantidade(data["cart"][produtoId]);

        setDisabled(false);
    };

    const ConfirmDelete = () => {
        setShowPopup(true);
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
            {showPopup &&
                PopupCustom(
                    setShowPopup,
                    handleDelete,
                    handleRefreshQuantidade,
                )}
            <div
                id={`container-cart-${produtoId}`}
                className="flex h-fit w-full flex-col gap-4 rounded-lg bg-slate-200 p-4 dark:bg-zinc-700"
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
                                    onClick={() => {
                                        handleRefreshQuantidade(
                                            quantidade - 1,
                                            quantidade,
                                        );
                                    }}
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
                                    onClick={() => setQntOnClick(quantidade)}
                                    onBlur={() =>
                                        handleRefreshQuantidade(
                                            quantidade,
                                            qntOnClick,
                                        )
                                    }
                                />
                                <button
                                    className="rounded-full bg-white p-1 disabled:opacity-50 dark:bg-zinc-800"
                                    onClick={() => {
                                        setQntOnClick(quantidade);
                                        handleRefreshQuantidade(
                                            quantidade + 1,
                                            quantidade,
                                        );
                                    }}
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
                                    onClick={() => {
                                        ConfirmDelete();
                                        handleRefreshQuantidade(0, quantidade);
                                    }}
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
