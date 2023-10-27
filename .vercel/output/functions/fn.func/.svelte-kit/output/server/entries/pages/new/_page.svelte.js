import { c as create_ssr_component, d as createEventDispatcher, e as escape, v as validate_component } from "../../../chunks/ssr.js";
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
const Toast_svelte_svelte_type_style_lang = "";
const css = {
  code: "#toast-danger.svelte-y01ehn{display:flex;position:fixed;left:36.5%;top:16px}",
  map: null
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { msg = "" } = $$props;
  let { show = false } = $$props;
  createEventDispatcher();
  if ($$props.msg === void 0 && $$bindings.msg && msg !== void 0)
    $$bindings.msg(msg);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css);
  return `${show ? `<div id="toast-danger" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 svelte-y01ehn" role="alert"><div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200" data-svelte-h="svelte-1iuumdy"><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"></path></svg> <span class="sr-only">Error icon</span></div> <div class="ml-3 text-sm font-normal">${escape(msg)}</div> <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close" data-svelte-h="svelte-1vmpx1g"><span class="sr-only">Close</span> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg></button></div>` : ``}`;
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
