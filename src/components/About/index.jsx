/* eslint-disable max-len */
import developer from '../../images/perfil/developer.png';

export default function About() {
  return (
    <div id="Sobre" className="w-full h-auto sm:h-screen mt-20 pt-20 flex flex-col items-ceter sm:flex-row sm:items-center sm:justify-center sm:space-x-20 sm:mt-0 sm:pb-24">
      <img src={developer} alt="imagem pessoa programdora" className="w-64 h-56 mx-auto rounded-md sm:w-80 sm:h-64 sm:mx-0" />
      <div className="w-4/5 h-2/5 mt-4 text-left mx-auto sm:w-1/3 sm:mx-0 sm:h-2/5 sm:flex sm:flex-col sm:justify-center sm:mt-0">
        <h3 className="text-blue-500 font-semibold">Sobre mim</h3>
        <h2 className="font-semibold text-lg text-slate-950 dark:text-gray-200">Desenvolvedor web formado pela escola Trybe.</h2>
        <p className="text-justify text-slate-950 dark:text-gray-500">
          Como desenvolvedor júnior, possuo um impressionante arsenal de habilidades em HTML, CSS, JavaScript, TypeScript, React, Tailwind e SCSS. Também possuo conhecimento de APIs no padrão REST e RESTful, além de experiência com ferramentas de metodologias ágeis como Scrum e Kanban. Sou excelente em projetar e manter sites responsivos que oferecem uma experiência de usuário tranquila. Minha experiência reside na criação de interfaces dinâmicas e envolventes por meio da escrita de código limpo e otimizado, além da utilização de ferramentas e técnicas de desenvolvimento de ponta. Também tenho experiência em trabalhar e colaborar com equipes multifuncionais para produzir excelentes aplicativos web.
        </p>
      </div>
    </div>
  );
}
