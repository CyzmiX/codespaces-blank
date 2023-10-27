import { s as supabase } from "../../../../chunks/supabase.js";
const load = async ({ params }) => {
  const { data } = await supabase.from("articles").select("*").eq("title", params.slug);
  return data[0];
};
export {
  load
};
