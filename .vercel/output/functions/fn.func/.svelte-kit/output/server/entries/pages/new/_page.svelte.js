import { c as create_ssr_component, a as createEventDispatcher, v as validate_component } from "../../../chunks/ssr.js";
import { T as Toast } from "../../../chunks/Toast.js";
const CreateBlog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { content } = $$props;
  let { desc } = $$props;
  createEventDispatcher();
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  return ` <div class="py-12"><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><div class="bg-white rounded-lg dark:bg-gray-700 overflow-hidden shadow-sm sm:rounded-lg"><div class="p-6 bg-white rounded-lg shadow dark:bg-gray-700"><div class="mb-4"><label class="text-xl text-white">Title <span class="text-red-500" data-svelte-h="svelte-1n3raya">*</span> <input type="text" class="border-2 sm:rounded-lg dark:bg-gray-800 border-gray-700 p-2 w-full" name="title" id="title" value="" required> </label><br></div> <div class="mb-4"><label class="text-xl text-white">Description
                        <input type="text" class="border-2 sm:rounded-lg dark:bg-gray-800 border-gray-300 p-2 w-full" name="description" id="description" placeholder="(Optional)"> </label><br></div> <div class="mb-8"><label class="text-xl text-white">Content <span class="text-red-500" data-svelte-h="svelte-1n3raya">*</span> <br> <textarea name="content" class="border-2 sm:rounded-lg dark:bg-gray-800 border-gray-500"></textarea></label></div> <div class="flex p-1"><button class="p-3 text-sm sm:rounded-lg text-white bg-blue-700 hover:bg-blue-800" data-svelte-h="svelte-1lsgs8s">Submit</button></div></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title = "";
  let desc = "";
  let content = "";
  let error = "";
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Toast, "Toast").$$render(
      $$result,
      {
        show: Boolean(error),
        msg: "Invalid Content!"
      },
      {},
      {}
    )} ${validate_component(CreateBlog, "CreateBlog").$$render(
      $$result,
      { content, desc, title },
      {
        content: ($$value) => {
          content = $$value;
          $$settled = false;
        },
        desc: ($$value) => {
          desc = $$value;
          $$settled = false;
        },
        title: ($$value) => {
          title = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
