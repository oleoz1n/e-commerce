import React from "react";

export default function ProdutosList(props: { name: string; text: string }) {
    return (
        <li className="flex flex-row gap-2">
            <input type="checkbox" name={props.name} className="rounded-full" />
            <p>{props.text}</p>
        </li>
    );
}
