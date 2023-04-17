import React from 'react'

import { motion } from "framer-motion"

const Procedimiento = () => {
  return (
    <motion.div
        id="procedimiento"
        transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 }
          }}
      
    >
        <h1 className="text-3xl flex items-center justify-center font-bold border-gray-300 pb-4 mb-4">PROCEDIMIENTO DE ENVÍO</h1>
        
        <div className='flex'>
            <div className="card mx-6 w-96 bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-5xl border-b-2 py-3 font-bold'>01</h1>
                    <h2 className="card-title">Realiza el deposito a cualquiera de nuestras cuentas bancarias.</h2>
                    {/* The button to open modal */}
                    <label htmlFor="my-modal" className="btn">Ver cuentas</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Banco BCP</h3>
                        <p className="py-4">191595965656</p>
                        <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Yay!</label>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="card mx-6 w-96 bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-5xl border-b-2 py-3 font-bold'>02</h1>
                    <h2 className="card-title">Realiza el deposito a cualquiera de nuestras cuentas bancarias.</h2>
                    
                    
                </div>
            </div>

            <div className="card mx-6 w-96 bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-5xl border-b-2 py-3 font-bold'>03</h1>
                    <h2 className="card-title">Realiza el deposito a cualquiera de nuestras cuentas bancarias.</h2>
                    
                    
                </div>
            </div>
            </div>

            <div className='flex my-8'>
                <div className="card mx-6 w-96 h-80 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-5xl border-b-2 py-3 font-bold'>04</h1>
                        <h2 className="card-title">Realiza el deposito a cualquiera de nuestras cuentas bancarias.</h2>
                        
                        
                    </div>
                </div>

                <div className="card mx-6 w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-5xl border-b-2 py-3 font-bold'>05</h1>
                        <h2 className="card-title">Realiza el deposito a cualquiera de nuestras cuentas bancarias.</h2>
                        
                        
                    </div>
                </div>

                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="text-4xl flex items-center justify-center py-3 font-bold">¿Tienes Dudas?</h2>
                        <p>Atendemos las 24 horas via WhatsApp</p>
                        <div className="card-actions justify-end">
                        <a className="btn bg-[#25D366] text-black" target='_blank' href="https://api.whatsapp.com/send?phone=51935291169">Contáctanos</a>
                        </div>
                    </div>
                </div>
            </div>
        
    </motion.div>
  )
}

export default Procedimiento