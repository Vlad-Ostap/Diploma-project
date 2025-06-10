import Link from "next/link";
import { navLinks } from "@/app/(main-pages)/data/data";

interface BurgerMenuProps {
    isVisibleBurger: boolean;
}

export default function BurgerMenu({ isVisibleBurger }: BurgerMenuProps) {
    return (
        <div className={`burger__menu ${isVisibleBurger ? 'visible' : 'hidden'}`} >
            <div className="header__links">
                {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href} className="header__link">
                        {label}
                    </Link>
                ))}
            </div>
        </div>
    )
}