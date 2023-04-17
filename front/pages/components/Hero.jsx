import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/caracas.jpg")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold text-white">Necesitas enviar remesas a Venezuela?</h1>
        <p className="mb-5"></p>
        <button className="btn btn-success">Enviar Ahora</button>
      </div>
    </div>
  </div>
  );
};

export default Hero;
