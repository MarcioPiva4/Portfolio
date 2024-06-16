import jwt from "jsonwebtoken";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const secret = process.env.JWT_SECRET!;

export function createToken(user: any) {
  return jwt.sign({ email: user.email, nome: user.nome }, secret);
}

export function readToken(token: string) {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error("Invalid token");
  }
}
