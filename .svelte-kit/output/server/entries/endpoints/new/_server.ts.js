import { j as json } from "../../../chunks/index.js";
import { s as supabase } from "../../../chunks/supabase.js";
const POST = async ({ request }) => {
  const req = await request.json();
  const { error } = await supabase.from("articles").insert(
    {
      id: +req.id,
      title: req.title,
      desc: req.desc,
      content: req.content,
      date: req.date
    }
  );
  console.log(error);
  return json({
    success: error ?? true
  });
};
export {
  POST
};
