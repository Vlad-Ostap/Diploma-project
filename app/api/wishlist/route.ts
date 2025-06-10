import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { room_id } = await req.json();
    
    if (!room_id) {
        return NextResponse.json({ error: "Missing room_id" }, { status: 400 });
    }

    const user = await prisma.users.findUnique({
        where: { email: session.user.email },
    });

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const existing = await prisma.wishlist.findUnique({
        where: {
            user_id_room_id: {
                user_id: user.user_id,
                room_id,
            },
        },
    });

    if (existing) {
        await prisma.wishlist.delete({
            where: { user_id_room_id: { user_id: user.user_id, room_id } },
        });
        return NextResponse.json({ status: "removed" });
    } else {
        await prisma.wishlist.create({
            data: {
                user_id: user.user_id,
                room_id,
            },
        });
        return NextResponse.json({ status: "added" });
    }
}
