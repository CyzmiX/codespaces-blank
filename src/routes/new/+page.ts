import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase'



export const load: PageLoad = async () => {
	const { data } = await supabase.from("articles").select('*')

	return {
		length: data.length+1
	}
};