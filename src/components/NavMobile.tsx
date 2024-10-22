"use client";
import { SVGMotionProps, motion, useCycle } from "framer-motion";
import Link from "next/link";
import { JSX, RefAttributes, useRef } from "react";

const sidebar = {
    open: {
        clipPath: `circle(${1000 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    },
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const Path = (
    props: JSX.IntrinsicAttributes &
        SVGMotionProps<SVGPathElement> &
        RefAttributes<SVGPathElement>,
) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="rgb(var(--inverse-rgb))"
        strokeLinecap="round"
        {...props}
    />
);

const MenuItem = ({ i, toggleClose }: { i: any; toggleClose: any }) => {
    return (
        <motion.li
            className="z-50 mb-[20px] flex items-center text-2xl font-semibold text-[rgb(var(--inverse-rgb))] dark:text-zinc-700"
            variants={variantsLi}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link href={`${i.uri}`} scroll={false} onClick={toggleClose}>
                <p>{i.nome}</p>
            </Link>
        </motion.li>
    );
};

const variantsLi = {
    open: {
        y: 0,
        display: "block",
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        display: "none",
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const variantsUl = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const items = [
    { nome: "Home", uri: "/" },
    { nome: "Produtos", uri: "/produtos" },
    { nome: "Carrinho", uri: "/carrinho" },
];

export default function HeaderMobile() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

    const toggleClose = () => {
        if (isOpen) {
            toggleOpen();
        }
    };
    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="fixed z-50 h-fit w-full"
            ref={containerRef}
        >
            <motion.button
                onClick={() => toggleOpen()}
                className="top-18 left-15 fixed z-50 flex h-[50px] w-[50px] select-none items-center justify-center rounded-full border-none bg-slate-700 outline-none dark:bg-slate-50"
            >
                <svg width="23" height="23" viewBox="0 0 23 23">
                    <Path
                        variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" },
                        }}
                    />
                    <Path
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        transition={{ duration: 0.1 }}
                    />
                    <Path
                        variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" },
                        }}
                    />
                </svg>
            </motion.button>
            <motion.div
                className="fixed bottom-0 left-0 top-0 w-[80%] bg-slate-700 dark:bg-slate-50"
                variants={sidebar}
            ></motion.div>
            <motion.ul className="fixed top-[100px]" variants={variantsUl}>
                {items.map((item, index) => (
                    <MenuItem key={index} i={item} toggleClose={toggleClose} />
                ))}
            </motion.ul>
        </motion.nav>
    );
}
