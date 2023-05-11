import React from 'react';
import { FaMapMarkedAlt, FaEnvelopeOpenText, FaWhatsappSquare } from 'react-icons/fa';

export default function Contact() {
  return (
    <div id="Contatos" className="w-full h-auto mt-5 text-center py-4 bg-slate-950 text-slate-400">
      <h3 className="text-blue-600 font-semibold">Contato</h3>
      <h2 className="font-semibold text-lg">Me mande uma mensagem!</h2>

      <div className="flex flex-col justify-center items-center w-1/2 mx-auto space-y-2 lg:flex-row lg:space-y-0 lg:space-x-3">
        <div className="flex items-center justify-start w-52 space-x-2">
          <FaMapMarkedAlt size={30} />
          <div className="flex flex-col text-justify">
            <span className="text-blue-600 font-semibold">loalização</span>
            <span>São Luis - Ma</span>
          </div>
        </div>
        <div className="flex items-center justify-start w-52 space-x-2">
          <FaEnvelopeOpenText size={30} />
          <div className="flex flex-col text-justify">
            <span className="text-blue-600 font-semibold">email</span>
            <span>arlisson314@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center justify-start w-52 space-x-2">
          <FaWhatsappSquare size={30} />
          <div className="flex flex-col text-justify">
            <span className="text-blue-600 font-semibold">waths app</span>
            <span>(98) 991236814</span>
          </div>
        </div>
      </div>
    </div>
  );
}
