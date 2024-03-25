"use client";
import React, { useEffect, useState } from "react";
import FilterProdutos from "@/components/Produtos/Filter/FitlerProdutos";
import FilterProdutosMobile from "@/components/Produtos/Filter/FilterProdutosMobile";

export default function Produtos() {
    const [checkboxesMarcadas, setCheckboxesMarcadas] = useState<string[]>([]);
    const [precoMin, setPrecoMin] = useState(0);
    const [precoMax, setPrecoMax] = useState(5400);

    const [windowSize, setWindowSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    });

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
            className={`flex min-h-full w-full ${windowSize.width < 1280 ? "flex-col" : "flex-row"}`}
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
                    <div className="h-fit">{/*baixo*/}</div>
                </>
            ) : (
                <>
                    <FilterProdutos
                        checkboxesMarcadas={checkboxesMarcadas}
                        setCheckboxesMarcadas={setCheckboxesMarcadas}
                        setPrecoMax={setPrecoMax}
                        setPrecoMin={setPrecoMin}
                    />
                    <div className="min-h-full w-4/5">{/*direita*/}</div>
                </>
            )}
        </main>
    );
}
