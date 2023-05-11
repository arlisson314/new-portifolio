import {
  FaBars,
  FaHome,
  FaUserAlt,
  FaIdCardAlt,
  FaEnvelope,
} from 'react-icons/fa';

import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Sidebar from '../SideBar';
import NavItems from '../NavItems';

export default function Header() {
  const windowSize = useWindowSize();

  const [sidebar, setSidebar] = useState(false);

  const renderSiderbar = () => setSidebar(!sidebar);

  return (
    <header className="flex justify-between bg-gray-100 dark:bg-slate-950 dark:text-gray-200 items-center h-16 px-4 shadow-md z-10 w-full fixed top-0">
      {sidebar && <Sidebar renderSiderbar={renderSiderbar} />}

      <h3 className="text-2xl font-bold">Arlisson.dev</h3>

      { windowSize ? (
        <nav className="flex w-1/2 justify-around">
          <NavItems Icon={FaHome}>Inicio</NavItems>
          <NavItems Icon={FaUserAlt}>Sobre</NavItems>
          <NavItems Icon={FaIdCardAlt}>Projetos</NavItems>
          <NavItems Icon={FaEnvelope}>Contatos</NavItems>
        </nav>
      ) : (<FaBars size={25} onClick={renderSiderbar} />)}
    </header>
  );
}
