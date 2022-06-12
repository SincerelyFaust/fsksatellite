import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap min-w-full max-h-fit py-16 px-20 justify-between items-start bg-red-600 text-white gap-10 hover:underline-offset-4">
        <div className="flex flex-col justify-evenly text-2xl">
          <h2 className="text-3xl">FSK Satellite</h2>
          <a
            href="https://open.spotify.com/artist/4UikIA2yhd0jVJSXD9IOJH"
            className="hover:underline"
          >
            Spotify
          </a>
        </div>
        <div className="flex flex-col justify-evenly text-2xl">
          <h2 className="text-3xl">Taxi B</h2>
          <a href="https://instagram.com/taxi_bi" className="hover:underline">
            Instagram
          </a>
          <a
            href="https://open.spotify.com/artist/5FkcU4BVzPptuB6AjobZIL"
            className="hover:underline"
          >
            Spotify
          </a>
        </div>
        <div className="flex flex-col justify-evenly text-2xl">
          <h2 className="text-3xl">Sapobully</h2>
          <a
            href="https://www.instagram.com/sapobullythebig4l/"
            className="hover:underline"
          >
            Instagram #1
          </a>
          <a
            href="https://www.instagram.com/sapobullythebig4l/"
            className="hover:underline"
          >
            Instagram #2
          </a>
          <a
            href="https://open.spotify.com/artist/2u5doTfPeC2gnLwislKGLE"
            className="hover:underline"
          >
            Spotify
          </a>
        </div>
        <div className="flex flex-col justify-evenly text-2xl">
          <h2 className="text-3xl">Chiello</h2>
          <a
            href="https://www.instagram.com/chiello_fsk/"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://open.spotify.com/artist/5mjasIBQQPIqA9GV2Ys61h"
            className="hover:underline"
          >
            Spotify
          </a>
        </div>
        <div className="flex flex-col justify-evenly text-2xl">
          <h2 className="text-3xl">Greg Willen</h2>
          <a
            href="https://www.instagram.com/gregwillen/"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://open.spotify.com/artist/51ltJZ6rB893AdzgCxSOV3"
            className="hover:underline"
          >
            Spotify
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
