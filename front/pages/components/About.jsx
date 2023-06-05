import React from "react";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200" id="about">
      <div className="hero-content flex-col">
        <h1 className="text-4xl lg:text-5xl font-bold">¿Quiénes somos?</h1>
        <img src="/images/1.jpg" className="rounded-lg shadow-2xl" />
        <div>
          <p className="py-6 text-bold w-80 ">
            <b className="text-2xl">Envios Guro S.A.C.</b>
            <br></br>
            <br></br>
            Ante la necesidad de mantener el lazo de ayuda entre venezolanos
            residentes en el exterior con sus familiares en Venezuela, surge la
            iniciativa de crear <b>Envios Guro</b>. Brindamos el puente
            económico para que tus familiares reciban el fruto de tu trabajo, de
            manera rápida, segura, confiable y cómoda para ti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
