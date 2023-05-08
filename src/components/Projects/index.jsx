import projectList from '../../MockProjects/index';

export default function Projects() {
  return (
    <div id="Projetos" className="w-full h-[calc(100vh_-_64px)] mt-20 flex flex-col items-ceter sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:mt-0">
      <main className="border border-gray-700 w-fullm mx-4 h-auto">
        {projectList.map(({
          name, imagem, descricao, tecnologias, previa, repostirio,
        }) => (
          <div key={name} className="flex justify-center flex-col">
            <img src={imagem} alt="thumb projeto" className="w-full h-40" />
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
