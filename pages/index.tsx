import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";

const Index: NextPage = () => {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <>
      <Head>
        <title>FSK Satellite</title>
      </Head>
      <div>
        <main className="flex min-h-screen flex-col overflow-hidden">
          <div className="mb-20">
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
