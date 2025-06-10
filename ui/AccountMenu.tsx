'use client'

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

interface AccountMenuProps {
    isVisibleAccount: boolean
}

export default function AccountMenu({ isVisibleAccount }: AccountMenuProps) {
    const { data: session, status } = useSession();
    const isAdmin = session?.user?.role === 'admin';

    return status === 'authenticated' ? (
        <nav className={`account__menu ${isVisibleAccount ? 'visible' : 'hidden'}`}>
            {isAdmin && (
                <Link href="/admin/rooms" className="account__menu__link">Rooms admin panel</Link>
            )}
            <Link href="/reservations" className="account__menu__link">Reservations</Link>
            <Link href="/wishlist" className="account__menu__link">Favorites</Link>
            <button className="account__menu__link" onClick={() => signOut({ callbackUrl: '/login' })}>Logout</button>
        </nav>
    ) : (
        <nav className={`account__menu ${isVisibleAccount ? 'visible' : 'hidden'}`}>
            <Link href="/login" className="account__menu__link">Login</Link>
            <Link href="/registration" className="account__menu__link">Registration</Link>
        </nav>
    )
}