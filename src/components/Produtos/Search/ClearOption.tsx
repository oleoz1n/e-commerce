import React from "react";

export default function ClearOption(handleClear: () => void) {
    return (
        <button onClick={handleClear}>
            <svg
                className="h-5 w-5"
                fill="none"
                stroke="rgb(var(--foreground-rgb))"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                ></path>
            </svg>
        </button>
    );
}
