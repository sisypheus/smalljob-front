import { getSession } from "next-auth/react";
import jwt from "jsonwebtoken";
import { api } from "./api";

export function signIn({ email, password }: any) {
  const session = getSession();
  if (!session) {
    console.log("no session");
    return;
  }
  /* const token = jwt.sign({session}, process.env.NEXTAUTH_SECRET); */

}

export function signUp({ email, password, name }: any) {

}
