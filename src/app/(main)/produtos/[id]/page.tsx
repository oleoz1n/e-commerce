import NotFound404 from "@/components/NotFound404";
import ProdutoView from "@/components/Produtos/ProdutoView";
import React from "react";

const desc =
    "O iPhone 12 Pro Max é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.7 polegadas com uma resolução de 2778x1284 pixels. As funcionalidades oferecidas pelo iPhone 12 Pro Max são muitas e inovadoras. Começando pelo LTE 5G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 512 GB mas sem a possibilidade de expansão.";

export default function ProdutosView({ params }: { params: { id: string } }) {
    if (Number(params.id) > 2 || Number.isNaN(Number(params.id))) {
        return NotFound404();
    }
    return (
        <main className="h-full w-full max-lg:h-fit">
            <div className="flex h-full w-full items-center justify-center">
                <ProdutoView
                    desc={desc}
                    imagem={{
                        src: "https://www.girafa.com.br/visao/default/img/produtos/Telefonia/Celulares/iphone-12-pro-apple-128gb-dourado-tela-6-1-camera-tripla-12mp-ios-896300-1625227020-1-preview.webp",
                        alt: "iphone",
                    }}
                    nome="iphone"
                    preco={31.99}
                />
            </div>
        </main>
    );
}
