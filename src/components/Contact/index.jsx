import React from 'react';
import { FaMapMarkedAlt, FaEnvelopeOpenText, FaWhatsappSquare } from 'react-icons/fa';

export default function Contact() {
  return (
    <div id="Contatos" className="w-full h-auto mt-5 text-center py-4 bg-slate-950 text-slate-400">
      <h3 className="text-blue-600 font-semibold">Contato</h3>
      <h2 className="font-semibold text-lg">Me mande uma mensagem!</h2>

      <div className="flex flex-col justify-center items-center w-2/3 mx-auto space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6">
        <div className="flex items-center justify-start w-52 space-x-2 lg:w-auto">
          <FaMapMarkedAlt size={30} />
          <div className="flex flex-col text-justify">
            <span className="text-blue-600 font-semibold">loalização</span>
            <span>São Luis - Ma</span>
          </div>
        </div>
        <div className="flex items-center justify-start w-52 space-x-2 lg:w-auto">
          <FaEnvelopeOpenText size={30} />
          <div className="flex flex-col text-justify">
            <span className="text-blue-600 font-semibold">email</span>
            <span>arlisson314@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center justify-start w-52 space-x-2 lg:w-auto">
          <FaWhatsappSquare size={32} className="mt-2" />
          <div className="flex flex-col text-justify">
            <span className="text-blue-600 font-semibold">waths app</span>
            <span>(98) 991236814</span>
          </div>
        </div>
      </div>
    </div>
  );
}
