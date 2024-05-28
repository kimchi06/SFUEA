import type { Metadata } from "next";
import { raleway } from "@/app/ui/fonts";
import "./globals.css";
import Navbar from "./ui/Navbar";



export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${raleway.className}`}>
					<Navbar />
					{children}
			</body>
		</html>
	);
}