import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaUserAlt,
  FaIdCardAlt,
  FaRegMoon,
  FaRegLightbulb,
  FaStar,
} from 'react-icons/fa';
import NavItems from '../NavItems';
import { useTheme } from '../hooks/useTheme';

export default function Sidebar({ renderSiderbar }) {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="w-full h-full flex flex-col justify-center items-end z-40 bg-gray-100 dark:bg-slate-900 duration-150 fixed left-0 top-0 animate-showSidebar">
      <FaTimes onClick={renderSiderbar} size={20} className="h-16 mr-5 mt-2" />
      <div className="w-full h-full flex flex-col space-y-12 mt-16 items-center">
        <NavItems Icon={FaHome} renderSiderbar={renderSiderbar} offset={-100}>Inicio</NavItems>
        <NavItems Icon={FaUserAlt} renderSiderbar={renderSiderbar}>Sobre</NavItems>
        <NavItems Icon={FaStar} renderSiderbar={renderSiderbar}>Habilidades</NavItems>
        <NavItems Icon={FaIdCardAlt} renderSiderbar={renderSiderbar}>Projetos</NavItems>
        <NavItems Icon={FaEnvelope} renderSiderbar={renderSiderbar}>Contatos</NavItems>
        {theme === 'light' ? (
          <FaRegMoon
            size={23}
            className="cursor-pointer text-blue-500"
            onClick={() => setTheme('dark')}
          />
        ) : (
          <FaRegLightbulb
            size={23}
            className="cursor-pointer text-blue-500"
            onClick={() => setTheme('light')}
          />
        )}
      </div>
    </nav>
  );
}
