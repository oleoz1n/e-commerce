import React from "react";

export default function Modal({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="absolute left-1/2 top-1/2 z-50 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-xl backdrop-brightness-50">
            {children}
        </div>
    );
}
