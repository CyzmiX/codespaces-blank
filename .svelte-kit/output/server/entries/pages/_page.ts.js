import { s as supabase } from "../../chunks/supabase.js";
const load = async () => {
  const { data } = await supabase.from("articles").select("*");
  return {
    blogs: data
  };
};
export {
  load
};
