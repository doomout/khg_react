import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <h1>/pages/index.js</h1>
      <ul>
        <li><Link href="/sub">/pages/sub/index.js</Link></li>
        <li><Link href="/sub/about">/pages/sub/about.js</Link></li>
        <li><Link href="/sub/1">/pages/sub/[id].js</Link></li>
        <li><Link href="/sub/2">/pages/sub/[id].js</Link></li>
        <li><Link href="/sub/fetch">/pages/sub/fetch.js</Link></li>
      </ul>
    </div>
  );
}
