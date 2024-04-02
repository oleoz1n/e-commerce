import { promises as fs } from "fs";
import { NextResponse } from "next/server";

/* request: {qtd: number} */
export async function PUT(
    request: Request,
    { params }: { params: { id: string; idCart: string } },
) {
    const file = await fs.readFile(
        process.cwd() + "/src/app/api/users/users.json",
        "utf-8",
    );
    const produtosFile = await fs.readFile(
        process.cwd() + "/src/app/api/produtos/produtos.json",
        "utf-8",
    );
    const produtos = await JSON.parse(produtosFile);

    const users = await JSON.parse(file);
    const user = users.find(
        (user: { id: number }) => user.id === parseInt(params.id),
    );
    if (user == undefined) {
        return NextResponse.json(
            {
                body: "Usuário não encontrado",
            },
            { status: 404 },
        );
    }
    if (
        !produtos.some((produto: any) => produto.id === Number(params.idCart))
    ) {
        return NextResponse.json(
            {
                body: "Produto não encontrado",
            },
            { status: 404 },
        );
    }
    const cartRequest = await request.json();
    user.cart[params.idCart] = parseInt(cartRequest.qtd);

    const userIndex = users.findIndex(
        (user: { id: number }) => user.id === parseInt(params.id),
    );

    users[userIndex] = user;
    await fs.writeFile(
        process.cwd() + "/src/app/api/users/users.json",
        JSON.stringify(users),
    );
    return NextResponse.json(user);
}

export async function GET(
    request: Request,
    { params }: { params: { id: string; idCart: string } },
) {
    return NextResponse.json({ id: params.id, idCart: params.idCart });
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string; idCart: string } },
) {
    const file = await fs.readFile(
        process.cwd() + "/src/app/api/users/users.json",
        "utf-8",
    );
    const users = await JSON.parse(file);
    const user = users.find(
        (user: { id: number }) => user.id === parseInt(params.id),
    );

    if (user == undefined) {
        return NextResponse.json(
            {
                body: "Usuário não encontrado",
            },
            { status: 404 },
        );
    }
    if (user.cart[params.idCart] == undefined) {
        return NextResponse.json(
            {
                body: "Produto não encontrado no carrinho",
            },
            { status: 404 },
        );
    }
    user.cart.splice(parseInt(params.idCart), 1);
    const userIndex = users.findIndex(
        (user: { id: number }) => user.id === parseInt(params.id),
    );
    users[userIndex] = user;
    await fs.writeFile(
        process.cwd() + "/src/app/api/users/users.json",
        JSON.stringify(users),
    );
}
