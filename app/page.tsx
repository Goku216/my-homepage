"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import Posts from "@/components/Posts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  const handleNewsletterSubmit = () => {
    console.log('Newsletter signup submitted');
  };
  return (
    <main>
    <Header />
    <Posts />
    <Footer handleSubmit={handleNewsletterSubmit}/>
    </main>
  )
}
