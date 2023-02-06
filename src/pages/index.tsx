import { type NextPage } from "next";
import { getToken } from "next-auth/jwt";
import Head from "next/head";
import Link from "next/link";
import jwt from "jsonwebtoken";
import { getSession } from "next-auth/react";

const Home: NextPage = ({token}: any) => {
  console.log(token);
  const test = () => {
    fetch("http://localhost:8080/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    }).then((res) => res.json()).then((data) => console.log(data));
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <button onClick={test}>send</button>
        <Link href="/login">login</Link>
        yo
      </main>
    </>
  );
};

export default Home;
