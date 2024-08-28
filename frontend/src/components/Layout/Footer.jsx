import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { RiInstagramFill , RiTwitterFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <p style={{ fontWeight: "bold", color: "white" }}>
        Empowering your career journey, connecting talent with opportunities worldwide.
      </p>
      <div>
        <Link to={"https://www.instagram.com/dubey__aadarsh//"} target="_blank">
          <RiInstagramFill />
        </Link>
        <Link to={"https://x.com/Iam_Aady04"} target="_blank">
          <RiTwitterFill/>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
