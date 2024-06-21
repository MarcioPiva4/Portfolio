'use client'
import Button from "@/components/Button";
import Input from "@/components/Input";
import Section from "@/components/Section";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Login() {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [erro, setErro] = useState<any>();

    async function SubmitLogin(e: FormEvent<HTMLFormElement>) {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:3000/api/login', {
                email: email,
                senha: password,
            });

            const data = response.data;
            setCookie('token', data.token, { path: '/' });
            console.log('Login bem-sucedido', data);
            router.push('/dashboard');
        } catch (error) {
            console.log('Erro ao fazer login:', error);
            setErro(error);
        }
    }

    return (
        <Section title="Login | Admin">
            <form onSubmit={SubmitLogin}>
                <Input label="email:" name="email" type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <Input label="senha:" name="senha" type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <Button type="submit">Próximo</Button>
            </form>
            <p>{erro && erro.response?.data?.message}</p>
        </Section>
    );
}
