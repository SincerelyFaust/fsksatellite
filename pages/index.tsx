import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>FSK Satellite</title>
      </Head>
      <div>
        <main className="flex min-h-screen flex-col overflow-hidden">
          <div>
            <Navbar />
          </div>
          <div>
            <Intro />
          </div>
          <div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
