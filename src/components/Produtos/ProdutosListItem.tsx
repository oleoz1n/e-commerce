import React from "react";

export default function ProdutosList(props: {
    name: string;
    text: string;
    onChange: any;
}) {
    return (
        <li className="flex flex-row gap-2">
            <input
                className="accent-[rgb(0,92,200)]"
                type="checkbox"
                name={props.name}
                onChange={props.onChange}
            />
            <p className="text-xl font-normal max-xl:font-semibold">
                {props.text}
            </p>
        </li>
    );
}
