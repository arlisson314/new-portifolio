import { RxGithubLogo, RxLinkedinLogo, RxDownload } from 'react-icons/rx';

import hand from '../../images/hand.png';
import useBackground from '../hooks/useBackground';
import fileUrl from '../../images/curriculo.pdf';
import './style.css';

export default function Home() {
  const bgColor = useBackground();
  const linkdin = 'https://www.linkedin.com/skill-assessments/Desenvolvimento%20de%20front-end/quiz-intro/';
  const gitHub = 'https://github.com/arlisson314';

  return (
    <div id="Inicio" className="flex flex-col-reverse w-full h-screen items-center mt-16 pt-2 space-x-4 sm:flex-row sm:justify-center sm:mt-0">
      <main className="w-full px-4 h-2/3 flex flex-col justify-center items-start space-y-5 sm:w-3/6">
        <h1 className="flex text-3xl justify-center w-auto lg:w-auto items-center font-bold text-slate-950 dark:text-gray-200 mt-2 gap-4">
          Desenvolvedor FullStack
          <img src={hand} alt="hand" className="w-14 h-min animate-bye" />
        </h1>
        <p className="text-slate-950 dark:text-gray-500">
          Olá, sou Arlisson Nascimento. Um desenvolvedor apaixonado por codigo.
          <br />
          Bem-vindo(a) ao meu portfólio! Aqui você encontrará alguns dos meus melhores projetos,
          além de informações sobre minhas habilidades e tecnologias que utilizo.📍
        </p>
        <div className="flex sm:mt-4 space-x-2 text-slate-950 dark:text-gray-500 items-center w-full">
          <a href={gitHub} aria-label="link github" target="_blank" rel="noreferrer"><RxGithubLogo className="text-3xl hover:text-blue-500 transition ease-in-out duration-500" /></a>
          <a href={linkdin} aria-label="link github" target="_blank" rel="noreferrer"><RxLinkedinLogo className="text-3xl hover:text-blue-500 transition ease-in-out duration-500" /></a>
          <a
            href={fileUrl}
            download
            className="w-32 h-[27px]
            rounded-sm font-extrabold
            text-lg bg-slate-950 dark:bg-gray-500 text-gray-200 dark:text-slate-900 flex
            justify-center items-center
             gap-2 hover:bg-blue-500 dark:hover:bg-blue-500 transition ease-in-out duration-500"
          >
            Curriculum
            <RxDownload size={20} className="stroke-1" />
          </a>
        </div>
      </main>
      <div className="w-4/6 h-2/3 flex justify-center items-center sm:w-2/6">
        <div className="perfil dark:border-gray-500" style={{ backgroundColor: bgColor }} />
      </div>

    </div>
  );
}

// 460 640
