import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";

function FSKSatellite({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default FSKSatellite;
