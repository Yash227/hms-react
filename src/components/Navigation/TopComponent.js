//import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";

const TopComponent = () => {
  /*
  const [navColor, setNavColor] = useState("white");

  const handlescroll = () => {
    if (window.pageYOffset > 140) {
      setNavColor("white");
    } else {
      setNavColor("black");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  */

  const vert_align = {
    top: 0,
    position: "fixed",
    "z-index": "100",
    transition: "all .5s ease",
    width: "100%",
  };
  return (
    <div id="fixed-top" style={vert_align} fixed="top">
      <Navigation color="white" />
    </div>
  );
};

export default TopComponent;