import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';

import hand from '../../images/hand.png';
import useBackground from '../hooks/useBackground';
import './style.css';

export default function Home() {
  const bgColor = useBackground();
  const linkdin = 'https://www.linkedin.com/skill-assessments/Desenvolvimento%20de%20front-end/quiz-intro/';
  const gitHub = 'https://github.com/arlisson314';

  return (
    <div id="Inicio" className="flex flex-col-reverse w-full h-auto sm:h-[calc(100vh_-_64px)] items-center mt-16 pt-2 space-x-4 sm:flex-row sm:justify-center sm:mt-0">
      <main className="w-full px-4 h-2/3 flex flex-col justify-center items-center space-y-5 sm:w-3/6">
        <h1 className="flex text-5xl justify-center items-center w-min font-bold text-slate-950 dark:text-gray-200 mt-2">
          FullStack Developer
          <img src={hand} alt="hand" className="w-14 h-min ml-3 mt-10" />
        </h1>
        <p className="text-slate-950 dark:text-gray-500">
          Olá, sou Arlisson Nascimento. Um desenvolvedor apaixonado por codigo.
          <br />
          Bem-vindo ao meu portfólio! Aqui você encontrará alguns dos meus melhores projetos,
          além de informações sobre minhas habilidades e tecnologias que utilizo.📍
          <span className="flex mt-2 sm:mt-4 space-x-2">
            <a href={gitHub} aria-label="link github" target="_blank" rel="noreferrer"><RxGithubLogo className="text-2xl hover:text-blue-500 transition ease-in-out duration-500" /></a>
            <a href={linkdin} aria-label="link github" target="_blank" rel="noreferrer"><RxLinkedinLogo className="text-2xl hover:text-blue-500 transition ease-in-out duration-500" /></a>
          </span>
        </p>
      </main>
      <div className="w-4/6 h-2/3 flex justify-center items-center sm:w-2/6">
        <div className="perfil dark:border-gray-500" style={{ backgroundColor: bgColor }} />
      </div>

    </div>
  );
}
