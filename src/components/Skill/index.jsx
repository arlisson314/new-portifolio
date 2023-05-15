import SkillsItems from '../SkillsItems';
import { skillsMock, toolsMock, otherKnowledgeMock } from '../../MockProjects/tecnologias';

export default function Skill() {
  return (
    <main className="w-full h-auto mt-20 flex flex-col text-center mx-auto justify-center items-center">
      <h3 className="text-blue-500 font-semibold">Habilidades</h3>
      <h2 className="font-semibold text-lg text-slate-950 dark:text-gray-200 w-10/12 text-start sm:text-center">
        Algumas tecnologias que utilizo em meus projetos
      </h2>
      <section className="w-full space-y-4 mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:space-y-0 sm:gap-y-4 pt-5">

        <div className="flex justify-start flex-col gap-4">
          <h3 className="text-blue-500 font-semibold">Ferramentas</h3>
          <div className="h-auto w-9/12 mx-auto flex flex-row flex-wrap justify-start gap-2">
            {toolsMock.map(({
              linkHref, textLength, textXPosition, name, width, shapeRenderingWidth,
            }) => (
              <SkillsItems
                key={name}
                linkHref={linkHref}
                textLength={textLength}
                textXPosition={textXPosition}
                width={width}
                name={name}
                shapeRenderingWidth={shapeRenderingWidth}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-start flex-col gap-4">
          <h3 className="text-blue-500 font-semibold">Tecnologias</h3>
          <div className="h-auto w-9/12 mx-auto flex flex-row flex-wrap justify-start gap-2">
            {skillsMock.map(({
              linkHref, textLength, textXPosition, name, width, shapeRenderingWidth,
            }) => (
              <SkillsItems
                key={name}
                linkHref={linkHref}
                textLength={textLength}
                textXPosition={textXPosition}
                width={width}
                name={name}
                shapeRenderingWidth={shapeRenderingWidth}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-start flex-col gap-4">
          <h3 className="text-blue-500 font-semibold">Outros Conhecimentos</h3>
          <div className="h-auto w-9/12 mx-auto flex flex-row flex-wrap justify-start gap-2">
            {otherKnowledgeMock.map(({
              linkHref, textLength, textXPosition, name, width, shapeRenderingWidth,
            }) => (
              <SkillsItems
                key={name}
                linkHref={linkHref}
                textLength={textLength}
                textXPosition={textXPosition}
                width={width}
                name={name}
                shapeRenderingWidth={shapeRenderingWidth}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
