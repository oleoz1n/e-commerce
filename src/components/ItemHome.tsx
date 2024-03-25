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
        transition={{ duration: 0.3 }}>
            <div className="flex flex-col justify-center items-center w-52 h-48 text-center shadow-md bg-slate-200 dark:bg-zinc-700 rounded-md">
                <p className="font-semibold text-md">{props.title}</p>
                <div className="dark:text-zinc-400">{props.children}</div>
            </div>
        </motion.li>
    );
}
