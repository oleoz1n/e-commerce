"use client";
import React, { useEffect, useState } from "react";
import FilterProdutos from "@/components/Produtos/Filter/FitlerProdutos";
import FilterProdutosMobile from "@/components/Produtos/Filter/FilterProdutosMobile";
import InputSearch from "@/components/Produtos/Search/InputSearch";
import ItemProduto from "@/components/Produtos/ItemProduto/ItemProduto";

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
            className={`mt-10 flex h-fit w-full p-4 ${windowSize.width < 1280 ? "flex-col gap-2" : "flex-row"}`}
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
                        <div className="flex flex-row flex-wrap justify-center gap-6 p-4">
                            <ItemProduto
                                imagem={{
                                    src: "https://www.girafa.com.br/visao/default/img/produtos/Telefonia/Celulares/iphone-12-pro-apple-128gb-dourado-tela-6-1-camera-tripla-12mp-ios-896300-1625227020-1-preview.webp",
                                    alt: "iPhone 12",
                                }}
                                nome="iPhone 12"
                                preco={5400.99}
                                id={1}
                            />
                        </div>
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
                        <div className="flex flex-row flex-wrap justify-start gap-12 p-16">
                            <ItemProduto
                                imagem={{
                                    src: "https://www.girafa.com.br/visao/default/img/produtos/Telefonia/Celulares/iphone-12-pro-apple-128gb-dourado-tela-6-1-camera-tripla-12mp-ios-896300-1625227020-1-preview.webp",
                                    alt: "iPhone 12",
                                }}
                                id={1}
                                nome="iPhone 12 mega ultra trem baalta sô!"
                                preco={5400.99}
                            />
                        </div>
                    </div>
                </>
            )}
        </main>
    );
}
