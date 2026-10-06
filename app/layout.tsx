import type { Metadata } from "next";import "./globals.css";
export const metadata:Metadata={title:"OVYR | Victory Over Yourself",description:"Everyday uniform for the work nobody sees."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}