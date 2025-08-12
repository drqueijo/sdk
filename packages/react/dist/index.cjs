"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  BitFever: () => bit_fever_default
});
module.exports = __toCommonJS(index_exports);

// src/bit-fever.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var BitFever = ({
  clientId,
  orderId,
  auth,
  config: iframeConfig,
  ...props
}) => {
  const url = `https://app.bitfever.com/sdk?clientId=${clientId}&orderId=${orderId}&auth=${auth}`;
  const config = (0, import_react.useMemo)(() => {
    return {
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
      ...iframeConfig
    };
  }, [iframeConfig]);
  const containerStyles = (0, import_react.useMemo)(
    () => ({
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
      ...props.style
    }),
    [props.style]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ...props, style: containerStyles, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", { ...config, src: url }) });
};
var bit_fever_default = BitFever;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BitFever
});
//# sourceMappingURL=index.cjs.map