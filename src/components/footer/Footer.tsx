import React from 'react';
import { Link } from 'react-router-dom';
import swiftWhiteLogo from '~/assets/images/swift-white-logo.png';

export interface FooterProps {
  navItems: Array<{ name: string; link: string }>;
}

export const Footer: React.FC<FooterProps> = ({ navItems }) => {
  return (
    <div className="relative h-37 bg-primaryCol1 max-w-8xl border-t border-secondaryCol3 flex flex-row justify-start items-center">
      <div className="pl-30 w-full">
        <div className="h-4">
          <img
            className="cursor-pointer"
            src={swiftWhiteLogo}
            alt="Swift Invention Logo"
          />
        </div>
        <div className="text-primaryCol2 text-xs font-sans font-medium pt-6">
          <div className="flex flex-row justify-between">
            <p>© 2023 Swift Invention, Inc.</p>
            <div className="hidden md:block primaryCol2space-nowrap space-x-5 md:mr-4 lg:mr-14">
              {navItems.map((value) => {
                return (
                  <Link to={value.link} key={value.name}>
                    <div className="inline group py-2 px-3 hover:bg-primaryCol2 cursor-pointer">
                      <div className="inline group-hover:text-secondaryCol5 uppercase whitespace-nowrap">
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
