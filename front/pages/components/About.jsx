import React from "react";

const About = () => {
  return (
    <>
    <div className="hero min-h-screen bg-base-200 " id="about">
  <div className="hero-content flex-col lg:flex-row">
  <img src="/images/1.jpg" className="rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold mb-5">¿Quiénes somos?</h1>
      <b className="text-2xl mt-5">Envios Guro S.A.C.</b>
      <p className="py-6">Ante la necesidad de mantener el lazo de ayuda entre venezolanos
            residentes en el exterior con sus familiares en Venezuela, surge la
            iniciativa de crear <b>Envios Guro</b>. Brindamos el puente
            económico para que tus familiares reciban el fruto de tu trabajo, de
            manera rápida, segura, confiable y cómoda para ti.</p>
    </div>
  </div>
</div>

    </>
  );
};

export default About;
