import React from "react";
import ModalFilterProdutos from "./ModalFilterProdutos";

export default function FilterProdutosMobile({
    checkboxesMarcadas,
    setCheckboxesMarcadas,
    setPrecoMax,
    setPrecoMin,
    precoMax,
    precoMin,
}: {
    checkboxesMarcadas: string[];
    setCheckboxesMarcadas: React.Dispatch<React.SetStateAction<string[]>>;
    setPrecoMax: React.Dispatch<React.SetStateAction<number>>;
    setPrecoMin: React.Dispatch<React.SetStateAction<number>>;
    precoMax: number;
    precoMin: number;
}) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            {showModal && (
                <ModalFilterProdutos
                    precoMax={precoMax}
                    precoMin={precoMin}
                    checkboxesMarcadas={checkboxesMarcadas}
                    setCheckboxesMarcadas={setCheckboxesMarcadas}
                    setPrecoMax={setPrecoMax}
                    setPrecoMin={setPrecoMin}
                    setShowModal={setShowModal}
                />
            )}
            <div>
                <button
                    onClick={() => setShowModal(true)}
                    type="button"
                    className="flex w-full items-center justify-center gap-x-1.5 rounded-md bg-[rgb(var(--foreground-rgb))] px-3 py-2 text-lg font-bold text-[rgb(var(--inverse-rgb))] shadow-sm ring-1 ring-inset ring-[rgb(var(--inverse-rgb))]"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                >
                    Filtros
                </button>
            </div>
        </>
    );
}
