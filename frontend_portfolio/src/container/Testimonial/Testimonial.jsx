import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { client, urlFor } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    client.fetch(`*[_type == 'testimonials']`).then((data) => {
      setTestimonials(data);
      console.log(data);
    });
    client.fetch(`*[_type == 'brands']`).then((data) => {
      setBrands(data);
    });
  }, []);

  const previousItemHandler = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) return testimonials.length - 1;
      return prev - 1;
    });
  };

  const nextItemHandler = () => {
    setCurrentIndex((prev) => {
      if (prev === testimonials.length - 1) return 0;
      return prev + 1;
    });
  };

  if (!testimonials) {
    return <div>Loading...</div>;
  }

  const currentItem = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <div className="app__testimonial-quote">
              <img src={urlFor(currentItem.imageurl).url()} alt="testimonial" />
              <FaQuoteRight />
            </div>
            <div className="app__testimonial-content">
              <p className="p-text">{currentItem.feedback}</p>
              <div>
                <h4 className="bold-text">{currentItem.name}</h4>
                <h5 className="p-text">{currentItem.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => previousItemHandler()}>
              <FaChevronLeft />
            </div>
            <div className="app__flex" onClick={() => nextItemHandler()}>
              <FaChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl).url()} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
