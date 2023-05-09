import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaUserAlt,
  FaIdCardAlt,
} from 'react-icons/fa';
import NavItems from '../NavItems';

export default function Sidebar({ renderSiderbar }) {
  return (
    <nav className="w-full h-full flex flex-col justify-center items-end z-40 bg-white fixed left-0 top-0 animate-showSidebar">
      <FaTimes onClick={renderSiderbar} size={20} className="h-16 mr-5 mt-2" />
      <div className="w-full h-full flex flex-col space-y-12 mt-16 items-center">
        <NavItems Icon={FaHome} renderSiderbar={renderSiderbar}>Inicio</NavItems>
        <NavItems Icon={FaUserAlt} renderSiderbar={renderSiderbar}>Sobre</NavItems>
        <NavItems Icon={FaIdCardAlt} renderSiderbar={renderSiderbar}>Projetos</NavItems>
        <NavItems Icon={FaEnvelope} renderSiderbar={renderSiderbar}>Contatos</NavItems>
      </div>
    </nav>
  );
}
