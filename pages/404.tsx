import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Error404: NextPage = () => {
  return (
    <>
      <Head>
        <title>FSK Satellite - 404 Error</title>
      </Head>
      <div>
        <main className="flex min-h-screen flex-col justify-between">
          <div className="mb-20">
            <Navbar />
          </div>
          <div className="flex flex-col items-center justify-center text-center py-2 px-20 mb-20 text-red-600 gap-y-5">
            <h1 className="text-5xl font-bold">Page not found.</h1>
            <a href="/" className="text-2xl">
              Home
            </a>
          </div>
          <div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
};

export default Error404;
