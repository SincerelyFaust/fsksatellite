import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
          {windowSize >= 1075 ? (
            <div className="flex flex-row bg-sudditaliano max-w-full max-h-fit p-20 mb-20 mx-44 justify-between bg-no-repeat bg-cover bg-center flex-wrap shadow-2xl xl:bg-sudditaliano-xl shadow-black gap-y-10 xl:justify-center lg:mx-22 md:mx-14 sm:mx-6">
              <img
                src="/logo/fsk.webp"
                className="max-w-xl min-w-0 2xl:max-w-md"
              ></img>
              <div className="flex flex-col items-start justify-center gap-12 max-w-lg min-w-0 xl:items-center xl:text-center">
                <h1 className="text-red-600 text-9xl md:text-7xl 2xl:text-8xl font-swampwitch">
                  FSK Satellite
                </h1>
                <p className="text-white text-lg 2xl:text-base md:text-sm">
                  FSK Satellite is an Italian trap music group composed of Taxi
                  B, Sapobully, Chiello and Greg Willen. The group started out
                  back in 2017 and has released 2 albums before disassembling in
                  2021.
                </p>
                <a
                  href="#history"
                  className="text-center text-white bg-red-600 px-8 py-3 2xl:px-6 md:px-2"
                >
                  Learn more
                </a>
              </div>
            </div>
          ) : (
            <div className="flex flex-row bg-sudditaliano max-w-full max-h-fit p-20 mb-20 justify-between bg-no-repeat bg-cover bg-center flex-wrap shadow-2xl shadow-black xl:bg-sudditaliano-xl gap-y-10">
              <img
                src="/logo/fsk.webp"
                className="max-w-xl min-w-0 2xl:max-w-md"
              ></img>
              <div className="flex flex-col items-start justify-evenly max-w-lg min-w-0">
                <h1 className="text-red-600 text-9xl md:text-7xl 2xl:text-8xl font-swampwitch">
                  FSK Satellite
                </h1>
                <p className="text-white text-lg 2xl:text-base md:text-sm">
                  FSK Satellite is an Italian trap music group composed of Taxi
                  B, Sapobully, Chiello and Greg Willen. The group started out
                  back in 2017 and has released 2 albums before disassembling in
                  2021.
                </p>
                <a
                  href="#history"
                  className="text-center text-white bg-red-600 px-8 py-3 2xl:px-6 md:px-2"
                >
                  Learn more
                </a>
              </div>
            </div>
          )}
          <div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
