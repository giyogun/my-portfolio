import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == 'abouts']`)
      .then((data) => setAbouts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Love to Use <span>Code</span>
        <br />
        to <span>Solve Problems</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl).url()} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// export default About;
export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__altbg"
);
