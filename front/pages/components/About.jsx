import React from "react";

const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200 " id="about">
        <div className="hero-content max-lg:flex-col gap-10">
          <img src="/images/1.jpg" className="rounded-lg shadow-2xl hover:scale-110 transition-transform duration-500" />
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-5">¿Quiénes somos?</h1>
            <b className="text-2xl mt-5">Envios Guro S.A.C.</b>
            <p className="py-6 text-justify">
              Ante la necesidad de mantener un vínculo de ayuda entre los
              venezolanos residentes en el exterior y sus familiares en
              Venezuela, ha surgido la iniciativa de crear Envios Guro.<br/><br/> Nuestro
              objetivo es proporcionar un puente económico que permita a tus
              seres queridos recibir los frutos de tu trabajo de manera rápida,
              segura, confiable y conveniente para ti. En Envios Guro, nos
              comprometemos a facilitar el proceso de envío de dinero a
              Venezuela, asegurando que tus familiares reciban los recursos
              necesarios de forma eficiente. Valoramos la importancia de
              mantener los lazos familiares y entendemos que tu apoyo financiero
              puede marcar la diferencia en sus vidas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
