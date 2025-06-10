import { prisma } from "@/lib/prisma";

interface SearchParams {
    checkIn?: string,
    checkOut?: string,
    roomsCount?: string,
    people?: string,
}

export async function roomsData(searchParams?: SearchParams) {
    const checkIn = searchParams?.checkIn;
    const checkOut = searchParams?.checkOut;
    const roomsCount = Number(searchParams?.roomsCount);
    const people = Number(searchParams?.people);


    const allRooms = await prisma.rooms.findMany({
        where: {
            ...(roomsCount && !isNaN(roomsCount) && { room_count: roomsCount }),
            ...(people && !isNaN(people) && { capacity: people }),
        },
        include: {
            room_conveniences: {
                include: {
                    conveniences: true,
                },
            },
        },
    });

    if (!allRooms) throw new Error('No rooms found');

    return allRooms;
}