import {
  FaBars,
  FaHome,
  FaUserAlt,
  FaIdCardAlt,
  FaEnvelope,
  FaRegMoon,
  FaRegLightbulb,
  FaStar,
} from 'react-icons/fa';

import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Sidebar from '../SideBar';
import NavItems from '../NavItems';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const windowSize = useWindowSize();
  const [sidebar, setSidebar] = useState(false);
  const renderSiderbar = () => setSidebar(!sidebar);
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between bg-gray-100 dark:bg-slate-950 dark:text-gray-200 border-b-2 dark:border-b-0 items-center h-16 px-4 z-10 w-full fixed top-0">
      {sidebar && <Sidebar renderSiderbar={renderSiderbar} />}

      <h3 className="text-2xl font-bold">Arlisson.dev</h3>

      { windowSize ? (
        <nav className="flex w-2/3 justify-around">
          <NavItems Icon={FaHome}>Inicio</NavItems>
          <NavItems Icon={FaUserAlt}>Sobre</NavItems>
          <NavItems Icon={FaStar}>Habilidades</NavItems>
          <NavItems Icon={FaIdCardAlt}>Projetos</NavItems>
          <NavItems Icon={FaEnvelope}>Contatos</NavItems>
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
        </nav>
      ) : (<FaBars size={25} onClick={renderSiderbar} />)}
    </header>
  );
}
