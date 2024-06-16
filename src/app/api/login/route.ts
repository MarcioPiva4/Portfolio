import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/models/user';
import { createToken } from '@/service/token';

export async function GET() {
  try {
    const user = await User.findOne();
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email, senha } = await req.json();
    const userEmail = await User.findOne({ where: { email } });

    if (!userEmail) {
      return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 404 });
    }

    const user = await User.findOne({ where: { email, senha } });
    if (!user) {
      return NextResponse.json({ message: 'Senha incorreta' }, { status: 400 });
    }

    const token = createToken(user);
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Erro ao fazer a solicitação, tente novamente; ${error}` }, { status: 400 });
  }
}
