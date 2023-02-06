import Link from "next/link";
import React from "react";
import useMediaQuery from "../utils/hooks/useMediaQuery";

const Navbar = () => {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");

  return (
    <div>
      {!isWindowSizeSmall ? (
        <div className="flex flex-col w-screen justify-between h-screen p-12 text-red-600 gap-6 text-8xl font-swampwitch">
          <div className="flex flex-row justify-between">
            <Link href="#history" className="hover:text-red-800">
              History
            </Link>
            <Link href="#discography" className="hover:text-red-800">
              Discography
            </Link>
          </div>
          <div className="flex flex-row justify-between">
            <Link href="#members" className="hover:text-red-800">
              Members
            </Link>
            <Link href="#gallery" className="hover:text-red-800">
              Gallery
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-screen justify-between h-screen p-12 text-red-600 gap-6 text-5xl font-swampwitch">
          <div className="flex flex-row justify-between">
            <Link href="#history" className="hover:text-red-800">
              History
            </Link>
            <Link href="#discography" className="hover:text-red-800">
              Discography
            </Link>
          </div>
          <div className="flex flex-row justify-between">
            <Link href="#members" className="hover:text-red-800">
              Members
            </Link>
            <Link href="#gallery" className="hover:text-red-800">
              Gallery
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
