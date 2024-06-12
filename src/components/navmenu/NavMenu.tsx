import clsx from 'clsx';
import React from 'react';
import useToggle from '~/hooks/useToggle';
import { NavMenuItems } from './NavMenuItems';

export interface NavMenuProps {
  navItems: Array<{ name: string; link: string }>;
  mobileMenuRootId: string;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  navItems,
  mobileMenuRootId,
}) => {
  const [isMenuOpened, toggleMenu]: [boolean, () => void] = useToggle();
  return (
    <div>
      <button
        type="button"
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 mr-4 rounded-md text-primaryCol2 hover:text-primaryCol3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryCol2 aria-expanded='false'"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className={clsx(isMenuOpened ? 'hidden' : 'block', 'h-6', 'w-6')}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          className={clsx(
            isMenuOpened ? 'block' : 'hidden',
            'h-6',
            'w-6',
            'max-h-6'
          )}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {isMenuOpened && (
        <NavMenuItems navItems={navItems} mobileMenuRootId={mobileMenuRootId} />
      )}
    </div>
  );
};
