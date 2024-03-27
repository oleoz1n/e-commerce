import MultiRangeSlider from "@/components/MultiRangeSlider/MultiRangeSlider";
import React, { useEffect } from "react";
import ProdutosListItem from "../ProdutosListItem";
import Variaveis from "@/modules/Variaveis";

export default function ModalFilterProdutos({
    checkboxesMarcadas,
    setShowModal,
    setCheckboxesMarcadas,
    setPrecoMin,
    setPrecoMax,
    precoMax,
    precoMin,
}: {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
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
        <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full flex-col overflow-auto bg-[rgb(var(--inverse-rgb))] p-8">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-5xl font-semibold">Filtros</h1>
                <button
                    onClick={() => setShowModal(false)}
                    className="text-2xl"
                >
                    <svg
                        className="h-10 w-10 pt-2"
                        fill="none"
                        stroke="rgb(var(--foreground-rgb))"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </div>
            <form className="mt-10 flex h-full w-full flex-col items-center ">
                <fieldset className="flex h-fit w-full flex-col gap-2 p-4 pb-12">
                    <legend className="text-xl font-bold text-gray-900 dark:text-white">
                        Preço
                    </legend>
                    <MultiRangeSlider
                        min={0}
                        max={Variaveis.MaiorPreco}
                        initialMinVal={precoMin}
                        initialMaxVal={precoMax}
                        onChange={({ min, max }) => (
                            setPrecoMin(min), setPrecoMax(max)
                        )}
                    />
                </fieldset>
                <div className="flex w-full flex-col gap-4 rounded-xl p-4">
                    <fieldset>
                        <legend className="text-xl font-bold">Tipos</legend>
                        <ul className="flex flex-col">
                            <ProdutosListItem
                                name="informatica"
                                text="Informática"
                                onChange={handleClick}
                            />
                            <ProdutosListItem
                                name="eletrodomesticos"
                                text="Eletrodomésticos"
                                onChange={handleClick}
                            />
                            <ProdutosListItem
                                name="celulares"
                                text="Celulares"
                                onChange={handleClick}
                            />
                            <ProdutosListItem
                                name="moveis"
                                text="Móveis"
                                onChange={handleClick}
                            />
                            <ProdutosListItem
                                name="roupas"
                                text="Roupas"
                                onChange={handleClick}
                            />
                            <ProdutosListItem
                                name="calcados"
                                text="Calçados"
                                onChange={handleClick}
                            />
                        </ul>
                    </fieldset>
                    <fieldset>
                        <legend className="text-xl font-bold">Marcas</legend>
                        <ul>
                            <ProdutosListItem
                                name="samsung"
                                text="Samsung"
                                onChange={handleClick}
                            />
                            <ProdutosListItem
                                name="apple"
                                text="Apple"
                                onChange={handleClick}
                            />
                            <ProdutosListItem
                                name="lg"
                                text="LG"
                                onChange={handleClick}
                            />
                            <ProdutosListItem
                                name="motorola"
                                text="Motorola"
                                onChange={handleClick}
                            />
                            <ProdutosListItem
                                name="dell"
                                text="Dell"
                                onChange={handleClick}
                            />
                            <ProdutosListItem
                                name="hp"
                                text="HP"
                                onChange={handleClick}
                            />
                        </ul>
                    </fieldset>
                </div>
            </form>
        </div>
    );
}
