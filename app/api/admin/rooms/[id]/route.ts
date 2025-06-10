import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Params {
    params: { id: string };
}

export async function PUT(req: Request, { params }: Params) {
    const roomId = Number(params.id);
    const body = await req.json();

    const updated = await prisma.rooms.update({
        where: { room_id: roomId },
        data: {
            title: body.title,
            description: body.description,
            price_per_night: parseFloat(body.price),
            image: body.image,
            capacity: Number(body.capacity),
        },
    });

    return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: Params) {
    const { id } = await params;

    await prisma.rooms.delete({
        where: { room_id: Number(id) },
    });

    return NextResponse.json({ message: "Room deleted" });
}
