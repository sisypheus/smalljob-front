import * as auth from "next-auth/react";
import { useEffect } from "react";

const Login = () => {
  auth.signIn("google", {
    redirect: true,
    callbackUrl: "/",
    email: "prout",
    password: "passwd",
  })

  return (
    <>
      <h1>Login</h1>
    </>
  );
};

export default Login;
