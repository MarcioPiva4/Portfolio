import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/models/user';
import jwt from 'jsonwebtoken';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

const secret = process.env.JWT_SECRET
export async function GET() {
  try {
    const user = await User.findOne();
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ erro: error }, { status: 400 });
  }
}

function createToken(user: any) {
  return jwt.sign({ email: user.email, nome: user.nome}, secret)
}

export function readToken(token: RequestCookie){
  try{
    return jwt.verify(token, secret)
  } catch(error){
    return new Error('token invalido')
  }
}

export async function POST(req: NextRequest) {
  try{
    const res = await req.json();
    const {email, senha} = res;
    const userEmail = await User.findOne({ where: { email } });
    if (!userEmail) {
      return NextResponse.json({ message: 'Usuário não encontrado.' },{status: 404});
    }
    const user = await User.findOne({where: {email, senha}});
    if(!user) {
      return NextResponse.json({ message: 'Senha incorreta' },{status: 400});
    }

    const token = createToken(user);
    return NextResponse.json({ token },{status: 200});

  } catch (error){
    return NextResponse.json({ erro: `Erro ao fazer a solicitação, tente novamente; ${error}` }, { status: 400 });
  }
}


//código de  criação de usuario
// export async function POST(req: NextRequest) {
//   try {
//     const res = await req.json();
//     await User.create(res);
//     return NextResponse.json({ message: `Usuario criado com sucesso ${res}` }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ erro: error }, { status: 400 });
//   }
// }