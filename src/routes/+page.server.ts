import prisma from '$lib/prisma';
import { env } from '$env/dynamic/private';


import type { Actions } from './$types';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        let password = data.get('password')
        console.log(env.FORM_PASSWORD, password)
        let name = data.get("name") || ''
        let phoneNumber = data.get("phoneNumber") || ''
        let email = data.get("email") || ''
        let foodPreference = data.get("foodPreference") || ''
        if (password == env.FORM_PASSWORD) {
            await prisma.guest.create({
                data: {
                    name: name.toString(),
                    phoneNumber: phoneNumber.toString(),
                    email: email.toString(),
                    foodPreference: foodPreference.toString()
                }
            });
            return { success: true, person: name.toString() };
        } else {
            return {
                wrongPassword: true,
                name: name.toString(),
                phoneNumber: phoneNumber.toString(),
                email: email.toString(),
                foodPreference: foodPreference.toString()
            }
        }
    }
} satisfies Actions;