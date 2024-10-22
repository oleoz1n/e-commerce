"use client";
import SkeletonProdutosCarrinho from "@/components/Skeleton/SkeletonProdutosCarrinho";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import LoadingCircle from "@/components/LoadingCircle";
import User from "@/interface/User";

const DynamicProdutosCarrinho = dynamic(
    () => import("@/components/Carrinho/ProdutosCarrinho"),
    {
        loading: () => <SkeletonProdutosCarrinho />,
    },
);

export default function Carrinho() {
    const [user, setUser] = useState<User | null>();
    const [cart, setCart] = useState<{} | null>(null);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("userEcommerce") ?? ""));
    }, []);
    useEffect(() => {
        setCart(user?.cart ?? {});
    }, [user?.cart, cart]);
    useEffect(() => {
        if (cart) setLoading(false);
    }, [cart]);
    useEffect(() => {
        if (total < 0) setTotal(0);
    }, [total]);
    return (
        <main className="mt-10 flex h-full min-h-[224px] w-full flex-row justify-center gap-4 max-xl:flex-col max-xl:items-center">
            {loading ? (
                <LoadingCircle />
            ) : (
                <>
                    <div className="flex w-full flex-col items-center gap-3 p-4">
                        <div className="flex w-full flex-col items-start gap-3">
                            <h1 className="text-3xl">Carrinho</h1>
                            {Object.keys(cart ?? {}).length != 0 ? (
                                <ul className="flex w-full flex-col items-start gap-3">
                                    {Object.keys(cart ?? {}).map(
                                        (key: string) => {
                                            return (
                                                <li
                                                    className="h-fit w-full"
                                                    key={key}
                                                >
                                                    <DynamicProdutosCarrinho
                                                        produtoId={key}
                                                        qtd={
                                                            (
                                                                cart as {
                                                                    [
                                                                        key: string
                                                                    ]: number;
                                                                }
                                                            )[key]
                                                        }
                                                        setTotal={setTotal}
                                                        total={total}
                                                        setCart={setCart}
                                                        user={user ?? null}
                                                        // @ts-ignore
                                                        setUser={setUser}
                                                    />
                                                </li>
                                            );
                                        },
                                    )}
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
                                <span className="font-semibold">
                                    R$ {total.toFixed(2).replace(".", ",")}
                                </span>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
}
