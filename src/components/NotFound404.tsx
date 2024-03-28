import Link from "next/link";
import React from "react";

export default function NotFound404() {
    return (
        <main className="flex h-full w-full flex-col items-center justify-center text-center">
            <h1 className="text-5xl">Produto não encontrado</h1>
            <p className="text-2xl">
                Voltar para{" "}
                <Link
                    scroll={false}
                    className="text-blue-600 underline transition-all duration-300 hover:text-blue-800"
                    href="/"
                >
                    Home
                </Link>
            </p>
        </main>
    );
}
