import ProdutosCarrinho from "@/components/Carrinho/ProdutosCarrinho";
import React from "react";

export default function Carrinho() {
    return (
        <main className="flex min-h-screen w-full flex-row max-lg:flex-col">
            <div className="flex w-2/3 flex-col items-center gap-2 max-lg:w-full">
                <h1>Carrinho</h1>
                <ProdutosCarrinho
                    imagem={{
                        src: "https://www.girafa.com.br/visao/default/img/produtos/Telefonia/Celulares/iphone-12-pro-apple-128gb-dourado-tela-6-1-camera-tripla-12mp-ios-896300-1625227020-1-preview.webp",
                        alt: "Imagem",
                    }}
                    preco={32.99}
                    nome="Iphone 12 adjkiopasdiohjaodj aosdhjoashdohasodh oashjdoashdohjao asdhjasojdoajd"
                />
                <ProdutosCarrinho
                    imagem={{
                        src: "https://www.girafa.com.br/visao/default/img/produtos/Telefonia/Celulares/iphone-12-pro-apple-128gb-dourado-tela-6-1-camera-tripla-12mp-ios-896300-1625227020-1-preview.webp",
                        alt: "Imagem",
                    }}
                    preco={32.99}
                    nome="Iphone 12 adjkiopasdiohjaodj aosdhjoashdohasodh oashjdoashdohjao asdhjasojdoajd"
                />
            </div>
            <div className="w-1/3 flex-col items-center max-lg:w-full">
                <h2>Resume</h2>
            </div>
        </main>
    );
}
