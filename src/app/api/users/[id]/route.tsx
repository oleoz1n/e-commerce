import { promises as fs } from "fs";
import { NextResponse } from "next/server";

const checkUser = async (user: any) => {
    if (user.role == undefined || user.cart == undefined) {
        return false;
    }
    return true;
};

export async function GET(
    request: Request,
    { params }: { params: { id: string } },
) {
    const file = await fs.readFile(
        process.cwd() + "/src/app/api/users/users.json",
        "utf-8",
    );

    const users = await JSON.parse(file);

    if (Number(params.id) > 0 && Number(params.id) <= users.length) {
        const user = users.find(
            (user: { id: number }) => user.id === parseInt(params.id),
        );
        return NextResponse.json({ body: user, status: 200 });
    }

    return NextResponse.json(
        { body: "Usuário não encontrado" },
        { status: 404 },
    );
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } },
) {
    const file = await fs.readFile(
        process.cwd() + "/src/app/api/users/users.json",
        "utf-8",
    );

    const users = await JSON.parse(file);
    const index = users.findIndex(
        (user: { id: number }) => user.id === parseInt(params.id),
    );

    const user = users[index];

    if (users[index] != undefined) {
        users.splice(index, 1);
        await fs.writeFile(
            process.cwd() + "/src/app/api/users/users.json",
            JSON.stringify(users),
        );
        return NextResponse.json({ body: user });
    }
    return NextResponse.json(
        { body: "Usuário não encontrado" },
        { status: 404 },
    );
}
