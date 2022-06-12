import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <div>
      {windowSize >= 1075 ? (
        <div className="flex flex-row flex-wrap min-w-full max-h-fit px-12 mt-8 justify-between text-red-600 gap-6">
          <div className="text-3xl hover:bg-red-600 hover:text-white">
            <a href="/">FSK Satellite</a>
          </div>
          <div className="flex flex-row flex-wrap text-3xl gap-6">
            <a href="#history" className="hover:bg-red-600 hover:text-white">
              History
            </a>
            <a
              href="#discography"
              className="hover:bg-red-600 hover:text-white"
            >
              Discography
            </a>
            <a href="#members" className="hover:bg-red-600 hover:text-white">
              Members
            </a>
            <a href="#gallery" className="hover:bg-red-600 hover:text-white">
              Gallery
            </a>
          </div>
        </div>
      ) : (
        <div className="flex flex-col min-w-full max-h-fit px-12 mt-8 justify-center text-red-600 gap-2">
          <div className="text-3xl hover:bg-red-600 hover:text-white">
            <a href="/">FSK Satellite</a>
          </div>
          <div className="flex flex-col text-3xl gap-2 flex-wrap">
            <a href="#history" className="hover:bg-red-600 hover:text-white">
              History
            </a>
            <a
              href="#discography"
              className="hover:bg-red-600 hover:text-white"
            >
              Discography
            </a>
            <a href="#members" className="hover:bg-red-600 hover:text-white">
              Members
            </a>
            <a href="#gallery" className="hover:bg-red-600 hover:text-white">
              Gallery
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
