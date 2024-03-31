import Produto from "@/interface/Produto";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

const checkProduto = async (produto: any) => {
    console.log(produto.desc);
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

export async function GET(
    request: Request,
    { params }: { params: { id: string } },
) {
    const file = await fs.readFile(
        process.cwd() + "/src/app/api/produtos/produtos.json",
        "utf8",
    );
    const data = JSON.parse(file);
    if (Number(params.id) > 0 && Number(params.id) <= data.length) {
        const produto = data.find(
            (produto: Produto) => produto.id === parseInt(params.id),
        );
        return NextResponse.json({ sucess: produto });
    }
    return NextResponse.json({ error: "Produto não encontrado" });
}

export async function POST(request: Request, response: Response) {
    const file = await fs.readFile(
        process.cwd() + "/src/app/api/produtos/produtos.json",
        "utf-8",
    );

    const produtos = await JSON.parse(file);
    const produtoRequest = await request.json();

    if (!(await checkProduto(produtoRequest))) {
        return NextResponse.json({ error: "Produto inválido" });
    }

    produtoRequest.id = produtos[produtos.length - 1].id + 1;
    produtos.push(produtoRequest);
    await fs.writeFile(
        process.cwd() + "/src/app/api/produtos/produtos.json",
        JSON.stringify(produtos),
    );

    return NextResponse.json({ body: produtoRequest, status: 201 });
}
