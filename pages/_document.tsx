import Document, { Head, Html, Main, NextScript } from "next/document";

export default class FSKDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="FSK Satellite" />
          <link rel="canonical" href="https://fsksatellite.com" />
          <link rel="icon" href="/favicon/favicon.ico" />
          <meta
            name="description"
            content="FSK Satellite is an Italian trap group composed of Taxi B, Sapobully, Chiello and Greg Willen."
          />
          <meta property="og:url" content="https://fsksatellite.com" />
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
          <meta name="theme-color" content="#dc2626" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <meta name="msapplication-TileImage" content="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#dc2626" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
