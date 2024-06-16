'use client'
import Button from "@/components/Button";
import Input from "@/components/Input";
import Section from "@/components/Section";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Login(){
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [erro, setErro] = useState<any>();
    async function SubmitLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/api/login', {
                email: email,
                senha: password,
            });

            const data = await response.data;
            setCookie('token', data.token);
            router.push('/dashboard')
        } catch (error){
            setErro(error);
        }
    }
    return(
        <Section title="Login | Admin">
            <form onSubmit={(e) => SubmitLogin(e)}>
                <Input label="email:" name="email" type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}></Input>
                <Input label="senha:" name="senha" type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}></Input>
                <Button type="submit">Proximo</Button>
            </form>
            <p>{erro && erro.response?.data?.message}</p>
        </Section>
    )
}