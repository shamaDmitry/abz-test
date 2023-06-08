import React from 'react';
import Button from '../Shared/Button';
import logo from './../../assets/logo.svg'

const Menu = () => {
  return (
    <div className="bg-white">
      <nav className="container lg:px-[60px] md:px-[32px] sm:px-[16px] px-4 flex items-center h-[60px] gap-4">
        <a href="/" className="c-logo flex h-full w-[104px] flex-shrink-0">
          <img src={logo} alt="logo" />
        </a>

        <div className="ml-auto flex items-center gap-[10px]">
          <Button
            type="yellow"
          >
            Users
          </Button>

          <Button
            type="yellow"
          >
            Sign up
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Menu;

