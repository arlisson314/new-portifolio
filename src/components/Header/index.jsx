import {
  FaBars,
  FaHome,
  FaUserAlt,
  FaIdCardAlt,
  FaEnvelope,
} from 'react-icons/fa';

import { useState } from 'react';
import HeaderItem from '../HeaderItems';
import useSize from '../hooks/UseSize';
import Sidebar from '../SideBar';

export default function Header() {
  const windowSize = useSize();
  const [sidebar, setSidebar] = useState(false);

  const renderSiderbar = () => setSidebar(!sidebar);

  return (
    <header className="flex justify-between items-center h-16 px-4 shadow-md shadow-gray-200 fixed z-10 w-full">
      {sidebar && <Sidebar renderSiderbar={renderSiderbar} />}

      <h3 className="text-2xl font-bold">Arlisson.dev</h3>

      { windowSize ? (
        <nav className="flex w-1/2 justify-around">
          <HeaderItem Icon={FaHome}>Inicio</HeaderItem>
          <HeaderItem Icon={FaUserAlt}>Sobre</HeaderItem>
          <HeaderItem Icon={FaIdCardAlt}>Projetos</HeaderItem>
          <HeaderItem Icon={FaEnvelope}>Contatos</HeaderItem>
        </nav>
      ) : (<FaBars size={25} onClick={renderSiderbar} />)}
    </header>
  );
}
