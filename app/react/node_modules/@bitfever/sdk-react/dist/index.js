// src/bit-fever.tsx
import { useMemo } from "react";
import { jsx } from "react/jsx-runtime";
var BitFever = ({
  clientId,
  orderId,
  auth,
  config: iframeConfig,
  ...props
}) => {
  const url = `https://app.bitfever.com/sdk?clientId=${clientId}&orderId=${orderId}&auth=${auth}`;
  const config = useMemo(() => {
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
  const containerStyles = useMemo(
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
  return /* @__PURE__ */ jsx("div", { ...props, style: containerStyles, children: /* @__PURE__ */ jsx("iframe", { ...config, src: url }) });
};
var bit_fever_default = BitFever;
export {
  bit_fever_default as BitFever
};
//# sourceMappingURL=index.js.map