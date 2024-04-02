"use client";
import notFound from "@/app/not-found";
import NotFound404 from "@/components/NotFound404";
import ProdutoView from "@/components/Produtos/ProdutoView";
import Produto from "@/interface/Produto";
import { useEffect, useState } from "react";

export default function ProdutosView({ params }: { params: { id: string } }) {
    const [produto, setProduto] = useState<Produto | null>();
    const [loading, setLoading] = useState(true);
    const [isNotFound, setIsNotFound] = useState(false);
    useEffect(() => {
        async function fetchProduto() {
            const response = await fetch("/api/produtos/" + params.id);
            const data = await response.json();
            if (data.error) {
                setProduto(null);
                return;
            }
            setProduto(data.sucess);
        }
        fetchProduto();
    }, [params.id]);
    useEffect(() => {
        if (produto) {
            setLoading(false);
        } else if (produto === null) {
            setIsNotFound(true);
            setLoading(false);
        }
    }, [produto]);
    return (
        <main className="h-full w-full">
            <div className="flex h-full items-center justify-center">
                {loading ? (
                    <>
                        <div className="flex h-full w-full flex-1 items-center justify-center">
                            <svg
                                className="h-10 w-10 animate-spin text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="rgb(var(--foreground-rgb))"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="rgb(var(--foreground-rgb))"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                        </div>
                    </>
                ) : isNotFound ? (
                    <NotFound404 />
                ) : (
                    <ProdutoView
                        desc={produto?.desc || ""}
                        imagem={produto?.imagem || { src: "", alt: "" }}
                        nome={produto?.nome || ""}
                        preco={produto?.preco || 0}
                        id={produto?.id || 0}
                    />
                )}
            </div>
        </main>
    );
}
