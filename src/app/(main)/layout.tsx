import Loading from "./loading";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <Loading>{children} </Loading>;
}
