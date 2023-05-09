import React from 'react';
import { Link } from 'react-scroll';

export default function NavItems({ Icon, children, renderSiderbar }) {
  return (
    <Link
      to={children}
      spy
      smooth
      offset={-100}
      duration={500}
      onClick={renderSiderbar && renderSiderbar}
      className="flex justify-center items-center space-x-1 cursor-pointer text-lg hover:text-blue-400"
    >
      <Icon />
      <p>{children}</p>
    </Link>
  );
}
