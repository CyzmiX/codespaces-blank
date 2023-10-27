// @ts-nocheck
import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase'



export const load = async () => {
	const { data } = await supabase.from("articles").select('*')

	return {
		length: data.length+1
	}
};;null as any as PageLoad;