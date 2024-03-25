"use client";
import { FaArrowDown } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import SkeletonListItemHome from "@/components/SkeletonListItemHome";


const DynamicListItemHome = dynamic(() => import('@/components/ListItemHome'), {
    loading: () => <SkeletonListItemHome/>
  })

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
                className={`bg-slate-300 dark:bg-zinc-600 fixed right-8 bottom-8 p-4 rounded-full animate-bounce max-md:hidden ${
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
            <main className="w-full min-h-[100%] flex justify-center flex-col items-center p-4 pb-[8%] max-w-[960px] gap-4 self-center text-center">
                <h1 className="text-5xl font-bold">Bem-vindo ao E-commerce</h1>
                <p className="text-2xl font-normal">
                    Damos as boas-vindas calorosas ao nosso e-commerce, onde sua
                    experiência de compras é nossa prioridade número um.
                </p>
                <button className="p-4 font-bold bg-slate-200 dark:bg-zinc-700 shadow-md rounded-md bg-gradient-button hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-sm transition-all">
                    Ir para produtos
                </button>
            </main>
            <section
                ref={ref}
                className="h-fit flex flex-col justify-center items-center max-w-[960px] self-center text-center p-4"
            >
                <h2 className="text-5xl font-bold">Nossos diferenciais</h2>
                <ul
                className="flex w-full h-full flex-row flex-wrap gap-8 pt-16 pb-8 justify-center items-center">
                    <DynamicListItemHome/>
                </ul>
            </section>
        </>
    );
}
