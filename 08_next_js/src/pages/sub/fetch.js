import Link from "next/link";
import { useEffect, useState } from "react";

export default function Fetch() {
    const [user, setUser] = useState({name: null});
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL+'api/hello')
        .then(type=>type.json())
        .then(result=>{setUser(result);})
        .catch(err => console.error(err)); //api 호출시 에러 확인용
    }, []); //빈 배열 추가하여 처음 렌더링 될 때 한번만 실행 되도록
    return <>
        <h1>/pages/sub/fetch.js</h1>
        <p>name: {user.name}</p>
        <Link href="/">/pages/index.js</Link>
    </>
}