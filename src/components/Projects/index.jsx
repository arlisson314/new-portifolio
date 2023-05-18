import { RxGithubLogo, RxExternalLink } from 'react-icons/rx';
import projectList from '../../MockProjects/index';

export default function Projects() {
  return (
    <div id="Projetos" className="w-full h-auto mt-20 flex flex-col items-center">
      <h3 className="text-blue-500 font-semibold">Portifólio</h3>
      <h2 className="font-semibold text-lg dark:text-gray-200">Cada projeto é unico 🧩</h2>
      <main className="w-full space-y-4 mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:space-y-0 sm:gap-y-4 pt-10 items-start">
        {projectList.map(({
          id, name, imagem, descricao, tecnologias, previa, repostirio,
        }) => (
          <div key={id} className="flex justify-center items-center mx-auto flex-col w-[320px] h-auto md:w-[340px]">
            <img src={imagem} alt="thumb projeto" className="w-full h-52 rounded-lg" />
            <div className="mx-4 dark:text-gray-500">
              <h4 className="text-center text-blue-400 font-semibold mt-3">{name}</h4>
              <p>{descricao}</p>
              <span>
                Tecnologias:
                {' '}
                <strong>{tecnologias.join(' | ')}</strong>
              </span>
            </div>
            <span className="w-full h-10 flex justify-center space-x-2 my-4">
              <a href={previa} aria-label="link github" target="_blank" rel="noreferrer" className="w-24 border h-8 rounded-md font-semibold text-gray-600 flex justify-evenly items-center hover:bg-blue-500 hover:text-black transition ease-in-out duration-500">
                Previa
                {' '}
                <RxExternalLink size={20} />
              </a>
              <a href={repostirio} aria-label="link github" target="_blank" rel="noreferrer" className="w-24 border h-8 rounded-md font-semibold text-gray-600 flex justify-evenly items-center hover:bg-blue-500 hover:text-black transition ease-in-out duration-500">
                Codigo
                {' '}
                <RxGithubLogo size={20} />
              </a>
            </span>
          </div>
        ))}

      </main>
    </div>
  );
}
