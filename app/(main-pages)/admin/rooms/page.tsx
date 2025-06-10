'use client';

import type { Metadata } from 'next';
import { useEffect, useState } from "react";
import Image from "next/image";
import Banner from "@/ui/Banner";

interface RoomType {
    room_id: number;
    title: string;
    description?: string | null;
    price: number;
    image: string;
    capacity: number;
}

export default function AdminRoomManager() {
    const [roomList, setRoomList] = useState<RoomType[]>([]);
    const [roomForm, setRoomForm] = useState<Partial<RoomType>>({});
    const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

    const fetchRoomData = async () => {
        const res = await fetch("/api/admin/rooms");
        const data = await res.json();
        setRoomList(data);
    };

    useEffect(() => {
        fetchRoomData();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setRoomForm(prev => ({
            ...prev,
            [name]: name === "capacity" ? Number(value) : value
        }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const method = selectedRoomId ? "PUT" : "POST";
        const url = selectedRoomId ? `/api/admin/rooms/${selectedRoomId}` : "/api/admin/rooms";

        const payload = {
            ...roomForm,
            price: roomForm.price?.toString(),
            capacity: Number(roomForm.capacity),
        };

        await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        setRoomForm({});
        setSelectedRoomId(null);
        fetchRoomData();
    };

    const handleEditClick = (room: RoomType) => {
        setRoomForm(room);
        setSelectedRoomId(room.room_id);
    };

    const handleDeleteClick = async (id: number) => {
        await fetch(`/api/admin/rooms/${id}`, { method: "DELETE" });
        fetchRoomData();
    };

    return (
        <div className="page">

            <Banner title="ADMIN ROOMS" subtitle="Home > admin > rooms" background="/rooms-bg.jpg" />
            <h2 className="section__title" style={{ marginTop: '20px' }}>MANAGE <span className='blue__title'>ROOMS</span></h2>

            <div className="admin-manage__rooms">
                <div className="room-manager">
                    <h3 className="room-manager__title">{selectedRoomId ? 'Editing a room' : 'Adding a room'}</h3>
                    <form onSubmit={handleFormSubmit} className="room-manager__form">
                        <input name="title" value={roomForm.title || ""} onChange={handleInputChange} placeholder="Title" required />
                        <textarea name="description" value={roomForm.description || ""} onChange={handleInputChange} placeholder="Description" />
                        <input name="price" type="text" value={roomForm.price || ""} onChange={handleInputChange} placeholder="Price" required />
                        <input name="capacity" type="number" value={roomForm.capacity || ""} onChange={handleInputChange} placeholder="Capacity" required />
                        <input name="image" value={roomForm.image || ""} onChange={handleInputChange} placeholder="Image URL" required />
                        <button type="submit">{selectedRoomId ? "Update Room" : "Add Room"}</button>
                    </form>
                </div>

                <div className="room-list">
                    <h1 className="room-list__name">Available rooms</h1>
                    {roomList.map(room => (
                        <div key={room.room_id} className="room-list__card">
                            <div className="room-list__image">
                                <Image src={room.image} alt={room.title} fill style={{ objectFit: "cover" }} />
                            </div>
                            <div className="room-list__info">
                                <h3 className="room-list__title">{room.title}</h3>
                                <p className="room-list__desc">{room.description}</p>
                                <p className="room-list__meta">Capacity: {room.capacity}</p>
                                <div className="room-list__actions">
                                    <p className="room-list__price">${room.price}/night</p>
                                    <div className="room-list__buttons">
                                        <button onClick={() => handleEditClick(room)} className="btn btn--edit">Edit</button>
                                        <button onClick={() => handleDeleteClick(room.room_id)} className="btn btn--delete">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
