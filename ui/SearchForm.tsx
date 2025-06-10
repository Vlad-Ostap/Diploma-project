'use client'

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function SearchForm({ shiftUp }: { shiftUp?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState(1);
  const [people, setPeople] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const query = new URLSearchParams({
      checkIn,
      checkOut,
      roomsCount: rooms.toString(),
      people: people.toString(),
    }).toString();

    if (pathname === '/') {
      router.push(`/rooms?${query}`);
    } else if (pathname === '/rooms') {
      router.replace(`/rooms?${query}`);
    }
  };

  return (
    <div className={`search__form__container ${shiftUp ? 'shifted' : ''}`}>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__inputs">
          <div className="search-form__inputs__block">
            <label htmlFor="check-in">check-in</label>
            <input
              className="search-form__input"
              id="check-in"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="search-form__inputs__block">
            <label htmlFor="check-out">check-out</label>
            <input
              className="search-form__input"
              id="check-out"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div className="search-form__inputs__block">
            <label htmlFor="rooms">Rooms</label>
            <input
              className="search-form__input"
              id="rooms"
              type="number"
              min={1}
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
            />
          </div>
          <div className="search-form__inputs__block">
            <label htmlFor="people">people</label>
            <input
              className="search-form__input"
              id="people"
              type="number"
              min={1}
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
            />
          </div>
        </div>
        <button type="submit" className="search-form__button">FIND NOW</button>
      </form>
    </div>
  );
}
