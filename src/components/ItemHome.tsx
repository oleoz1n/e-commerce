import React from "react";

export default function ItemHome(props: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <li>
            <div className="flex flex-col justify-center items-center w-52 text-center shadow-md bg-slate-200 dark:bg-zinc-700 rounded-md min-h-48 p-4">
                <p className="font-semibold text-md">{props.title}</p>
                <div className="dark:text-zinc-400">{props.children}</div>
            </div>
        </li>
    );
}
