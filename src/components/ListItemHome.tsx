import { Props } from "next/script";
import React, { Children } from "react";

export default function ListItemHome(props: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <li>
            <div className="flex flex-col justify-center items-center w-52 text-center shadow-md bg-zinc-700 rounded-md min-h-48 p-4">
                <p>{props.title}</p>
                {props.children}
            </div>
        </li>
    );
}
