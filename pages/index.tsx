import type { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>FSK Satellite</title>
        <link rel="icon" href="/fsk.webp" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Vaffanculo <a className="text-red-600">Davide Bianco ❤️ </a>
        </h1>
      </main>
    </div>
  );
};

export default Index;
