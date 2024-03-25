import React, { useEffect } from "react";
import ProdutosListItem from "../ProdutosListItem";
import MultiRangeSlider from "../../MultiRangeSlider/MultiRangeSlider";

export default function FitlerProdutos({
    checkboxesMarcadas,
    setCheckboxesMarcadas,
    setPrecoMin,
    setPrecoMax,
}: {
    setCheckboxesMarcadas: React.Dispatch<React.SetStateAction<string[]>>;
    checkboxesMarcadas: string[];
    setPrecoMax: React.Dispatch<React.SetStateAction<number>>;
    setPrecoMin: React.Dispatch<React.SetStateAction<number>>;
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
        <div className="mt-10 flex min-h-full w-1/5 flex-col items-center">
            <div className="flex h-fit w-full flex-col gap-2 p-4 pb-12">
                <label
                    htmlFor="default-range"
                    className="text-xl font-bold text-gray-900 dark:text-white"
                >
                    Preço
                </label>
                <MultiRangeSlider
                    min={0}
                    max={5400}
                    onChange={({ min, max }) => (
                        setPrecoMin(min), setPrecoMax(max)
                    )}
                />
            </div>
            <div className="flex w-full flex-col gap-4 rounded-xl bg-slate-200 p-4 dark:bg-zinc-700">
                <div>
                    <label htmlFor="tipos" className="text-xl font-bold">
                        Tipos
                    </label>
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
                </div>
                <div>
                    <label htmlFor="marcas" className="text-xl font-bold">
                        Marcas
                    </label>
                    <ul>
                        <ProdutosListItem
                            onChange={handleClick}
                            name="samsung"
                            text="Samsung"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="apple"
                            text="Apple"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="lg"
                            text="LG"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="motorola"
                            text="Motorola"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="dell"
                            text="Dell"
                        />
                        <ProdutosListItem
                            onChange={handleClick}
                            name="hp"
                            text="HP"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
