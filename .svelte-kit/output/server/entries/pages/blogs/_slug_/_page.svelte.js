import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>${escape(data.title)}</h1> <h3>${escape(data.content ? data.content : "No article body was written for this article!")}</h3>`;
});
export {
  Page as default
};
