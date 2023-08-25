import React, { useEffect, useState } from "react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

function RealHeader() {
  const [header, setHeader] = useState(null);
  useEffect(() => {
    if (matchMedia("screen and (min-width: 1024px)").matches) {
      setHeader(<Header />);
    } else {
      setHeader(<MobileHeader />);
    }
  }, []);

  return header;
}

export default RealHeader;
