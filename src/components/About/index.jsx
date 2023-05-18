import developer from '../../images/perfil/developer.png';

export default function About() {
  return (
    <div id="Sobre" className="w-full h-screen mt-20 flex flex-col items-ceter sm:flex-row sm:items-center sm:justify-center sm:space-x-20 sm:mt-0 sm:pb-24">
      <img src={developer} alt="imagem pessoa programdora" className="w-64 h-56 mx-auto rounded-md sm:w-80 sm:h-64 sm:mx-0" />
      <div className="w-4/5 h-2/5 mt-4 text-left mx-auto sm:w-1/3 sm:mx-0 sm:h-2/5 sm:flex sm:flex-col sm:justify-center sm:mt-0">
        <h3 className="text-blue-500 font-semibold">Sobre mim</h3>
        <h2 className="font-semibold text-lg text-slate-950 dark:text-gray-200">Desenvolvedor Full Stack formado pela escola Trybe.</h2>
        <p className="text-justify text-slate-950 dark:text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Expedita, velit sint odio et error atque facere sapiente
          facilis quod dolorem nesciunt laudantium minus quae non quidem cum officia.
          Sint, reiciendis?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Expedita, velit sint odio et error atque facere sapiente
          facilis quod dolorem nesciunt laudantium minus quae non quidem cum officia.
        </p>
      </div>
    </div>
  );
}
