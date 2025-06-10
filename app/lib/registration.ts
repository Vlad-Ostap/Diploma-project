'use server'

import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

interface userLoginData {
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
}

export default async function registration(formData: FormData) {
    const userLoginData: userLoginData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        phoneNumber: formData.get('phone_number') as string,
    }

    const user = await prisma.users.findUnique({
        where: {
            email: userLoginData.email
        }
    });

    if (user) throw new Error('This user already exists')

    try {
        const hashPassword = await bcrypt.hash(userLoginData.password, 10);
        await prisma.users.create({
            data: {
                email: userLoginData.email,
                password_hash: hashPassword,
                name: userLoginData.name,
                phone: userLoginData.phoneNumber
            }
        });
        return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    redirect('/');
}