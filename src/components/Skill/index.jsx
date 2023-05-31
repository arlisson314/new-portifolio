import SkillsItems from '../SkillsItems';
import { skillsMock, toolsMock, otherKnowledgeMock } from '../../MockProjects/tecnologias';

export default function Skill() {
  return (
    <main id="Habilidades" className="w-full h-auto sm:h-screen mt-20 pt-20 flex flex-col text-center justify-center items-center">
      <h3 className="text-blue-500 font-semibold">Habilidades</h3>
      <h2 className="font-semibold text-lg text-slate-950 dark:text-gray-200 w-10/12 text-start sm:text-center">
        Algumas tecnologias que utilizo em meus projetos
      </h2>
      <section className=" w-full h-5/6 space-y-4 mx-auto pt-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:space-y-0 sm:gap-y-4 lg:items-start lg:mt-10">
        <SkillsItems list={toolsMock}>Ferramentas</SkillsItems>
        <SkillsItems list={skillsMock}>Tecnologias</SkillsItems>
        <SkillsItems list={otherKnowledgeMock}>Outros Conhecimentos</SkillsItems>
      </section>
    </main>
  );
}
