import React, { useState } from "react";
import { images } from "../../constants";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.godwin0} alt="godwin-logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "projects", "skills", "testimonials", "contact"].map(
          (item) => (
            <li key={`link-${item}`} className="app__flex p-text">
              <div></div>
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "projects",
                "skills",
                "testimonials",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <aside className="app__soc">
              <article>
                <a
                  href="https://ng.linkedin.com/in/godwin-iyogun-0b0b79160"
                  target="_blank"
                  rel="noreferrer"
                >

                  <BsLinkedin />
                </a>
              </article>
              <article>
                <a
                  href="https://www.github.com/giyogun"
                  target="_blank"
                  rel="noreferrer"
                >

                  <BsGithub />
                </a>
              </article>
              <article>
                <a
                  href="https://www.twitter.com/godwin__JS"
                  target="_blank"
                  rel="noreferrer"
                >
                  
                  <BsTwitter />
                </a>
              </article>
            </aside>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
