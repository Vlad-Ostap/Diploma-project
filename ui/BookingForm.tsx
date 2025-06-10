'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";

interface BookingFormProps {
    room_id: number;
    title: string;
    description?: string | null;
    price: string;
    image: string;
    conveniences?: string[];
}

export default function BookingForm({
    room_id,
    title,
    description,
    price,
    image,
    conveniences = [],
}: BookingFormProps) {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const totalPrice = useMemo(() => {
        if (!checkIn || !checkOut) return 0;

        const inDate = new Date(checkIn);
        const outDate = new Date(checkOut);
        const diff = (outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24);
        const nights = diff > 0 ? diff : 0;

        return nights * parseFloat(price);
    }, [checkIn, checkOut]);

    console.log(totalPrice)

    async function handleBooking(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            room_id: Number(formData.get('room_id')),
            check_in: formData.get('check_in'),
            check_out: formData.get('check_out'),
            guests: Number(formData.get('guests')),
            total_cost: totalPrice,
        };

        const res = await fetch('/api/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        setLoading(false);

        if (res.ok) {
            router.push("/info-page");
        } else {
            alert(`❌ Error: ${result.message}`);
        }
    }

    return (
        <div className="booking__details">
            <div className="room-card booking">
                <div className="room-card__image">
                    <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="room-card__content">
                    <div className="room-card__info">
                        <h3 className="room-card__title">{title}</h3>
                        <p className="room-card__description">{description}</p>
                        <ul className="room-card__conveniences" style={{ marginBottom: '0' }}>
                            {conveniences.map((conv, idx) => (
                                <li key={idx}> {conv}</li>
                            ))}
                        </ul>
                        <div className="room-card__price" style={{ textAlign: 'center', marginBottom: '15px' }}>${price}/night</div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleBooking} className="booking__form">
                <input type="hidden" name="room_id" value={room_id} />
                <label>
                    Check-in Date:
                    <input
                        type="date"
                        name="check_in"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        required />
                </label>

                <label>
                    Check-out Date:
                    <input
                        type="date"
                        name="check_out"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Guests:
                    <input type="number" name="guests" min="1" defaultValue={1} required />
                </label>

                {totalPrice > 0 && (
                    <div className="booking__price">
                        <strong>Total cost: {totalPrice} USD</strong>
                    </div>
                )}

                <button type="submit" disabled={loading}>
                    {loading ? 'Booking...' : 'Confirm Booking'}
                </button>
            </form>
        </div>
    );
}
