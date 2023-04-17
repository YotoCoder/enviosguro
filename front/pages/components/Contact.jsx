import React from "react";

const Contact = () => {
  return (
    <div className="lg:flex items-start">
      <div className="hero min-h-min relative bg-base-200" id="contact">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-3xl font-bold border-gray-300 border-b-2 pb-4 mb-4">
              CONTACTO
            </h1>
            <p className="py-2 font-bold ">
              Envios Guro S.A.C. RUC 20603161140<br></br>
              Ca. Germán Schreiber 276 Oficina 240 San Isidro.
            </p>

            <div className="flex items-center justify-start gap-2 pt-4">
              <img src="/icons/email.svg" className="w-8 h-8" />
              <p className="py-2 font-extrabold">enviosguro@gmail.com</p>
            </div>

            <div className="flex items-center justify-start py-2 gap-2">
              <img src="/icons/phone.svg" className="w-8 h-8" />
              <p className="font-extrabold">935119585</p>
            </div>

            <div className="flex items-center justify-start py-1 gap-2">
              <img src="/icons/ws.svg" className="w-9 h-9" />
              <p className="font-extrabold">935291169</p>
            </div>

            <div className="flex items-center justify-start py-1 gap-2">
              <img src="/icons/telegram.svg" className="w-8 h-8" />
              <p className="font-extrabold">@enviosguro</p>
            </div>

            <div className="flex items-center justify-start py-1 gap-2">
              <img src="/icons/facebook.svg" className="w-9 h-9" />
              <p className="font-extrabold">Envios Guro</p>
            </div>

          </div>
        </div>
      </div>

      <div className="hero min-h-min relative bg-base-200" id="contact">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-80">
            <h1 className="text-3xl font-bold border-gray-300 border-b-2 pb-4 mb-4">
              ESCRÍBENOS
            </h1>
            <p>
              Llena el siguiente formulario y nos pondremos en contacto contigo
              lo antes posible.
            </p>
            <form className="py-2 font-bold border-gray-300 border-b-2">
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  className="input input-bordered w-full max-w-xs drop-shadow-xl"
                />

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Correo Electrónico"
                  className="input input-bordered w-full max-w-xs drop-shadow-xl"
                />

                <input
                  type="number"
                  name="telefono"
                  id="telefono"
                  placeholder="Telefono"
                  className="input input-bordered w-full max-w-xs drop-shadow-xl"
                />

                <textarea
                  name="message"
                  id="message"
                  placeholder="Mensaje"
                  cols="30"
                  rows="10"
                  className="border-gray-300 border-2 rounded-md p-2 drop-shadow-xl"
                ></textarea>

                <button className="my-2 btn btn-primary">Enviar Mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
