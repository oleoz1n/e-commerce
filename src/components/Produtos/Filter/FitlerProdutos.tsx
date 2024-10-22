import React, { useEffect } from "react";
import ProdutosListItem from "../ProdutosListItem";
import MultiRangeSlider from "../../MultiRangeSlider/MultiRangeSlider";
import Variaveis from "@/modules/Variaveis";

export default function FitlerProdutos({
    checkboxesMarcadas,
    setCheckboxesMarcadas,
    setPrecoMin,
    setPrecoMax,
    precoMax,
    precoMin,
}: {
    setCheckboxesMarcadas: React.Dispatch<React.SetStateAction<string[]>>;
    checkboxesMarcadas: string[];
    setPrecoMax: React.Dispatch<React.SetStateAction<number>>;
    setPrecoMin: React.Dispatch<React.SetStateAction<number>>;
    precoMax: number;
    precoMin: number;
}) {
    const [clickInput, setClickInput] = React.useState(false);
    const handleClick = () => {
        setClickInput(!clickInput);
    };
    useEffect(() => {
        checkboxesMarcadas.map((item: any) => {
            const checkbox = document.querySelector(
                `input[name="${item}"]`,
            ) as HTMLInputElement;
            if (checkbox) {
                checkbox.checked = true;
            }
        });
    }, [checkboxesMarcadas]);
    useEffect(() => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const checkboxesMarcadasInput = Array.from(checkboxes).filter(
            (checkbox: any) => checkbox.checked,
        );
        const checkboxesMarcadas = checkboxesMarcadasInput.map(
            (checkbox: any) => checkbox.name,
        );
        setCheckboxesMarcadas(checkboxesMarcadas);
    }, [clickInput, setCheckboxesMarcadas]);
    return (
        <form className="flex min-h-full w-1/5 flex-col items-center">
            <fieldset className="flex h-fit w-full flex-col gap-2 p-4 pb-12">
                <legend className="text-xl font-bold text-gray-900 dark:text-white">
                    Preço
                </legend>
                <MultiRangeSlider
                    min={0}
                    max={Variaveis.MaiorPreco}
                    initialMaxVal={precoMax}
                    initialMinVal={precoMin}
                    onChange={({ min, max }) => (
                        setPrecoMin(min), setPrecoMax(max)
                    )}
                />
            </fieldset>
            <div className="flex w-full flex-col gap-4 rounded-xl bg-slate-200 p-4 dark:bg-zinc-700">
                <fieldset>
                    <legend className="text-xl font-bold">Tipos</legend>
                    <ul className="flex flex-col">
                        <ProdutosListItem
                            onChange={handleClick}
                            name="informatica"
                            text="Informática"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="eletrodomesticos"
                            text="Eletrodomésticos"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="celulares"
                            text="Celulares"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="moveis"
                            text="Móveis"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="roupas"
                            text="Roupas"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="calcados"
                            text="Calçados"
                        />
                    </ul>
                </fieldset>
                <fieldset>
                    <legend className="text-xl font-bold">Marcas</legend>
                    <ul>
                        <ProdutosListItem
                            onChange={handleClick}
                            name="LG"
                            text="LG"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="Apple"
                            text="Apple"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="Brastemp"
                            text="Brastemp"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="Nike"
                            text="Nike"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="Estofados Ideal"
                            text="Estofados Ideal"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="Lacoste"
                            text="Lacoste"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="Dell"
                            text="Dell"
                        />
                    </ul>
                </fieldset>
            </div>
        </form>
    );
}
