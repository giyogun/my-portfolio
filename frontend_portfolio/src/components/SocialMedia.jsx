import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://ng.linkedin.com/in/godwin-iyogun-0b0b79160"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://www.github.com/giyogun"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.twitter.com/godwin__JS" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
