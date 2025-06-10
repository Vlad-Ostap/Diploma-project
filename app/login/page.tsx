'use client'

import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        setLoading(false);

        if (res?.ok) {
            router.push('/');
        } else {
            alert("Invalid email or password");
        }
    };

    const handlerRegistrationRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/registration');
    }

    return (
        <div className="page">
            <form onSubmit={handleSubmit} className="login-form">
                <fieldset className="login-field">
                    <legend className="login-title">Sign in</legend>
                    <div className="data-inputs">
                        <input id="email" type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                        <input id="password" type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="login-btn" disabled={loading}>{loading ? 'Login...' : 'Login'}</button>
                    <button className="login-btn" onClick={handlerRegistrationRedirect}>Registration</button>
                </fieldset>
            </form>
        </div>
    )
}