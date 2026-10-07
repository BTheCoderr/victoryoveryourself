import type { Metadata } from "next";import "./globals.css";
export const metadata:Metadata={
  metadataBase:new URL("https://theovyr.com"),
  title:{default:"OVYR | Victory Over Yourself",template:"%s | OVYR"},
  description:"OVYR makes premium everyday essentials for the work nobody sees. Shop Drop 001: The First Three.",
  alternates:{canonical:"/"},
  openGraph:{title:"OVYR | Victory Over Yourself",description:"Premium everyday essentials built for becoming who you said you would be.",url:"https://theovyr.com",siteName:"OVYR",type:"website",images:[{url:"/products/C76B2846-6EE1-40D4-BCD4-90B3F57FC14E.png",width:1200,height:630,alt:"OVYR Drop 001"}]},
  twitter:{card:"summary_large_image",title:"OVYR | Victory Over Yourself",description:"Drop 001 · The First Three.",images:["/products/C76B2846-6EE1-40D4-BCD4-90B3F57FC14E.png"]},
  robots:{index:true,follow:true}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}