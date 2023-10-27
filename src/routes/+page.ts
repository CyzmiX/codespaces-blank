import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase'
//import json from './blogs/blogs.json'


export const load: PageLoad = async () => {
	const { data } = await supabase.from("articles").select('*')
	return {
		blogs: data
	}
};