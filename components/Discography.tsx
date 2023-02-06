import React from "react";
import Image from "next/image";
import Link from "next/link";

const Discography = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center w-screen">
      <p className="text-10xl font-swampwitch text-red-600 sm:text-8xl">
        Discography
      </p>
      <div className="flex flex-row flex-wrap gap-32 items-center w-full justify-center">
        <div className="flex flex-col gap-5">
          <div>
            <div className="w-72 h-72 border-red-600 hover:shadow-red">
              <Image
                src={"/albums/fsktrapshitcover.webp"}
                width={640}
                height={640}
                alt="fsk trapshit album cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Link
              target="_blank"
              className="text-black text-3xl font-semibold hover:underline"
              href={
                "https://open.spotify.com/album/12qonhRlBJqknWeMEvjmxY?si=ltJRTikuSpedvVF89YfZOQ"
              }
            >
              FSK Trapshit ↗
            </Link>
            <p className="text-black text-xl">Album</p>
            <p className="text-black text-xl">11 tracks</p>
            <p className="text-black text-xl">Released in 2019</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <div className="w-72 h-72 hover:shadow-red">
              <Image
                src={"/albums/fsktrapshitrevengecover.webp"}
                width={640}
                height={640}
                alt="fsk trapshit revenge album cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Link
              target="_blank"
              className="text-black text-3xl font-semibold hover:underline"
              href={
                "https://open.spotify.com/album/4z4zCeqiEjTTBI0a8Uyl0S?si=m4sV7cImSGiSZh_bvixTXw"
              }
            >
              FSK Trapshit Revenge ↗
            </Link>
            <p className="text-black text-xl">
              Album reissue with bonus tracks
            </p>
            <p className="text-black text-xl">7 tracks</p>
            <p className="text-black text-xl">Released in 2019</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <div className="w-72 h-72 hover:shadow-red">
              <Image
                src={"/albums/padrefiglioespiritocover.webp"}
                width={640}
                height={640}
                alt="padre figlio e spirito album cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Link
              target="_blank"
              className="text-black text-3xl font-semibold hover:underline"
              href={
                "https://open.spotify.com/album/5tLXHXI9PwGE0ZpAbP2uop?si=3pbZek1fRNGNFSG4cCZaRQ"
              }
            >
              Padre figlio e spirito ↗
            </Link>
            <p className="text-black text-xl">Album</p>
            <p className="text-black text-xl">15 tracks</p>
            <p className="text-black text-xl">Released in 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discography;
