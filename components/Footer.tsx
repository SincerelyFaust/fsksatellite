import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap min-w-full max-h-fit py-16 px-20 justify-between items-start bg-red-600 text-white gap-10 hover:underline-offset-4 mt-20">
        <div className="flex flex-col justify-evenly text-2xl">
          <h2 className="text-3xl">FSK Satellite</h2>
          <Link
            href="https://open.spotify.com/artist/4UikIA2yhd0jVJSXD9IOJH"
            target="_blank"
          >
            <a className="hover:underline">Spotify</a>
          </Link>
        </div>
        <div className="flex flex-col justify-evenly text-2xl">
          <h2 className="text-3xl">Taxi B</h2>
          <Link href="https://instagram.com/taxi_bi" target="_blank">
            <a className="hover:underline"> Instagram</a>
          </Link>
          <Link
            href="https://open.spotify.com/artist/5FkcU4BVzPptuB6AjobZIL"
            target="_blank"
          >
            <a className="hover:underline">Spotify</a>
          </Link>
        </div>
        <div className="flex flex-col justify-evenly text-2xl">
          <h2 className="text-3xl">Sapobully</h2>
          <Link
            href="https://www.instagram.com/sapobullythebig4l/"
            target="_blank"
          >
            <a className="hover:underline">Instagram #1</a>
          </Link>
          <Link
            href="https://www.instagram.com/sapobullythebig4l/"
            target="_blank"
          >
            <a className="hover:underline">Instagram #2</a>
          </Link>
          <Link
            href="https://open.spotify.com/artist/2u5doTfPeC2gnLwislKGLE"
            target="_blank"
          >
            <a className="hover:underline">Spotify</a>
          </Link>
        </div>
        <div className="flex flex-col justify-evenly text-2xl">
          <h2 className="text-3xl">Chiello</h2>
          <Link href="https://www.instagram.com/chiello_fsk/" target="_blank">
            <a className="hover:underline">Instagram</a>
          </Link>
          <Link
            href="https://open.spotify.com/artist/5mjasIBQQPIqA9GV2Ys61h"
            target="_blank"
          >
            <a className="hover:underline">Spotify</a>
          </Link>
        </div>
        <div className="flex flex-col justify-evenly text-2xl">
          <h2 className="text-3xl">Greg Willen</h2>
          <Link href="https://www.instagram.com/gregwillen/" target="_blank">
            <a className="hover:underline">Instagram</a>
          </Link>
          <Link
            href="https://open.spotify.com/artist/51ltJZ6rB893AdzgCxSOV3"
            target="_blank"
          >
            <a className="hover:underline">Spotify</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
