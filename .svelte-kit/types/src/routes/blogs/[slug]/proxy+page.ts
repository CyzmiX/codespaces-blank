// @ts-nocheck
import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase'
//import json from './blogs/blogs.json'


export const load = async ({  params  }: Parameters<PageLoad>[0]) => {
	const { data } = await supabase.from("articles").select('*').eq('title', params.slug)

	return  data[0]
};