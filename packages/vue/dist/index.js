import { defineComponent as s, computed as t, createElementBlock as l, openBlock as c, mergeProps as r, createElementVNode as p } from "vue";
const m = ["src"], u = /* @__PURE__ */ s({
  __name: "bit-fever",
  props: {
    clientId: {},
    orderId: {},
    auth: {},
    config: { default: () => ({}) },
    style: { default: () => ({}) }
  },
  setup(i) {
    const e = i, n = t(() => `https://app.bitfever.com/sdk?clientId=${e.clientId}&orderId=${e.orderId}&auth=${e.auth}`), o = t(() => ({
      style: {
        border: "none",
        maxWidth: "343px",
        maxHeight: "650px",
        minWidth: "343px",
        minHeight: "650px"
      },
      title: "Bitfever",
      scrolling: "no",
      id: "bitfever-iframe",
      ...e.config
    })), a = t(() => ({
      position: "relative",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxHeight: "650px",
      maxWidth: "343px",
      borderRadius: "0.75rem",
      minHeight: "650px",
      minWidth: "343px",
      overflow: "hidden",
      ...e.style
    }));
    return (d, x) => (c(), l("div", r({ style: a.value }, d.$attrs), [
      p("iframe", r({ src: n.value }, o.value), null, 16, m)
    ], 16));
  }
});
export {
  u as BitFever
};
