import React from "react";

import { motion } from "framer-motion";
import scale from "@/animations/scale";
import { wtsp } from "./Hero";

const Card = ({ children, step }) => {
  return (
    <motion.div
      {...scale}
      className="card mx-6 w-96 bg-base-100 shadow-2xl mb-5"
    >
      <div className="card-body">
        <h1 className="text-5xl border-b-2 py-3 font-bold">{step}</h1>
        <p className="text-md">{children}</p>
      </div>
    </motion.div>
  );
};

const Procedimiento = () => {
  return (
    <motion.div
      id="procedimiento"
      className="container mx-auto m-auto min-h-screen pt-14 mt-5"
      transition={{
        ease: "linear",
        duration: 2,
        x: { duration: 1 },
      }}
    >
      <h1 className="lg:text-4xl text-2xl  flex items-center justify-center font-bold border-gray-300 pb-4 mb-4 pt-5">
        PROCEDIMIENTO DE ENVÍO
      </h1>

      <div className="flex flex-wrap flex-1 justify-around">
        <Card step="01">
          Registra tus datos personales Llena los datos solicitados. El usuario
          siempre estará vinculado a tu correo y número de teléfono. Además,
          deberás completar una verificación de identidad.
        </Card>
        <Card step="02">
          Recarga saldo en Perú a través de transferencia bancaria, agentes
          autorizados y pagos de servicios en BCP, Interbank y BBVA. Especifica
          el origen del depósito y adjunta una captura del comprobante.
        </Card>
        <Card step="03">
          Recarga saldo en tu cuenta utilizando transferencia bancaria, agentes
          autorizados y pagos de servicios en BCP, Interbank y BBVA. Especifica
          el origen del depósito y adjunta una captura como comprobante.
        </Card>
        <Card step="04">
          Después de la transferencia dentro del horario de 9 am a 6 pm,
          recibirás un correo con los detalles de la transacción. Podrás
          verificar el estado en la sección "Transacciones", donde se muestra el
          envío a tu beneficiario como evidencia.
        </Card>

        <motion.div
          {...scale}
          className="card mx-6  w-96 bg-[#09054F] text-primary-content mb-5"
        >
          <div className="card-body">
            <h2 className="text-4xl items-center justify-center py-3 font-bold">
              ¿Tienes Dudas?
            </h2>
            <p>Ofrecemos atención las 24 horas a través de WhatsApp.</p>
            <div className="card-actions justify-end">
              <a
                className="rounded-btn p-4 font-semibold bg-[#25D366] text-black"
                target="_blank"
                href={`https://wa.me/${wtsp.number}?text=${wtsp.text}`}
              >
                Contáctanos
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Procedimiento;
