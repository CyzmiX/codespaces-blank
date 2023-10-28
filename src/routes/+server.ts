import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/supabase';

export const POST: RequestHandler = async ({ request }) => {
	const { email, password, mode } = await request.json();

    console.log(mode)

    return json({
        mode,
        data: '',
        error: ''
    });
};