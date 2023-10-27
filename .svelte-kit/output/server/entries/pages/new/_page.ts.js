import { s as supabase } from "../../../chunks/supabase.js";
const load = async () => {
  const { data } = await supabase.from("articles").select("*");
  return {
    length: data.length + 1
  };
};
export {
  load
};
