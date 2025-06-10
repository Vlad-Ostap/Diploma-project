import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import Banner from '@/ui/Banner';
import RoomCard from '@/ui/RoomCard';

export const metadata: Metadata = {
    title: 'Your Wishlist | Oceanview Hotel',
    description: 'View and manage your favorite rooms at Oceanview Hotel.',
};

export default async function Wishlist() {

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return (
            <div className="page">
                <Banner title="WISHLIST" subtitle="Home > wishlist" background="/rooms-bg.jpg" />
                <p className="section__title" style={{ margin: 'auto' }}>Please sign in to view your wishlist</p>
            </div>
        );
    }

    const user = await prisma.users.findUnique({
        where: { email: session.user.email as string },
    });

    if (!user) {
        return (
            <div className="page">
                <Banner title="WISHLIST" subtitle="Home > wishlist" background="/rooms-bg.jpg" />
                <p className="section__title">User not found</p>
            </div>
        );
    }

    const wishlist = await prisma.wishlist.findMany({
        where: {
            user_id: Number(user.user_id),
        },
        include: {
            rooms: {
                include: {
                    room_conveniences: {
                        include: {
                            conveniences: true,
                        },
                    },
                },
            },
        },
    });

    const rooms = wishlist.map(item => item.rooms);

    return (
        <div className="page">
            <Banner title="WISHLIST" subtitle="Home > Wishlist" background="/rooms-bg.jpg" />
            <section className="section">
                <p className="about-section__description">YOUR FAVORITES ROOMS</p>
                <h2 className="section__title">FAVORITES <span className='blue__title'>ROOMS</span></h2>
                <div className="rooms">
                    {rooms.length ? rooms.map(room => (
                        <RoomCard
                            key={room.room_id}
                            room_id={room.room_id}
                            title={room.title?.toString() ?? 'Unnamed'}
                            description={room.description}
                            price={`$${room.price_per_night}/night`}
                            image={room.image ?? ''}
                            conveniences={room.room_conveniences.map(rc => rc.conveniences.name)}
                        />
                    )) : (
                        <p className="section__title">No favorite rooms</p>
                    )}
                </div>
            </section>
        </div>
    );
}