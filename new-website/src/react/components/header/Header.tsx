import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NavMenu } from '../navmenu/NavMenu';
import { routes, getByName } from '~/react/routes/routes';
import { twMerge } from 'tailwind-merge';
import swiftInvention from '~/assets/images/swift-white-logo.svg';

export interface HeaderProps {
  navItems: Array<{ name: string; link: string; isInHeaderButton?: boolean }>;
}

export const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (link: string) => location.pathname === link;

  const handleWorkWithUs = () => {
    navigate('/feedback');
  };

  return (
    <nav className="bg-secondaryCol5">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center justify-between h-18">
          <div className="flex-shrink-0 pl-5 md:pl-18">
            <Link to={getByName(routes, 'Home').link}>
              <img
                className="cursor-pointer"
                src={swiftInvention.src}
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
                  <div
                    className={twMerge(
                      'group py-2 px-3 opacity-60 hover:opacity-100 cursor-pointer	rounded-md hover:transition-all duration-200',
                      isActive(value.link) && 'opacity-100'
                    )}
                  >
                    <div
                      className={twMerge(
                        'group-hover:opacity-100 uppercase text-primaryCol2 font-inter font-bold text-sm -mb-1 whitespace-nowrap hover:transition-all duration-200',
                        isActive(value.link) && 'opacity-100'
                      )}
                    >
                      {value.name}
                    </div>
                  </div>
                </Link>
              );
            })}
            <div>
              <button
                type="button"
                onClick={handleWorkWithUs}
                className="flex bg-primaryCol2 text-secondaryCol5 hover:text-primaryCol1 uppercase text-sm font-bold h-10 lg:ml-5 pt-1 px-5 rounded-md items-center border-none"
              >
                Work with Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-menu-portal" />
    </nav>
  );
};
