import React from "react";
import { FaSearch } from "react-icons/fa";
export default function SearchPopUp({ search }: { search: string }) {
    return (
        <div className="w-[80%] rounded-b-lg border-y-2 border-zinc-800 bg-slate-200 py-3 max-xl:w-[100%] dark:bg-zinc-700">
            <ul className="flex flex-col gap-2">
                <li className="flex h-full w-full cursor-pointer flex-row flex-nowrap items-center gap-2 whitespace-nowrap text-nowrap p-3 hover:bg-zinc-600">
                    <span>{<FaSearch />}</span>
                    <p className="flex select-none flex-row flex-nowrap truncate">
                        Buscar por{" "}
                        <span className="flex max-w-full font-bold">
                            &nbsp;{search}
                        </span>
                    </p>
                </li>
                <li className="p-1">
                    <div className="h-[2px] bg-zinc-800"></div>
                </li>
                <li className="cursor-pointer select-none p-3 hover:bg-zinc-600">
                    item 2
                </li>
            </ul>
        </div>
    );
}
