import React from "react";
import type { NextPage } from "next";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import History from "../components/History";
import Discography from "../components/Discography";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <meta property="title" content="FSK Satellite" key="title" />
        <meta property="og:title" content="FSK Satellite" key="title" />
        <title>FSK Satellite</title>
      </Head>
      <div>
        <div className="flex flex-col overflow-hidden justify-between gap-40">
          <div>
            <Intro />
          </div>
          <div id="history">
            <History />
          </div>
          <div id="discography">
            <Discography />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
