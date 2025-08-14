import Link from "next/link";
import { useEffect } from "react";

export default function Fetch() {
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL+'api/hello')
        .then(type=>type.json())
        .then(result=>{
            console.log(result);
        })
    });
    return <>
        <h1>/pages/sub/fetch.js</h1>
        <Link href="/">/pages/index.js</Link>
    </>
}