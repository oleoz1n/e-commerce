import React from "react";

export default function ProdutosList(props: {
    name: string;
    text: string;
    onChange: any;
}) {
    return (
        <label className="flex flex-row gap-2 text-xl font-normal max-xl:font-semibold">
            <input
                className="accent-[rgb(0,92,200)]"
                type="checkbox"
                name={props.name}
                onChange={props.onChange}
            />

            {props.text}
        </label>
    );
}
