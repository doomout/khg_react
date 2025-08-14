import Link from "next/link";
import { useEffect, useState } from "react";

export default function Fetch() {
    const [user, setUser] = useState({name: null});
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL+'api/hello')
        .then(type=>type.json())
        .then(result=>{
            //console.log(result);
            setUser(result);
        })
    });
    return <>
        <h1>/pages/sub/fetch.js</h1>
        <p>name: {user.name}</p>
        <Link href="/">/pages/index.js</Link>
    </>
}