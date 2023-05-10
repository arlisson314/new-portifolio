import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';

import hand from '../../images/hand.png';
import './style.css';

const linkdin = 'https://www.linkedin.com/skill-assessments/Desenvolvimento%20de%20front-end/quiz-intro/';
const gitHub = 'https://github.com/arlisson314';

export default function Home() {
  return (
    <div id="Inicio" className="flex flex-col-reverse w-full h-[calc(100vh_-_64px)] items-center mt-20 space-x-4 sm:flex-row sm:justify-center sm:mt-0">
      <main className="w-full px-4 h-2/3 flex flex-col justify-center items-center space-y-10 sm:w-3/6">
        <h1 className="flex text-5xl justify-center items-center w-min font-bold">
          FullStack Developer
          <img src={hand} alt="hand" className="w-14 h-min ml-3 mt-10" />
        </h1>
        <p>
          Olá, sou Arlisson Nascimento. Um desenvolvedor apaixonado por codigo.📍
          <span className="flex mt-2 sm:mt-4 space-x-2">
            <a href={gitHub} aria-label="link github" target="_blank" rel="noreferrer"><RxGithubLogo className="text-2xl hover:text-blue-500" /></a>
            <a href={linkdin} aria-label="link github" target="_blank" rel="noreferrer"><RxLinkedinLogo className="text-2xl hover:text-blue-500" /></a>
          </span>
        </p>
      </main>
      <div className="w-4/6 h-2/3 flex justify-center items-center sm:w-2/6">
        <div className="perfil" />
      </div>

    </div>
  );
}
