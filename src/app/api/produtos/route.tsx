import { NextResponse } from "next/server";
import produtos from "./produtos";

const checkProduto = async (produto: any) => {
    if (
        produto.nome == undefined ||
        produto.desc == undefined ||
        produto.preco == undefined ||
        produto.tipo == undefined ||
        produto.marca == undefined ||
        produto.imagem.src == undefined ||
        produto.imagem.alt == undefined
    ) {
        return false;
    }
    return true;
};

export async function GET() {
    return NextResponse.json(produtos);
}
