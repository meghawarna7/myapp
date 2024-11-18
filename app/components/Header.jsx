import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <header className="bg-white py-3">
      <div className="mx-auto flex h-16 shadow-sm max-w-screen-xl items-center gap-8 px-2 py-1 sm:px-6 lg:px-8">
        {/* Responsive Logo using Next.js Image component */}
        <div className="w-[70px] sm:w-[90px] h-auto">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={90}
            height={80}
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-lg">
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Explore </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About US </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact US </a>
          </li>


        </ul>
      </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sec"
                href="#"
              >
                Login
              </a>
              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primary sm:block"
                href="#"
              >
                Register
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
