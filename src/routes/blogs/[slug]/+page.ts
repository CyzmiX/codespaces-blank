import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase'
//import json from './blogs/blogs.json'


export const load: PageLoad = async ({  params  }) => {
	const { data } = await supabase.from("articles").select('*').eq('title', params.slug)
	
	return  data[0]
};