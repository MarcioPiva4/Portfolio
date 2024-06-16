import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCookie } from 'cookies-next';
import { readToken } from '@/service/token';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');

    if (!token) {
        console.log('Redirecionando para login: token não encontrado');
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        // Verifique se o token é válido
        readToken(token as any);
    } catch (error) {
        console.log('Erro ao verificar o token:', error);
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'], // Rota(s) protegida(s)
};
