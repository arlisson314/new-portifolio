import React from 'react';
import { FaMapMarkedAlt, FaEnvelopeOpenText, FaWhatsappSquare } from 'react-icons/fa';

export default function Contact() {
  return (
    <div id="Contatos" className="w-full h-auto mt-5 text-center py-4 bg-slate-950 text-slate-400">
      <h3 className="text-blue-600 font-semibold">Contato</h3>
      <h2 className="font-semibold text-lg text-gray-200">Me mande uma mensagem!</h2>

      <div className="flex flex-col justify-center items-center w-2/3 mx-auto space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6">
        <div className="flex items-center justify-start w-52 space-x-2 lg:w-auto">
          <FaMapMarkedAlt size={30} className="text-blue-400" />
          <div className="flex flex-col text-justify">
            <span className="text-blue-600 font-semibold">localização</span>
            <span className="text-gray-200">São Luis - Ma</span>
          </div>
        </div>
        <div className="flex items-center justify-start w-52 space-x-2 lg:w-auto">
          <FaEnvelopeOpenText size={30} className="text-red-400" />
          <div className="flex flex-col text-justify">
            <span className="text-blue-600 font-semibold">email</span>
            <span className="text-gray-200">arlisson314@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center justify-start w-52 space-x-2 lg:w-auto">
          <FaWhatsappSquare size={32} className="mt-2 text-green-400" />
          <div className="flex flex-col text-justify">
            <span className="text-blue-600 font-semibold">whatsapp</span>
            <span className="text-gray-200">(98) 991236814</span>
          </div>
        </div>
      </div>
    </div>
  );
}
