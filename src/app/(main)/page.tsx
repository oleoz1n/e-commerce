"use client";
import ListItemHome from "@/components/ListItemHome";
import { ImBooks } from "react-icons/im";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa6";
import { GiBuyCard } from "react-icons/gi";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { BiSolidBrain } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Home() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);
    return (
        <>
            <div
                className={`bg-zinc-600 fixed right-8 bottom-8 p-4 rounded-full animate-bounce max-md:hidden transition-all duration-150 ${
                    isInView ? "opacity-0" : "opacity-100"
                }`}
            >
                <FaArrowDown size={24} />
            </div>
            <main className="w-full min-h-[92%] flex justify-center flex-col items-center p-4 pb-[8%] max-w-[960px] gap-4 self-center text-center">
                <h1 className="text-5xl">Bem-vindo ao E-commerce</h1>
                <p className="text-xl">
                    Damos as boas-vindas calorosas ao nosso e-commerce, onde sua
                    experiência de compras é nossa prioridade número um.
                </p>
                <button className="p-4 bg-zinc-700 shadow-md rounded-md bg-gradient-button hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-sm transition-all">
                    Ir para produtos
                </button>
            </main>
            <section
                ref={ref}
                className="h-fit flex flex-col justify-center items-center max-w-[960px] self-center  max-md:mt-8 text-center p-4"
            >
                <h2 className="text-4xl">Nossos diferenciais</h2>
                <ul className="flex w-full h-full flex-row flex-wrap gap-4 p-4 justify-center items-center">
                    <ListItemHome title="Variedade de Produtos Selecionados">
                        <ImBooks className="w-28 h-28" />
                    </ListItemHome>
                    <ListItemHome title="Facilidade de Navegação">
                        <IoSearchCircleSharp className="w-28 h-28" />
                    </ListItemHome>
                    <ListItemHome title="Últimas Tendências e Novidades">
                        <IoMdTrendingUp className="w-28 h-28" />
                    </ListItemHome>
                    <ListItemHome title="Preços Competitivos">
                        <FaMoneyBillWave className="w-28 h-28" />
                    </ListItemHome>
                    <ListItemHome title="Conveniência de Compras Online">
                        <GiBuyCard className="w-28 h-28" />
                    </ListItemHome>
                    <ListItemHome title="Atendimento ao Cliente de Excelência">
                        <HiChatBubbleOvalLeftEllipsis className="w-28 h-28" />
                    </ListItemHome>
                    <ListItemHome title="Experiência Memorável de Compras">
                        <BiSolidBrain className="w-28 h-28" />
                    </ListItemHome>
                    <ListItemHome title="Satisfação Garantida">
                        <AiFillSafetyCertificate className="w-28 h-28" />
                    </ListItemHome>
                </ul>
            </section>
        </>
    );
}
