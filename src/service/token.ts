import { SignJWT, jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function createToken(user: any) {
  const token = await new SignJWT({ email: user.email, nome: user.nome })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .sign(secret);
  return token;
}

export async function readToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    throw new Error("Invalid token");
  }
}
