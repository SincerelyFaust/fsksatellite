import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <div>
      {windowSize >= 1075 ? (
        <div className="flex flex-col w-screen justify-between h-screen p-12 text-red-600 gap-6 text-8xl font-swampwitch">
          <div className="flex flex-row justify-between">
            <p className="hover:text-red-800">FSK</p>
            <p className="hover:text-red-800">Satellite</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="hover:text-red-800">Coming</p>
            <p className=" hover:text-red-800">soon</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-screen justify-between h-screen p-12 text-red-600 gap-6 text-6xl font-swampwitch">
          <div className="flex flex-row justify-between">
            <p className="hover:text-red-800">FSK</p>
            <p className="hover:text-red-800">Satellite</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="hover:text-red-800">Coming</p>
            <p className=" hover:text-red-800">soon</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
