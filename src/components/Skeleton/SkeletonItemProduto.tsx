import React from "react";

export default function SkeletonItemProduto() {
    return (
        <div className="flex max-h-96 max-w-72 flex-grow animate-pulse overflow-hidden rounded-lg bg-slate-200 max-sm:h-full max-sm:w-full dark:bg-zinc-700">
            <div className="h-96 w-72 overflow-hidden "></div>
        </div>
    );
}
