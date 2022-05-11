import React from "react";
import "./Header.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";

const scaleVariants = {
  animate: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <main className="app__header app__flex">
      <motion.div
        // whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        // transition={{ duration: 0.5 }}
        variants={scaleVariants}
        animate={scaleVariants.animate}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👨‍💻</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I'm</p>
              <h1 className="head-text">Godwin</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Software Developer</p>
            <br />
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        // whileInView={{ opacity: [0, 1] }}
        // transition={{ duration: 0.5, delayChildren: 1 }}
        variants={scaleVariants}
        animate={scaleVariants.animate}
        className="app__header-img"
      >
        <img src={images.i6} alt="profile_bg" />
        <motion.img
          // whileInView={{ scale: [0, 1] }}
          // transition={{ duration: 0.5, ease: "easeInOut" }}
          variants={scaleVariants}
          animate={scaleVariants.animate}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        ></motion.img>
      </motion.div>
      <motion.div
        variants={scaleVariants}
        animate={scaleVariants.animate}
        className="app__header-circles"
      >
        {[images.javascript, images.react, images.redux].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </main>
  );
};

export default AppWrap(Header, "home");
// export default Header;
