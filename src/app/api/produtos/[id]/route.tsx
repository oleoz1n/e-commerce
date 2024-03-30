import Produto from "@/interface/Produto";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

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
