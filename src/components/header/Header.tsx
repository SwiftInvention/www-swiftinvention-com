import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import swiftWhiteLogo from '~/assets/images/swift-white-logo.png';
import { NavMenu } from '../navmenu/NavMenu';
import { routes, getByName } from '~/routes/routes';

export interface HeaderProps {
  navItems: Array<{ name: string; link: string }>;
}

export const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const location = useLocation();
  const isActive = (link: string) => location.pathname === link;

  return (
    <nav className="bg-secondaryCol5">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center justify-between h-18">
          <div className="flex-shrink-0 pl-5 md:pl-18">
            <Link to={getByName(routes, 'Home').link}>
              <img
                className="cursor-pointer"
                src={swiftWhiteLogo}
                alt="Swift Invention Logo"
              />
            </Link>
          </div>
          <div className="lg:hidden">
            <NavMenu
              navItems={navItems}
              mobileMenuRootId="mobile-menu-portal"
            />
          </div>
          <div className="hidden lg:flex items-center content-center justify-end lg:flex-1 lg:space-x-2 lg:mr-14">
            {navItems.map((value) => {
              return (
                <Link to={value.link} key={value.name}>
                  <div className="group py-2 px-3 hover:bg-primaryCol2 cursor-pointer	">
                    <div
                      className={clsx(
                        isActive(value.link) && 'border-b',
                        'group-hover:text-secondaryCol5 uppercase text-primaryCol2 font-sans font-medium text-sm -mb-1 whitespace-nowrap'
                      )}
                    >
                      {value.name}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div id="mobile-menu-portal" />
    </nav>
  );
};
