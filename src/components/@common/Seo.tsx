import Head from "next/head";
import React from "react";

interface SeoProps {
    title: string;
  }
export default function Seo({title}:SeoProps){
    return <Head>
        <title>{title} | Yewon Portfolio </title>
    </Head>
}