import type { Metadata } from 'next';
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Banner from "@/ui/Banner";
import BookingForm from "@/ui/BookingForm";

export const metadata: Metadata = {
    title: 'Booking | Oceanview Hotel',
    description: 'Complete your room reservation at Oceanview Hotel.',
    robots: {
        index: false,
        follow: true,
    },
};

interface BookingParamsProps {
    searchParams: {
        room_id: string,
    },
}

export default async function BookingPage({ searchParams }: BookingParamsProps) {
    const { room_id } = await searchParams;

    if (!room_id) return notFound();

    const room = await prisma.rooms.findUnique({
        where: { room_id: Number(room_id) },
        include: {
            room_conveniences: {
                include: {
                    conveniences: true,
                },
            },
        },
    });

    if (!room) {
        return (
            <div className="page">
                <Banner title="BOOKING" subtitle="Home > booking" background="/rooms-bg.jpg" />
                <p className="section__title" style={{ margin: 'auto' }}>Can't find a room</p>
            </div>
        );
    }

    return (
        <div className="page">
            <Banner
                title="Booking"
                subtitle="Home > Booking"
                background="/booking-bg.jpg"
            />

            <section className="section">
                <h2 className="section__title">
                    COMPLETE YOUR <span className="blue__title">BOOKING</span>
                </h2>
                <BookingForm
                    key={room.room_id}
                    room_id={room.room_id}
                    title={room.title?.toString() ?? 'Unnamed'}
                    description={room.description}
                    price={`${room.price_per_night}`}
                    image={room.image ?? ''}
                    conveniences={room.room_conveniences.map(rc => rc.conveniences.name)}
                />
            </section>
        </div>
    );
}
