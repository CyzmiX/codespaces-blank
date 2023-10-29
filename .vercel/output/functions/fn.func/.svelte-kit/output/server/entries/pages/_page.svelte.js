import { c as create_ssr_component, a as createEventDispatcher, d as add_attribute, e as escape, v as validate_component, f as each } from "../../chunks/ssr.js";
import { T as Toast } from "../../chunks/Toast.js";
const BlogCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.svelte-ncq4gq{margin:auto;box-shadow:0px 2px 10px rgba(255, 255, 255, 0.2);transition:all 0.25s ease}div.svelte-ncq4gq:hover{box-shadow:0px 2px 15px rgba(255, 255, 255, 0.25);cursor:pointer}",
  map: null
};
const BlogCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { createdAt } = $$props;
  createEventDispatcher();
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.createdAt === void 0 && $$bindings.createdAt && createdAt !== void 0)
    $$bindings.createdAt(createdAt);
  $$result.css.add(css$2);
  return `<div${add_attribute("tabindex", 0, 0)} role="button" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 svelte-ncq4gq"><a href="${"/blogs/" + escape(title, true)}"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${escape(title)}</h5></a> <p class="mb-3 font-light text-gray-700 dark:text-gray-400">${escape(createdAt)}</p> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${escape(description)}</p> <a href="${"/blogs/" + escape(title, true)}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></div> <br>`;
});
const LoginModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".center.svelte-1pgqnid{left:32.5%}body{overflow-x:hidden}",
  map: null
};
const LoginModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  let password = "";
  let email = "";
  createEventDispatcher();
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css$1);
  return `${show ? `<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="center absolute z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full svelte-1pgqnid"><div class="relative w-full max-w-md max-h-full"> <div class="relative bg-white rounded-lg shadow dark:bg-gray-700"><button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal" data-svelte-h="svelte-12nehdl"><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg> <span class="sr-only">Close modal</span></button> <div class="px-6 py-6 lg:px-8"><br> <div class="space-y-6"><div><label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-4vz3n0">Your email</label> <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required${add_attribute("value", email, 0)}></div> <div><label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-152rhsc">Your password</label> <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required${add_attribute("value", password, 0)}></div> <button class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-svelte-h="svelte-k8aklj">Login in</button> <button class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-svelte-h="svelte-sbwrwc">Sign In</button></div></div></div></div></div>` : ``}`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  return `<nav class="bg-gray-800"><div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"><div class="relative flex h-16 items-center justify-between"><div class="absolute inset-y-0 left-0 flex items-center sm:hidden"> <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" data-svelte-h="svelte-vpkjfc"><span class="absolute -inset-0.5"></span> <span class="sr-only">Open main menu</span> <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg> <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start" data-svelte-h="svelte-1ogmpnd"><div class="hidden sm:ml-6 sm:block"><div class="flex space-x-4"><a href="/" class="hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a> <a href="/new" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">New Blog</a> <a href="/myblogs" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">My Blogs</a></div></div></div> <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"><div class="relative ml-3"><div><button type="button" class="rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset relative flex bg-gray-800 text-sm focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true" data-svelte-h="svelte-1to61ue"><span class="absolute -inset-1.5"></span> <span class="sr-only">Open user menu</span>
                Login</button></div></div></div></div></div> ${``}</nav> <br>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-wyijx3{text-align:center;font-size:2rem;padding:8px 12px 24px 12px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let show = false;
  let error = "";
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Toast, "Toast").$$render(
    $$result,
    {
      show: Boolean(error),
      msg: "Invalid Content!"
    },
    {},
    {}
  )} ${validate_component(LoginModal, "LoginModal").$$render($$result, { show }, {}, {})} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white svelte-wyijx3" data-svelte-h="svelte-xd7bsq">Latest Blogs</h3> ${each(data?.blogs, (idc, i) => {
    let blog = data?.blogs[data?.blogs?.length - i - 1];
    return ` ${validate_component(BlogCard, "Blog").$$render(
      $$result,
      {
        title: blog.title,
        description: blog.desc ? blog.desc : "",
        createdAt: blog.date ? blog.date : "2023"
      },
      {},
      {}
    )}`;
  })}`;
});
export {
  Page as default
};
