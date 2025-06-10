import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import WishlistButton from "./WishlistButton";


interface RoomCardProps {
  room_id: number;
  title: string;
  description?: string | null;
  price: string;
  image: string;
  conveniences?: string[];
}

export default async function RoomCard({
  room_id,
  title,
  description,
  price,
  image,
  conveniences = [],
}: RoomCardProps) {

  const session = await getServerSession(authOptions);

  let inWishlist = false;

  if (session?.user?.email) {
    const user = await prisma.users.findUnique({
      where: { email: session.user.email },
    });

    if (user) {
      const wishlistEntry = await prisma.wishlist.findFirst({
        where: {
          user_id: user.user_id,
          room_id: room_id,
        },
      });

      inWishlist = Boolean(wishlistEntry);
    }
  }

  return (
    <div className="room-card">
      <div className="room-card__image">
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="room-card__content">
        <div className="room-card__info">
          <h3 className="room-card__title">{title}</h3>
          <p className="room-card__description">{description ?? ''}</p>

          {conveniences.length > 0 && (
            <ul className="room-card__conveniences">
              {conveniences.map((conv, idx) => (
                <li key={idx}> {conv}</li>
              ))}
            </ul>
          )}

        </div>
        <div className="room-card__action">
          <div className="room-card__price">{price}</div>
          <Link href={`/booking?room_id=${room_id}`} className="room-card__book-button">
            BOOK NOW
          </Link>
          <WishlistButton room_id={room_id} inWishlist={inWishlist} />
        </div>
      </div>
    </div>
  );
}
