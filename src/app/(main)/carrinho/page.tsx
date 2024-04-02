"use client";
import SkeletonListItemHome from "@/components/Skeleton/SkeletonListItemHome";
import SkeletonProdutosCarrinho from "@/components/Skeleton/SkeletonProdutosCarrinho";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";

const DynamicProdutosCarrinho = dynamic(
    () => import("@/components/Carrinho/ProdutosCarrinho"),
    {
        loading: () => <SkeletonProdutosCarrinho />,
    },
);

export default function Carrinho() {
    const [cart, setCart] = React.useState<{} | null>(null);
    const [total, setTotal] = React.useState(0);
    useEffect(() => {
        const userId = localStorage.getItem("userEcommerceId");
        fetch(`/api/users/${userId}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 404) return setCart({});
                setCart(data.body.cart);
            });
    }, []);

    return (
        <main className="mt-10 flex h-full min-h-[224px] w-full flex-row justify-center gap-4 max-xl:flex-col max-xl:items-center">
            <div className="flex w-full flex-col items-center gap-3 p-4">
                <div className="flex w-full flex-col items-start gap-3">
                    <h1 className="text-3xl">Carrinho</h1>
                    {cart ? (
                        <ul className="flex w-full flex-col items-start gap-3">
                            {Object.keys(cart).map((key: string) => {
                                return (
                                    <li className="h-fit w-full" key={key}>
                                        <DynamicProdutosCarrinho
                                            produtoId={key}
                                            qtd={
                                                (
                                                    cart as {
                                                        [key: string]: number;
                                                    }
                                                )[key]
                                            }
                                            setTotal={setTotal}
                                            total={total}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <p>Carrinho vazio</p>
                    )}
                </div>
            </div>
            <div className="mt-12 h-fit w-full flex-col items-center p-4 max-xl:mt-0">
                <div className="flex h-44  w-full flex-col rounded-lg bg-slate-200 p-4 dark:bg-zinc-700">
                    <h2 className="text-3xl font-semibold">Total</h2>
                    <p className="text-xl">
                        total estimado:{" "}
                        <span className="font-semibold">R$ {total}</span>
                    </p>
                </div>
            </div>
        </main>
    );
}
