import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import upDown from "@/animations/upDown";

import { motion } from "framer-motion";
import scale from "@/animations/scale";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("No es un correo valido")
    .required("El email es requerido"),
  message: yup.string(),
  phone: yup.string().required("El telefono es requerido"),
  name: yup.string().required("El nombre es requerido"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    toast.promise(
      axios.post("https://nodemailer-rust.vercel.app/api/contact", data),
      {
        loading: "Enviando Correo...",

        success: "Correo Enviado!",

        error: "Ups, algo salio mal.",
      }
    );
  };

  return (
    <motion.div {...upDown}  className="lg:flex ">
      <div className="hero min-h-screen relative bg-base-200" id="contact">
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

      <div className="hero min-h-screen relative bg-base-200 px-4" id="contact">
        <div>
          <div className="w-full">
            <h1 className="text-3xl font-bold border-gray-300 border-b-2 pb-4 mb-4">
              ESCRÍBENOS
            </h1>
            <p>
              Llena el siguiente formulario y nos pondremos en contacto contigo
              lo antes posible.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="py-2 font-bold border-gray-300 border-b-2"
            >
              <div className="flex flex-col gap-3 w-full">
                {/* <label className="text-red-500">{errors.nombre}</label> */}
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  className={`input input-bordered placeholder-zinc-300 color-white w-full  drop-shadow-xl`}
                  {...register("name")}
                />

                <label className="text-red-500 ">{errors.name?.message}</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Correo Electrónico "
                  className={`input input-bordered placeholder-zinc-300 w-full drop-shadow-xl`}
                  {...register("email")}
                />

                <label className="text-red-500 ">{errors.email?.message}</label>
                <input
                  type="number"
                  name="telefono"
                  id="telefono"
                  placeholder="Telefono"
                  className={`input input-bordered placeholder-zinc-300 w-full  drop-shadow-xl`}
                  {...register("phone")}
                />

                <label className="text-red-500 ">{errors.phone?.message}</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Mensaje"
                  cols="30"
                  rows="10"
                  className={`border-gray-300 placeholder-zinc-300 border-2 rounded-md p-2 drop-shadow-xl`}
                  {...register("message")}
                ></textarea>
                <label className="text-red-500 ">
                  {errors.message?.message}
                </label>
                <button className="my-2 btn btn-primary">Enviar Mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
