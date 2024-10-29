import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import swiftWhiteLogo from '~/assets/images/swift-white-logo.svg';
import { twMerge } from 'tailwind-merge';

export interface FooterProps {
  navItems: Array<{ name: string; link: string }>;
}

export const Footer: React.FC<FooterProps> = ({ navItems }) => {
  const location = useLocation();
  const isActive = (link: string) => location.pathname === link;

  return (
    <div className="relative h-37 bg-primaryCol1 max-w-8xl border-t border-secondaryCol3 flex flex-row justify-start items-center">
      <div className="pl-5 md:pl-18 lg:pl-30 w-full">
        <div className="h-4">
          <img
            className="cursor-pointer"
            src={swiftWhiteLogo}
            alt="Swift Invention Logo"
          />
        </div>
        <div className="text-primaryCol2 text-xs font-sans font-medium pt-6">
          <div className="flex flex-row justify-between">
            <p>© {new Date().getFullYear()} Swift Invention, Inc.</p>
            <div className="hidden lg:block primaryCol2space-nowrap space-x-5 md:mr-4 lg:mr-14">
              {navItems.map((value) => {
                return (
                  <Link to={value.link} key={value.name}>
                    <div
                      className={twMerge(
                        'inline group py-2 px-3 opacity-60 hover:opacity-100 cursor-pointer	rounded-md hover:transition-all duration-200',
                        isActive(value.link) && 'opacity-100'
                      )}
                    >
                      <div
                        className={twMerge(
                          'inline group-hover:opacity-100 uppercase text-primaryCol2 font-inter font-bold text-sm -mb-1 whitespace-nowrap hover:transition-all duration-200',
                          isActive(value.link) && 'opacity-100'
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
      </div>
    </div>
  );
};
