import type { Metadata } from 'next';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import Banner from "@/ui/Banner";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Your Reservations | Oceanview Hotel',
    description: 'View and manage your hotel room reservations at Oceanview Hotel.',
};

export default async function ReservationsPage() {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) return notFound();

    const user = await prisma.users.findUnique({
        where: { email: session.user.email },
    });

    if (!user) return notFound();

    const reservations = await prisma.bookings.findMany({
        where: { user_id: user.user_id },
        include: {
            rooms: true,
        },
        orderBy: {
            created_at: "desc",
        },
    });

    return (
        <div className="page">
            <Banner
                title="Reservations"
                subtitle="Home > Reservations"
                background="/booking-bg.jpg"
            />

            <section className="section">
                <h2 className="section__title">
                    YOUR <span className="blue__title">RESERVATIONS</span>
                </h2>

                {reservations.length === 0 ? (
                    <p className="section__text">You have no reservations yet.</p>
                ) : (
                    <div className="reservations__list">
                        {reservations.map(res => (
                            <div key={Number(res.created_at)} className="reservation__card">
                                {res.rooms ? (
                                    <>
                                        <div className="reservation__image">
                                            <Image
                                                src={res.rooms?.image as string}
                                                alt={res.rooms?.title as string}
                                                width={300}
                                                height={200}
                                                style={{ objectFit: "cover", borderRadius: "8px" }}
                                            />
                                        </div>
                                        <div className="reservation__info">
                                            <h3>{res.rooms?.title}</h3>
                                            <p><strong>Check-in:</strong> {res.check_in.toDateString()}</p>
                                            <p><strong>Check-out:</strong> {res.check_out.toDateString()}</p>
                                            <p><strong>Status:</strong> {res.status}</p>
                                            <p><strong>Total Cost:</strong> ${Number(res.total_cost)}</p>
                                        </div>
                                    </>
                                ) : (
                                    <p className="reservation__missing">Room data is missing.</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
