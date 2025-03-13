import React from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { usePortal } from '~/react/hooks/usePortal';

export interface NavMenuItemsProps {
  navItems: Array<{ name: string; link: string }>;
  mobileMenuRootId: string;
}

export const NavMenuItems: React.FC<NavMenuItemsProps> = ({
  navItems,
  mobileMenuRootId,
}) => {
  const node = usePortal(mobileMenuRootId);
  const menuItems = (
    <div className="pl-5 md:pl-18 pt-2 pb-3 space-y-1 lg:hidden">
      {navItems.map((value) => {
        return (
          <Link
            to={value.link}
            className="text-primaryCol2 block px-3 py-2 rounded-md text-base font-medium font-sans"
            key={value.name}
          >
            {value.name}
          </Link>
        );
      })}
    </div>
  );
  return createPortal(menuItems, node);
};
