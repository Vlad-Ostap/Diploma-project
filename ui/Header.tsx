'use client'

import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import AccountMenu from "./AccountMenu";
import { useState } from "react";
import { navLinks } from "@/app/(main-pages)/data/data";

export default function Header() {
  const [isVisibleBurger, setIsVisibleBurger] = useState(false);
  const [isVisibleAccount, setIsVisibleAccount] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <nav className="header__nav">
          <button className={`header__burger__button ${isVisibleBurger ? 'active' : ''}`} onClick={() => setIsVisibleBurger(!isVisibleBurger)}>
            <span className="before"></span>
            <span className="middle"></span>
            <span className="after"></span>
          </button>
          <BurgerMenu isVisibleBurger={isVisibleBurger} />
          <div className="header__links">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="header__link">
                {label}
              </Link>
            ))}
          </div>
        </nav>
        <div className="account__menu__container">
          <button className="account__button" onClick={() => setIsVisibleAccount(!isVisibleAccount)}>
            <Image src="/account.svg" alt="account image" height={25} width={25} />
          </button>
          <AccountMenu isVisibleAccount={isVisibleAccount} />
        </div>
      </div>
    </header>
  );
}