"use client";
import PopUp from "@/components/PopUp";
import { useEffect, useState } from "react";
import { RiUser3Fill } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [showPopUp, setShowPopUp] = useState(false);
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const handleClickUser = async () => {
        const response = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                role: "user",
                cart: {},
            }),
        });
        if (response.status === 201) {
            const data = await response.json();
            localStorage.setItem("userEcommerceId", data.body.id);
            setTitle("Usuário criado");
            setSubtitle("Seu usuário foi criado com sucesso");
        } else {
            setTitle("Erro");
            setSubtitle("Houve um erro ao criar seu usuário");
        }
        setShowPopUp(true);
    };
    const handleClickAdmin = async () => {
        const response = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                role: "Admin",
                cart: {},
            }),
        });
        if (response.status === 201) {
            const data = await response.json();
            console.log(data);
            localStorage.setItem("userEcommerceId", data.body.id);
            setTitle("Usuário criado");
            setSubtitle("Seu usuário foi criado com sucesso");
        } else {
            setTitle("Erro");
            setSubtitle("Houve um erro ao criar seu usuário");
        }
        setShowPopUp(true);
    };

    useEffect(() => {
        const userId = localStorage.getItem("userEcommerceId");
        if (userId && !showPopUp) {
            router.push("/");
        }
    }, [showPopUp]);

    return (
        <>
            {showPopUp && (
                <PopUp
                    title={title}
                    subtitle={subtitle}
                    setShowPopUp={setShowPopUp}
                />
            )}
            <div></div>
            <main className="flex h-full w-full flex-col items-center justify-center gap-8 pb-10">
                <h1 className="text-5xl">Logar</h1>
                <div className="flex flex-row flex-wrap justify-center gap-8">
                    <button
                        onClick={() => handleClickUser()}
                        className="flex h-52 w-52 flex-col items-center justify-evenly rounded-md dark:bg-zinc-700"
                    >
                        <RiUser3Fill className="h-4/6 w-4/6" />
                        <p>Usuário</p>
                    </button>
                    <button
                        onClick={() => handleClickAdmin()}
                        className="flex h-52 w-52 flex-col items-center justify-evenly rounded-md dark:bg-zinc-700"
                    >
                        <RiAdminFill className="h-4/6 w-4/6" />
                        <p className="h-fit">Admin</p>
                    </button>
                </div>
            </main>
            <div></div>
        </>
    );
}
