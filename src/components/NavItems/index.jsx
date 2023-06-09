import React from 'react';
import { Link } from 'react-scroll';

export default function NavItems({
  Icon, children, renderSiderbar, offset,
}) {
  return (
    <Link
      to={children}
      spy
      smooth
      offset={offset ?? 0}
      duration={500}
      onClick={renderSiderbar && renderSiderbar}
      className="flex justify-center items-center space-x-1 cursor-pointer text-lg hover:text-blue-500 transition ease-in-out duration-500 text-slate-950 dark:text-gray-200 dark:hover:text-blue-500"
    >
      <Icon />
      <p>{children}</p>
    </Link>
  );
}
