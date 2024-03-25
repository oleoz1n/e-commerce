import React from "react";
import ItemHome from "./ItemHome";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa6";
import { GiBuyCard } from "react-icons/gi";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { BiSolidBrain } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { ImBooks } from "react-icons/im";

export default function ListItemHome() {
    return (
        <>
            <ItemHome title="Variedade de Produtos">
                <ImBooks className="h-28 w-28" />
            </ItemHome>
            <ItemHome title="Facilidade de Navegação">
                <IoSearchCircleSharp className="h-28 w-28" />
            </ItemHome>
            <ItemHome title="Últimas Tendências e Novidades">
                <IoMdTrendingUp className="h-28 w-28" />
            </ItemHome>
            <ItemHome title="Preços Competitivos">
                <FaMoneyBillWave className="h-28 w-28" />
            </ItemHome>
            <ItemHome title="Conveniência de Compras Online">
                <GiBuyCard className="h-28 w-28" />
            </ItemHome>
            <ItemHome title="Atendimento ao Cliente de Excelência">
                <HiChatBubbleOvalLeftEllipsis className="h-28 w-28" />
            </ItemHome>
            <ItemHome title="Experiência Memorável">
                <BiSolidBrain className="h-28 w-28" />
            </ItemHome>
            <ItemHome title="Satisfação Garantida">
                <AiFillSafetyCertificate className="h-28 w-28" />
            </ItemHome>
        </>
    );
}
