'use client'

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone_number: ''
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        setLoading(false);

        if (!res.ok) {
            const data = await res.json();
            setError(data.error || 'Registration error');
            return;
        }

        await new Promise(resolve => setTimeout(resolve, 300));

        const signInResult = await signIn('credentials', {
            email: formData.email,
            password: formData.password,
            redirect: true,
            callbackUrl: '/',
        });

        if (signInResult?.error) {
            setError(signInResult.error);
        } else {
            router.push('/');
        }
    };

    const handlerLoginRedirect = () => {
        router.push('/login');
    };

    return (
        <div className="page">
            <form onSubmit={handleSubmit} className="login-form">
                <fieldset className="login-field">
                    <legend className="login-title">Sign up</legend>
                    <div className="data-inputs">
                        <input id="name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                        <input id="email" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <input id="password" name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                        <input id="phone_number" name="phone_number" type="tel" placeholder="Phone number" value={formData.phone_number} onChange={handleChange} />
                    </div>
                    <button className="login-btn" type="submit" disabled={loading}>{loading ? 'Registering...' : 'Registration'}</button>
                    <button className="login-btn" onClick={handlerLoginRedirect}>Login</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </fieldset>
            </form>
        </div>
    )
}
