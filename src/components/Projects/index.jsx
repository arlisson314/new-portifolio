import projectList from '../../MockProjects/index';

export default function Projects() {
  return (
    <div id="Projetos" className="w-full h-[calc(100vh_-_64px)] mt-20">

      <main className="w-full h-auto space-y-4 mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:space-y-0 sm:gap-y-4 pt-20">
        {projectList.map(({
          id, name, imagem, descricao, tecnologias, previa, repostirio,
        }) => (
          <div key={id} className="flex justify-center items-center mx-auto flex-col w-[320px] h-auto sm:w-[340px]">
            <img src={imagem} alt="thumb projeto" className="w-full h-60 rounded-lg" />
            <div className="mx-4">
              <h4 className="text-center text-blue-400 font-semibold">{name}</h4>
              <p>{descricao}</p>
              <span>
                Tecnologias:
                {' '}
                <strong>{tecnologias.join(' | ')}</strong>
              </span>
            </div>
            <span className="w-full h-10 flex justify-center space-x-2 my-4">
              <a href={previa} aria-label="link github" target="_blank" rel="noreferrer" className="w-20 border h-8 rounded-md font-semibold text-gray-600 bg-blue-300 flex justify-center items-center">Previa</a>
              <a href={repostirio} aria-label="link github" target="_blank" rel="noreferrer" className="w-24 border h-8 rounded-md font-semibold text-gray-600 bg-blue-300 flex justify-center items-center">Repostirio</a>
            </span>
          </div>
        ))}

      </main>
    </div>
  );
}
