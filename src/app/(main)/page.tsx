"use client";
import { FaArrowDown } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import SkeletonListItemHome from "@/components/SkeletonListItemHome";

const DynamicListItemHome = dynamic(() => import("@/components/ListItemHome"), {
    loading: () => <SkeletonListItemHome />,
});

export default function Home() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);
    const [animationEnd, setAnimationEnd] = useState(false);
    const handleScrollBottom = () => {
        ref.current?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <>
            <motion.button
                className={`fixed bottom-8 right-8 animate-bounce rounded-full bg-slate-300 p-4 max-md:hidden dark:bg-zinc-600 ${
                    animationEnd ? "hidden" : ""
                }`}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0 } : { opacity: 1 }}
                onClick={() => handleScrollBottom()}
                onAnimationStart={() => setAnimationEnd(false)}
                onAnimationComplete={() =>
                    isInView ? setAnimationEnd(true) : setAnimationEnd(false)
                }
            >
                <FaArrowDown size={24} />
            </motion.button>
            <main className="flex min-h-[100%] w-full max-w-[960px] flex-col items-center justify-center gap-4 self-center p-4 pb-[8%] text-center">
                <h1 className="text-5xl font-bold">Bem-vindo ao E-commerce</h1>
                <p className="text-2xl font-normal">
                    Damos as boas-vindas calorosas ao nosso e-commerce, onde sua
                    experiência de compras é nossa prioridade número um.
                </p>
                <button className="bg-gradient-button rounded-md bg-slate-200 p-4 font-bold shadow-md transition-all hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-sm dark:bg-zinc-700">
                    Ir para produtos
                </button>
            </main>
            <section
                ref={ref}
                className="flex h-fit max-w-[960px] flex-col items-center justify-center self-center p-4 text-center"
            >
                <h2 className="text-5xl font-bold">Nossos diferenciais</h2>
                <ul className="flex h-full w-full flex-row flex-wrap items-center justify-center gap-8 pb-8 pt-16">
                    <DynamicListItemHome />
                </ul>
            </section>
        </>
    );
}
