import React, { Dispatch, SetStateAction } from "react";

export default function PopUp({
    title,
    subtitle,
    setShowPopUp,
}: {
    title: string;
    subtitle: string;
    setShowPopUp: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <div className="absolute left-1/2 top-1/2 z-50 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-xl backdrop-brightness-50">
            <div className="flex h-full max-h-80 w-full max-w-[42rem] flex-col items-center justify-evenly rounded-xl bg-slate-200 p-8 text-center dark:bg-zinc-700">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-lg font-semibold">{subtitle}</p>
                <button
                    className="mt-4 w-[60%] rounded-lg bg-blue-500 px-4 py-2 text-white max-lg:w-full"
                    onClick={() => setShowPopUp(false)}
                >
                    Ok
                </button>
            </div>
        </div>
    );
}
