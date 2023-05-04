import {
  // FaBars,
  FaHome,
  FaUserAlt,
  FaIdCardAlt,
  FaEnvelope,
} from 'react-icons/fa';
import HeaderItem from '../HeaderItems';

export default function Header() {
  return (
    <header>
      <h3 className="text-red-400">Arlisson.dev</h3>
      <nav>
        <HeaderItem Icon={FaHome}>Home</HeaderItem>
        <HeaderItem Icon={FaUserAlt}>About</HeaderItem>
        <HeaderItem Icon={FaIdCardAlt}>Projects</HeaderItem>
        <HeaderItem Icon={FaEnvelope}>Contact</HeaderItem>
      </nav>
    </header>
  );
}
