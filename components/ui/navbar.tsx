'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">
            C3J
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/ver-juegos">Ver Juegos</Link>
          <Link href="/acerca-de">Acerca de</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <button className="text-white">ES</button>
          <button className="text-white">Login</button>
          <button className="text-white">Sign up</button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/ver-juegos"><span className="block px-2 py-1">Ver Juegos</span></Link>
          <Link href="/acerca-de"><span className="block px-2 py-1">Acerca de</span></Link>
          <button className="block px-2 py-1">ES</button>
          <button className="block px-2 py-1">Login</button>
          <button className="block px-2 py-1">Sign up</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
