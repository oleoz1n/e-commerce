"use client";
import React, { useEffect, useState } from "react";
import FilterProdutos from "@/components/Produtos/Filter/FitlerProdutos";
import FilterProdutosMobile from "@/components/Produtos/Filter/FilterProdutosMobile";
import InputSearch from "@/components/Produtos/Search/InputSearch";
import Produto from "@/interface/Produto";
import dynamic from "next/dynamic";
import SkeletonItemProduto from "@/components/Skeleton/SkeletonItemProduto";

const DynamicItemProduto = dynamic(
    () => import("@/components/Produtos/ItemProduto/ItemProduto"),
    {
        loading: () => <SkeletonItemProduto />,
    },
);

const tiposDeProdutos = [
    "informatica",
    "eletrodomesticos",
    "celulares",
    "moveis",
    "roupas",
    "calcados",
];

const separeTypesCheckbox = (checkboxes: string[]) => {
    const tipos = { tipo: [] as string[], marca: [] as string[] };
    checkboxes.forEach((checkbox) => {
        if (tiposDeProdutos.includes(checkbox)) {
            tipos.tipo.push(checkbox);
        } else {
            tipos.marca.push(checkbox);
        }
    });
    return tipos;
};

export default function Produtos() {
    const [checkboxesMarcadas, setCheckboxesMarcadas] = useState<string[]>([]);
    const [precoMin, setPrecoMin] = useState(0);
    const [precoMax, setPrecoMax] = useState(10000);
    const [filtros, setFiltros] = useState({ tipo: [], marca: [] } as {
        tipo: string[];
        marca: string[];
    });
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    });
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);

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
    useEffect(() => {
        setFiltros(separeTypesCheckbox(checkboxesMarcadas));
    }, [checkboxesMarcadas]);

    useEffect(() => {
        const produtosFiltrados = produtos.filter((produto) => {
            if (filtros.tipo.length > 0) {
                if (!filtros.tipo.includes(produto.tipo ?? "")) {
                    return false;
                }
            }

            if (filtros.marca.length > 0) {
                if (!filtros.marca.includes(produto.marca ?? "")) {
                    return false;
                }
            }

            if (produto.preco < precoMin || produto.preco > precoMax) {
                return false;
            }

            return true;
        });

        setProdutosFiltrados(produtosFiltrados);
    }, [filtros, precoMin, precoMax, produtos]);
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
                        <ul className="flex flex-row flex-wrap justify-center gap-6 pt-6">
                            {produtosFiltrados.map((produto, index) => (
                                <li key={index}>
                                    <DynamicItemProduto
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
                        <ul className="flex h-fit flex-row flex-wrap justify-start gap-12 p-16">
                            {produtosFiltrados.map((produto, index) => (
                                <li key={index}>
                                    <DynamicItemProduto
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
