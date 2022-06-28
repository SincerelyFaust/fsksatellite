import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <div>
      {windowSize >= 1075 ? (
        <div className="flex flex-row bg-sudditaliano max-w-full max-h-fit p-20 mb-auto mx-44 justify-between bg-no-repeat bg-cover bg-center flex-wrap shadow-2xl xl:bg-sudditaliano-xl shadow-black gap-y-10 xl:justify-center lg:mx-22 md:mx-14 sm:mx-6">
          <div className="max-w-xl min-w-0 2xl:max-w-md">
            <Image
              src="/logo/fsk.webp"
              alt="FSK Satellite logo"
              height={820}
              width={900}
              objectFit="contain"
            ></Image>
          </div>
          <div className="flex flex-col items-start justify-center gap-12 max-w-lg min-w-0 xl:items-center xl:text-center">
            <h1 className="text-red-600 text-9xl md:text-7xl 2xl:text-8xl font-swampwitch">
              FSK Satellite
            </h1>
            <p className="text-white text-lg 2xl:text-base md:text-sm">
              FSK Satellite is an Italian trap music group composed of Taxi B,
              Sapobully, Chiello and Greg Willen. The group started out back in
              2017 and has released 2 albums before disassembling in 2021.
            </p>
            <Link href="#history">
              <a className="text-center text-white bg-red-600 px-8 py-3 2xl:px-6 md:px-2">
                Learn more
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-row bg-sudditaliano max-w-full max-h-fit p-20 mb-20 justify-center bg-no-repeat bg-cover bg-center flex-wrap shadow-2xl shadow-black xl:bg-sudditaliano-xl gap-y-10">
          <div className="max-w-xl min-w-0 2xl:max-w-md">
            <Image
              src="/logo/fsk.webp"
              alt="FSK Satellite logo"
              height={820}
              width={900}
              objectFit="contain"
            ></Image>
          </div>
          <div className="flex flex-col justify-center gap-12 max-w-lg min-w-0 items-center text-center">
            <h1 className="text-red-600 text-9xl md:text-7xl 2xl:text-8xl font-swampwitch">
              FSK Satellite
            </h1>
            <p className="text-white text-lg 2xl:text-base md:text-sm">
              FSK Satellite is an Italian trap music group composed of Taxi B,
              Sapobully, Chiello and Greg Willen. The group started out back in
              2017 and has released 2 albums before disassembling in 2021.
            </p>
            <a
              href="#history"
              className="text-center text-white bg-red-600 px-8 py-3 2xl:px-6 md:px-2"
            >
              Learn more
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
