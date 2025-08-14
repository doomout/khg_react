import Link from "next/link";
import { useRouter } from "next/router";

export default function Id() {
    const router = useRouter();
    // 라우터를 사용하여 id를 가져오고 문자열 -> 숫자로 변환 후 id에 저장
    const id = Number(router.query.id);
    return <>
        <h1>/pages/sub/[id].js</h1>
        <p>Parameter id: {id}</p>
        <Link href="/">/pages/index.js</Link>
    </>
}