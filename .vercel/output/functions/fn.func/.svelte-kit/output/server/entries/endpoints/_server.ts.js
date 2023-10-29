import { j as json } from "../../chunks/index.js";
import "../../chunks/supabase.js";
const POST = async ({ request }) => {
  const { email, password, mode } = await request.json();
  console.log(mode);
  return json({
    mode,
    data: "",
    error: ""
  });
};
export {
  POST
};
