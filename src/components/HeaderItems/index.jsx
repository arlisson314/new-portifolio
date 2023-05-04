import React from 'react';
import { Link } from 'react-scroll';

export default function HeaderItem({ Icon, children }) {
  return (
    <Link
      to={children}
      spy
      smooth
      offset={0}
      duration={500}
    >
      <Icon />
      <p>{children}</p>
    </Link>
  );
}
