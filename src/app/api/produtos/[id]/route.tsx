import Produto from "@/interface/Produto";
import { NextResponse } from "next/server";
import produtos from "../produtos";

export async function GET(
    request: Request,
    { params }: { params: { id: string } },
) {
    const data = produtos;
    const produto = data.find((produto) => produto.id == Number(params.id));
    console.log(produto);

    return produto
        ? NextResponse.json(produto)
        : NextResponse.json(
              { body: "Produto não encontrado" },
              { status: 404 },
          );
}
