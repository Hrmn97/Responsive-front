import React from "react";

import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://twitter.com/Harman9765"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://github.com/Hrmn97" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://instagram.com/h_97singh?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
