import { motion } from "framer-motion";
import React from "react";

export default function ItemHome(props: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex h-48 w-52 flex-col items-center justify-center rounded-md bg-slate-200 text-center shadow-md dark:bg-zinc-700">
                <p className="text-md font-semibold">{props.title}</p>
                <div className="dark:text-zinc-400">{props.children}</div>
            </div>
        </motion.li>
    );
}
