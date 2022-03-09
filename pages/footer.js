import React from "react";
import Image from "next/image";
import Fb from "../public/fb.png";
import Insta from "../public/insta.png";
import Linkedin from "../public/Linkedin.png";
import Twitter from "../public/twitter.png";
function footer() {
  return (
    <div className="flex flex-col mt-24 mb-2">
      <div className="flex flex-row place-content-center">
        <div className=" ml-6">
          <Image src={Fb} alt="Facebook" />
        </div>
        <div className="ml-6">
          <Image src={Insta} alt="Insta" />
        </div>
        <div className="ml-6">
          <Image src={Linkedin} alt="Linkedin" />
        </div>
        <div className="ml-6">
          <Image src={Twitter} alt="Twitter" />
        </div>
      </div>
      <div className="font-semibold text-center text-sm mt-4">
        Copyright ©2020 All rights reserved
      </div>
    </div>
  );
}

export default footer;
