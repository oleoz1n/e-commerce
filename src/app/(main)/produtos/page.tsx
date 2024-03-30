"use client";
import React, { useEffect, useState } from "react";
import FilterProdutos from "@/components/Produtos/Filter/FitlerProdutos";
import FilterProdutosMobile from "@/components/Produtos/Filter/FilterProdutosMobile";
import InputSearch from "@/components/Produtos/Search/InputSearch";
import ItemProduto from "@/components/Produtos/ItemProduto/ItemProduto";
import Produto from "@/interface/Produto";

export default function Produtos() {
    const [checkboxesMarcadas, setCheckboxesMarcadas] = useState<string[]>([]);
    const [precoMin, setPrecoMin] = useState(0);
    const [precoMax, setPrecoMax] = useState(5400);
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    });
    const [produtos, setProdutos] = useState<Produto[]>([]);
    useEffect(() => {
        async function fetchProdutos() {
            const response = await fetch("/api/produtos");
            const data = await response.json();
            setProdutos(data);
        }
        fetchProdutos();
    }, []);

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Adiciona um event listener para o redimensionamento da janela
        window.addEventListener("resize", handleResize);

        // Remove o event listener quando o componente é desmontado
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <main
            className={`mt-10 flex min-h-full w-full p-4 ${windowSize.width < 1280 ? "flex-col gap-2" : "flex-row"}`}
        >
            {windowSize.width < 1280 ? (
                <>
                    <FilterProdutosMobile
                        checkboxesMarcadas={checkboxesMarcadas}
                        setCheckboxesMarcadas={setCheckboxesMarcadas}
                        setPrecoMax={setPrecoMax}
                        setPrecoMin={setPrecoMin}
                        precoMax={precoMax}
                        precoMin={precoMin}
                    />
                    <div className="h-fit">
                        <InputSearch />
                        <ul className="flex flex-row flex-wrap justify-center gap-6 p-4">
                            {produtos.map((produto, index) => (
                                <li key={index}>
                                    <ItemProduto
                                        imagem={produto.imagem}
                                        nome={produto.nome}
                                        preco={produto.preco}
                                        id={produto.id}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <>
                    <FilterProdutos
                        checkboxesMarcadas={checkboxesMarcadas}
                        setCheckboxesMarcadas={setCheckboxesMarcadas}
                        setPrecoMax={setPrecoMax}
                        setPrecoMin={setPrecoMin}
                        precoMax={precoMax}
                        precoMin={precoMin}
                    />
                    <div className="flex min-h-full w-4/5 flex-col p-2">
                        <InputSearch />
                        <ul className="flex flex-row flex-wrap justify-start gap-12 p-16">
                            {produtos.map((produto, index) => (
                                <li key={index}>
                                    <ItemProduto
                                        imagem={produto.imagem}
                                        nome={produto.nome}
                                        preco={produto.preco}
                                        id={produto.id}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </main>
    );
}
