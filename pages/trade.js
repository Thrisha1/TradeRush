import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Trading_option_select from "../components/Trading_option_select";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Trade() {
  let user = {};

  useEffect(() => {
    const val = JSON.parse(localStorage.getItem("user"));
    const arr = val ? val : [];
    arr.forEach((element) => {
      if (element.logged == true) {
        user = element;
      }
    });
    console.log(user);
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-900">
        <Navbar />
        <Trading_option_select />
      </main>
    </>
  );
}
