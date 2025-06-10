import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.users.findUnique({
        where: { email: session.user.email },
    });

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const { room_id, check_in, check_out, guests, total_cost } = await req.json();

    if (!room_id || !check_in || !check_out || !guests || !total_cost) {
        return NextResponse.json({ message: "Missing data" }, { status: 400 });
    }

    const overlappingBooking = await prisma.bookings.findFirst({
        where: {
            room_id,
            OR: [
                {
                    check_in: {
                        lte: new Date(check_out),
                    },
                    check_out: {
                        gte: new Date(check_in),
                    },
                },
            ],
        },
    });

    if (overlappingBooking) {
        return NextResponse.json(
            { message: "This room is already booked for the selected dates" },
            { status: 409 }
        );
    }

    const booking = await prisma.bookings.create({
        data: {
            user_id: user.user_id,
            room_id,
            check_in: new Date(check_in),
            check_out: new Date(check_out),
            total_cost,
            status: 'confirmed',
        },
    });

    return NextResponse.json({ message: "Booking successful", booking });
}
