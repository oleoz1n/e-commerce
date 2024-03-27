import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ClearOption from "./ClearOption";
import SearchPopUp from "./SearchPopUp";

export default function InputSearch() {
    const [search, setSearch] = useState("");
    const [showSearchPopup, setShowSearchPopup] = useState(false);
    useEffect(() => {
        if (search.length > 0) {
            setShowSearchPopup(true);
        } else {
            setShowSearchPopup(false);
        }
    }, [search]);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };
    const handleClear = () => {
        console.log(search);
        setSearch("");
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-center"
        >
            <div
                className={`relative flex w-[80%] flex-row flex-nowrap items-center gap-2 bg-slate-200 p-3 max-xl:w-[100%] dark:bg-zinc-700 ${showSearchPopup ? "rounded-t-lg" : "rounded-lg"}`}
            >
                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="w-full border-none bg-transparent focus:outline-none dark:text-zinc-50"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    id="search"
                    style={{ fontFamily: "Arial, FontAwesome" }}
                />
                {search.length == 0 ? (
                    <FaSearch />
                ) : (
                    ClearOption(() => handleClear())
                )}
            </div>
            {showSearchPopup && <SearchPopUp search={search} />}
        </form>
    );
}
