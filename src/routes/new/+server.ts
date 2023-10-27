import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase'
import type { RequestHandler } from '$types';


interface Blog {
	title: string 
	content: string 
	desc?: string
	date: string  
}

export const POST: RequestHandler = async ({ request }) => {
	const req = await request.json()
	
	
	const { error } = await supabase.from('articles').insert(
		{  
			id: +req.id,
			title: req.title,
			desc: req.desc,
			content: req.content,
			date: req.date
		}
	)
	console.log(error)
	return json({
		success: error ?? true,
	})
};