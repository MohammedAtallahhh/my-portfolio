import React, { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    Height: window.innerHeight,
  });

  useEffect(() => {
    const changeScreenSize = (e) => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", changeScreenSize);

    return () => {
      window.removeEventListener("resize", changeScreenSize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
