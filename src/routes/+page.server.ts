import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';


import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    // 1.
    default: async ({ request }) => {
        const data = await request.formData();
        console.log(data)
        let password = data.get('password')

        let name = data.get("name") || ''
        let phoneNumber = data.get("phoneNumber") || ''
        let email = data.get("email") || ''
        let foodPreference = data.get("foodPreference") || ''
        await prisma.guest.create({
            data: {
                name: name.toString(),
                phoneNumber: phoneNumber.toString(),
                email: email.toString(),
                foodPreference: foodPreference.toString()
            }
        });
        throw redirect(303, `/`)
    }
} satisfies Actions;