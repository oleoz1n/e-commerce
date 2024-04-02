import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const file = await fs.readFile(
        process.cwd() + "/src/app/api/produtos/produtos.json",
        "utf-8",
    );

    const userRole = await JSON.parse(file);
    const userRoleRequest = await request.json();

    userRoleRequest.id = userRole[userRole.length - 1].id + 1;
    userRole.push(userRoleRequest);

    await fs.writeFile(
        process.cwd() + "/src/app/api/users/users.json",
        JSON.stringify(userRole),
    );

    return NextResponse.json({ body: userRoleRequest, status: 201 });
}
