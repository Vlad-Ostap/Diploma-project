import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const rooms = await prisma.rooms.findMany({
        include: {
            room_conveniences: {
                include: { conveniences: true }
            }
        }
    });

    const formatted = rooms.map(room => ({
        room_id: room.room_id,
        title: room.title,
        description: room.description,
        price: room.price_per_night,
        image: room.image,
        conveniences: room.room_conveniences.map(rc => rc.conveniences.name),
        capacity: room.capacity,
    }));

    return NextResponse.json(formatted);
}

export async function POST(req: Request) {
    const body = await req.json();

    const newRoom = await prisma.rooms.create({
        data: {
            title: body.title,
            description: body.description,
            price_per_night: parseFloat(body.price),
            image: body.image,
            capacity: Number(body.capacity),
        },
    });

    return NextResponse.json(newRoom);
}
