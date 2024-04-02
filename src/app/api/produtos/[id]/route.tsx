import Produto from "@/interface/Produto";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

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
    return NextResponse.json(
        { error: "Produto não encontrado" },
        { status: 404 },
    );
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } },
) {
    const file = await fs.readFile(
        process.cwd() + "/src/app/api/produtos/produtos.json",
        "utf8",
    );
    const produtos = JSON.parse(file);
    const produtoRequest = await request.json();

    produtoRequest.id = parseInt(params.id);
    if (!(await checkProduto(produtoRequest))) {
        return NextResponse.json({ error: "Produto inválido" });
    }
    const index = produtos.findIndex(
        (produto: Produto) => produto.id === parseInt(params.id),
    );
    if (produtos[index] != undefined) {
        produtos[index] = produtoRequest;
        await fs.writeFile(
            process.cwd() + "/src/app/api/produtos/produtos.json",
            JSON.stringify(produtos),
        );
        return NextResponse.json({ sucess: produtoRequest });
    }
    return NextResponse.json(
        { error: "Produto não encontrado" },
        { status: 404 },
    );
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } },
) {
    const file = await fs.readFile(
        process.cwd() + "/src/app/api/produtos/produtos.json",
        "utf8",
    );
    const produtos = JSON.parse(file);
    const index = produtos.findIndex(
        (produto: Produto) => produto.id === parseInt(params.id),
    );
    const produto = produtos[index];
    if (produtos[index] != undefined) {
        produtos.splice(index, 1);
        await fs.writeFile(
            process.cwd() + "/src/app/api/produtos/produtos.json",
            JSON.stringify(produtos),
        );
        return NextResponse.json(
            { sucess: "Produto deletado", body: produto },
            { status: 200 },
        );
    }
    return NextResponse.json(
        { error: "Produto não encontrado" },
        { status: 404 },
    );
}
