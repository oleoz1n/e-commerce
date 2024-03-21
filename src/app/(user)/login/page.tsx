import React from "react";
import { FaGoogle } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

export default function Login() {
    return (
        <main className="w-full h-full flex justify-center items-center flex-col gap-8 pb-10">
            <h1 className="text-5xl">Log In</h1>
            <div className="flex flex-row gap-8 flex-wrap justify-center">
                <button className="h-52 w-52 flex flex-col items-center justify-evenly dark:bg-zinc-700 rounded-md">
                    <FaGoogle className="w-4/6 h-4/6" />
                    <p>Login with Google</p>
                </button>
                <button className="h-52 w-52 flex flex-col items-center justify-evenly dark:bg-zinc-700 rounded-md">
                    <RiAdminFill className="w-4/6 h-4/6" />
                    <p className="h-fit">Login with Admin</p>
                </button>
            </div>
        </main>
    );
}
