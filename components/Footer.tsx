import Link from "next/link";
import React from "react";
import FSKJesus from "../public/photos/fsk-footer.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-end mt-20 sm:mt-64">
      <div className="flex flex-col justify-center items-center z-20 absolute">
        <div className="flex flex-row flex-wrap w-screen max-h-fit py-16 px-20 justify-between items-start text-white gap-5 hover:underline-offset-4">
          <div className="flex flex-col justify-evenly text-2xl">
            <p className="text-3xl font-semibold lg:text-xl">FSK Satellite</p>
            <Link
              href="https://open.spotify.com/artist/4UikIA2yhd0jVJSXD9IOJH"
              className="hover:underline text-2xl lg:text-base"
              target="_blank"
            >
              Spotify
            </Link>
          </div>
          <div className="flex flex-col justify-evenly text-2xl">
            <p className="text-3xl font-semibold lg:text-xl">Taxi B</p>
            <Link
              href="https://instagram.com/taxi_bi"
              className="hover:underline text-2xl lg:text-base"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              href="https://open.spotify.com/artist/5FkcU4BVzPptuB6AjobZIL"
              className="hover:underline text-2xl lg:text-base"
              target="_blank"
            >
              Spotify
            </Link>
          </div>
          <div className="flex flex-col justify-evenly text-2xl">
            <p className="text-3xl font-semibold lg:text-xl">Sapobully</p>
            <Link
              href="https://www.instagram.com/sapo_bully/"
              className="hover:underline text-2xl lg:text-base"
              target="_blank"
            >
              Instagram #1
            </Link>
            <Link
              href="https://www.instagram.com/sapobullythebig4l/"
              className="hover:underline text-2xl lg:text-base"
              target="_blank"
            >
              Instagram #2
            </Link>
            <Link
              href="https://open.spotify.com/artist/2u5doTfPeC2gnLwislKGLE"
              className="hover:underline text-2xl lg:text-base"
              target="_blank"
            >
              Spotify
            </Link>
          </div>
          <div className="flex flex-col justify-evenly text-2xl">
            <p className="text-3xl font-semibold lg:text-xl">Chiello</p>
            <Link
              href="https://www.instagram.com/chiello_fsk/"
              className="hover:underline text-2xl lg:text-base"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              href="https://open.spotify.com/artist/5mjasIBQQPIqA9GV2Ys61h"
              className="hover:underline text-2xl lg:text-base"
              target="_blank"
            >
              Spotify
            </Link>
          </div>
          <div className="flex flex-col justify-evenly text-2xl">
            <p className="text-3xl font-semibold lg:text-xl">Greg Willen</p>
            <Link
              href="https://www.instagram.com/gregwillen/"
              className="hover:underline text-2xl lg:text-base"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              href="https://open.spotify.com/artist/51ltJZ6rB893AdzgCxSOV3"
              className="hover:underline text-2xl lg:text-base"
              target="_blank"
            >
              Spotify
            </Link>
          </div>
        </div>
        <div className="text-xl text-white mb-5 text-center lg:text-base">
          <p>
            Made by{" "}
            <Link
              href="https://marinhedes.com"
              className="hover:underline font-semibold hover:underline-offset-4"
              target="_blank"
            >
              Marin Heđeš
            </Link>{" "}
            with ❤️ for 🇮🇹.
          </p>
        </div>
      </div>
      <Image
        src={FSKJesus}
        alt="fsk satellite group members posing"
        className="-z-10 relative"
        quality={100}
        priority
      />
      <div className="bg-red-600 z-10 absolute w-screen h-2/6 sm:h-3/6 mix-blend-difference backdrop-brightness-50"></div>
    </div>
  );
};

export default Footer;
