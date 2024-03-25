import React from "react";
import { FaGoogle } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

export default function Login() {
    return (
        <main className="flex h-full w-full flex-col items-center justify-center gap-8 pb-10">
            <h1 className="text-5xl">Log In</h1>
            <div className="flex flex-row flex-wrap justify-center gap-8">
                <button className="flex h-52 w-52 flex-col items-center justify-evenly rounded-md dark:bg-zinc-700">
                    <FaGoogle className="h-4/6 w-4/6" />
                    <p>Login with Google</p>
                </button>
                <button className="flex h-52 w-52 flex-col items-center justify-evenly rounded-md dark:bg-zinc-700">
                    <RiAdminFill className="h-4/6 w-4/6" />
                    <p className="h-fit">Login with Admin</p>
                </button>
            </div>
        </main>
    );
}
