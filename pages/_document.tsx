import Document, { Head, Html, Main, NextScript } from "next/document";

export default class FSKDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="width=device-width" />
          <meta name="apple-mobile-web-app-title" content="FSK Satellite" />
          <link rel="canonical" href="https://fsksatellite.com" />
          <title>FSK Satellite</title>
          <link rel="icon" href="/logo/fsk.webp" />
          <meta
            name="description"
            content="FSK Satellite is an Italian trap group composed of Taxi B, Sapobully, Chiello and Greg Willen."
          />
          <meta property="og:url" content="https://fsksatellite.com"></meta>
          <meta property="og:title" content="FSK Satellite" key="title" />
          <meta
            name="keywords"
            content="fsk, satellite, fsksatellite, sapobully, chiello, taxi b, ollare, fsk website, fsk satellite website, greg willen, fsk satellite"
          />
          <meta
            name="og:description"
            content="FSK Satellite is an Italian trap group composed of Taxi B, Sapobully, Chiello and Greg Willen."
          />
          <meta property="og:image" content="https://i.imgur.com/P2fiUn9.png" />
          <meta property="og:site_name" content="FSK Satellite" />
          <meta name="theme-color" content="#dc2626"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
