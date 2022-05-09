import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 2,
      path: '/',
      text: 'Books',
    },
    {
      id: 3,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <header>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul className="menu">
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path} exact="true">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <span>
        <FaUser />
      </span>
    </header>
  );
};
export default Navbar;
