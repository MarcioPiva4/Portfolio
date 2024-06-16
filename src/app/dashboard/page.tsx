import { getCookie } from "cookies-next"
import { readToken } from "../api/login/route"
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getData(){
    try{
        const token = cookies().get('token');
        if(!token){
            redirect('/login');
        }
        readToken(token);
    } catch (error) {
        redirect('/login');
    }
}

export default async function Dashboard(){
    const data = await getData();
    return(
        <div>
            <h1>DASHBOARD ADMIN</h1>
        </div>
    )
}