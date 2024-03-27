import Link from "next/link";
export default function notFound() {
    return (
        <section className="flex h-[90vh] flex-1 flex-col items-center justify-center gap-2 text-center">
            <h1 className="text-5xl">Página não encontrada</h1>
            <div>
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
            </div>
        </section>
    );
}
