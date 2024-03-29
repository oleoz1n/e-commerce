"use client";
import ProdutosCarrinho from "@/components/Carrinho/ProdutosCarrinho";
import React from "react";

export default function Carrinho() {
    return (
        <main className="mt-10 flex h-full w-full flex-row justify-center gap-4 max-xl:flex-col max-xl:items-center">
            <div className="flex w-fit flex-col items-center gap-3 p-4">
                <div className="flex w-fit flex-col items-start gap-3">
                    <h1 className="text-3xl">Carrinho</h1>
                    <ProdutosCarrinho
                        imagem={{
                            src: "https://www.girafa.com.br/visao/default/img/produtos/Telefonia/Celulares/iphone-12-pro-apple-128gb-dourado-tela-6-1-camera-tripla-12mp-ios-896300-1625227020-1-preview.webp",
                            alt: "Imagem",
                        }}
                        preco={32.99}
                        nome="Iphone 12 adjkiopasdiohjaodj aosdhjoashdohasodh oashjdoashdohjao asdhjasojdoajd"
                        qtd={2}
                    />
                    <ProdutosCarrinho
                        imagem={{
                            src: "https://www.girafa.com.br/visao/default/img/produtos/Telefonia/Celulares/iphone-12-pro-apple-128gb-dourado-tela-6-1-camera-tripla-12mp-ios-896300-1625227020-1-preview.webp",
                            alt: "Imagem",
                        }}
                        preco={1032.99}
                        nome="Iphone 12 adjkiopasdiohjaodj aosdhjoashdohasodh oashjdoashdohjao asdhjasojdoajd"
                        qtd={2}
                    />
                </div>
            </div>
            <div className="mt-12 h-fit w-full max-w-96 flex-col items-center p-4 max-xl:mt-0">
                <div className="flex h-44  w-full flex-col rounded-lg bg-slate-200 p-4 dark:bg-zinc-700">
                    <h2 className="text-3xl font-semibold">Total</h2>
                    <p className="text-xl">
                        total estimado:{" "}
                        <span className="font-semibold">R$ 10</span>
                    </p>
                </div>
            </div>
        </main>
    );
}
