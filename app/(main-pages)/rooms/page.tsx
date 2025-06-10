import type { Metadata } from 'next';
import Banner from '@/ui/Banner';
import RoomCard from '@/ui/RoomCard';
import SearchForm from '@/ui/SearchForm';
import { roomsData } from '@/app/lib/rooms';

export const metadata: Metadata = {
  title: 'Rooms | Oceanview Hotel',
  description: 'Browse available rooms and book your stay at Oceanview Hotel.',
};

interface roomsParamsProps {
  searchParams: {
    checkIn?: string,
    checkOut?: string,
    roomsCount?: string,
    people?: string,
  }
}

export default async function Rooms({ searchParams }: roomsParamsProps) {
  const { checkIn, checkOut, roomsCount, people } = await searchParams;

  const rooms = await roomsData({ checkIn, checkOut, roomsCount, people });

  return (
    <div className="page">
      <Banner title="ROOMS" subtitle="Home > Rooms" background="/rooms-bg.jpg" />
      <SearchForm />
      <section className="section">
        <p className="about-section__description">OUR ROOMS</p>
        <h2 className="section__title">AVAILABLE <span className='blue__title'>ROOMS</span></h2>
        <div className="rooms">
          {rooms.map(room => (
            <RoomCard
              key={room.room_id}
              room_id={room.room_id}
              title={room.title?.toString() ?? 'Unnamed'}
              description={room.description}
              price={`$${room.price_per_night}/night`}
              image={room.image ?? ''}
              conveniences={room.room_conveniences.map(rc => rc.conveniences.name)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}