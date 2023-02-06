import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Error404: NextPage = () => {
  return (
    <>
      <Head>
        <title>FSK Satellite - 404 Error</title>
      </Head>
      <div>
        <div className="flex flex-col justify-between relative">
          <div className="mb-20 h-screen w-screen">
            <Navbar />
          </div>
          <div className="flex flex-col h-screen w-screen items-center justify-center text-center text-red-600 gap-y-5 absolute">
            <h1 className="text-5xl font-bold">Page not found.</h1>
            <Link
              href="/"
              className="text-2xl hover:underline hover:underline-offset-4"
            >
              Home.
            </Link>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Error404;
