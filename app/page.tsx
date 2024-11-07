// app/page.tsx
"use client";
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const handleRedirect = () => {
        router.push('/characters'); // إعادة التوجيه إلى صفحة الشخصيات
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Welcome to the Root Page</h1>
            <p>
                You are currently on the root page of the app. To view the characters,
                please <span onClick={handleRedirect} style={{ color: 'blue', cursor: 'pointer' }}>click here</span>.
            </p>
        </div>
    );
}
