import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { readToken } from '@/service/token';

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    if (!token) {
        console.log('Redirecionando para login: token não encontrado');
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        await readToken(token);
    } catch (error) {
        console.log('Erro ao verificar o token:', error);
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'], // Rota(s) protegida(s)
};
