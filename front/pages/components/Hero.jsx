import React from "react";

import { motion } from "framer-motion";
import scale from "@/animations/scale";
import Link from "next/link";

export const wtsp = {
  text: "Hola Estoy interesado en enviar una remesa.",
  number: "51942921763",
};




const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("/images/caracas.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <motion.h1 {...scale} className="mb-5 text-5xl font-bold text-white ">
            Necesitas enviar remesas a Venezuela?
          </motion.h1>
          
          <Link
            target="_blank"
            href={`https://wa.me/${wtsp.number}?text=${wtsp.text}`}
            className="btn btn-success"
          >
            Enviar Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
