import {
  FaBars,
  FaHome,
  FaUserAlt,
  FaIdCardAlt,
  FaEnvelope,
} from 'react-icons/fa';

import { useState } from 'react';
import useSize from '../hooks/useSize';
import Sidebar from '../SideBar';
import NavItems from '../NavItems';

export default function Header() {
  const windowSize = useSize();

  const [sidebar, setSidebar] = useState(false);

  const renderSiderbar = () => setSidebar(!sidebar);

  return (
    <header className="flex justify-between items-center h-16 px-4 shadow-md shadow-gray-200 z-10 w-full fixed">
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
