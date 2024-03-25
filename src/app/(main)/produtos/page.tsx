"use client";
import MultiRangeSlider from "@/components/MultiRangeSlider/MultiRangeSlider";
import ProdutosListItem from "@/components/ProdutosListItem";
import React from "react";

export default function Produtos() {
    const [precoMin, setPrecoMin] = React.useState(0);
    const [precoMax, setPrecoMax] = React.useState(5400);
    return (
        <main className="flex min-h-full w-full flex-row">
            <div className="mt-10 flex min-h-full w-1/5 flex-col items-center">
                <div className="h-fit w-full p-4 pb-12">
                    <label
                        htmlFor="default-range"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
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
                <div className="flex w-full flex-col gap-4 rounded-xl bg-zinc-700 p-4">
                    <div>
                        <label htmlFor="tipos">Tipos</label>
                        <ul className="flex flex-col">
                            <ProdutosListItem
                                name="informatica"
                                text="Informática"
                            />
                            <ProdutosListItem
                                name="eletrodomesticos"
                                text="Eletrodomésticos"
                            />
                            <ProdutosListItem
                                name="celulares"
                                text="Celulares"
                            />
                            <ProdutosListItem name="moveis" text="Móveis" />
                            <ProdutosListItem name="roupas" text="Roupas" />
                            <ProdutosListItem name="calcados" text="Calçados" />
                        </ul>
                    </div>
                    <div>
                        <label htmlFor="marcas">Marcas</label>
                        <ul>
                            <ProdutosListItem name="samsung" text="Samsung" />
                            <ProdutosListItem name="apple" text="Apple" />
                            <ProdutosListItem name="lg" text="LG" />
                            <ProdutosListItem name="motorola" text="Motorola" />
                            <ProdutosListItem name="dell" text="Dell" />
                            <ProdutosListItem name="hp" text="HP" />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="min-h-full w-4/5">{/*direita*/}</div>
        </main>
    );
}
