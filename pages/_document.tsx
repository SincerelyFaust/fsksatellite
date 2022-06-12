import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>FSK Satellite</title>
          <link rel="icon" href="/logo/fsk-bg-white.webp" />
          <meta name="description" content="FSK Satellite" />
          <meta property="og:title" content="FSK Satellite" key="title" />
          <meta
            name="keywords"
            content="fsk, satellite, fsksatellite, sapobully, chiello, taxi b, ollare, fsk website, fsk satellite website, greg willen, fsk satellite"
          />
          <meta name="description" content="FSK Satellite" />
          <meta name="og:description" content="FSK Satellite" />
          <meta
            property="og:image"
            content="https://avatars.githubusercontent.com/u/107147333?s=200&v=4"
          />
          <meta property="og:site_name" content="FSK Satellite" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
