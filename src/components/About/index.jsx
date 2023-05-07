import developer from '../images/perfil/developer.png';

export default function About() {
  return (
    <div id="Sobre" className="w-full h-[calc(100vh_-_64px)] mt-20 flex flex-col items-ceter sm:flex-row sm:items-center sm:justify-center sm:space-x-4">
      <img src={developer} alt="imagem pessoa programdora" className="w-60 h-60 mx-auto rounded-md sm:w-80 sm:h-72 sm:mx-0" />
      <div className="w-4/5 h-2/5 mt-4 text-left mx-auto sm:w-1/3 sm:mx-0 sm:h-2/5 sm:flex sm:flex-col sm:justify-center sm:mt-0">
        <h3 className="text-blue-400 font-semibold">Sobre mim</h3>
        <h2 className="font-semibold text-lg">Desenvolvedor Full Stack formado pela escola Trybe.</h2>
        <p className="text-justify">
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
