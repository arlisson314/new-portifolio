import hand from '../images/hand.png';
import './style.css';

export default function Home() {
  return (
    <div id="Inicio" className="flex flex-col-reverse lg:flex-row md:justify-around  w-full h-[calc(100vh_-_64px)] items-center pt-20">
      <main className="w-5/6 h-2/3 flex flex-col justify-center items-center space-y-10 mt-4">
        <h1 className="flex text-5xl">
          FullStack Developer
          <img src={hand} alt="hand" className="w-14 h-14 ml-1" />
        </h1>
        <p>
          Olá, sou Arlisson Nascimetno. Um desenvolvedor apaixonado por codigo.📍
        </p>
      </main>
      <div className="w-4/6 h-5/6 md:w-2/3 flex justify-center items-center">
        <div className="perfil" />
      </div>
    </div>
  );
}
