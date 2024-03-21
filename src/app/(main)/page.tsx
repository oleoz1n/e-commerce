import ListItemHome from "@/components/ListItemHome";
import { ImBooks } from "react-icons/im";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa6";
import { GiBuyCard } from "react-icons/gi";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { BiSolidBrain } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";

export default function Home() {
    return (
        <>
            <main className="w-full h-full flex justify-center flex-col items-center p-4 max-w-[960px] gap-4 self-center text-center">
                <h1 className="text-5xl">Bem-vindo ao E-commerce</h1>
                <p className="text-xl">
                    Damos as boas-vindas calorosas ao nosso e-commerce, onde sua
                    experiência de compras é nossa prioridade número um.
                </p>
            </main>
            <section className="h-fit flex flex-col justify-center items-center max-w-[960px] self-center  max-md:mt-8 text-center p-4">
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
