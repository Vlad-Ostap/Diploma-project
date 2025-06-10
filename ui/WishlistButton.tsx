'use client';

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function WishlistButton({
    room_id,
    inWishlist,
}: {
    room_id: number;
    inWishlist: boolean;
}) {
    const [isInWishlist, setInWishlist] = useState(inWishlist);
    const router = useRouter();
    const { status } = useSession();

    const toggleWishlist = async () => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }

        const res = await fetch('/api/wishlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ room_id }),
        });
        const data = await res.json();
        if (data.status === 'added') setInWishlist(true);
        if (data.status === 'removed') setInWishlist(false);
    };

    return (
        <button className="room-card__wishlist-button" onClick={toggleWishlist}>
            <Image
                src="/wishlist.svg"
                alt='#'
                fill
                style={{
                    objectFit: "cover",
                    filter: isInWishlist ? "invert(13%) sepia(96%) saturate(7456%) hue-rotate(1deg) brightness(103%) contrast(117%)" : "none",
                }}
            />
        </button>
    )
}