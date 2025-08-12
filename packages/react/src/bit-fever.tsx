import { type BitFeverConfig, type BitFeverProps } from "./types";
import { useMemo } from "react";

const BitFever = ({
  clientId,
  orderId,
  auth,
  config: iframeConfig,
  ...props
}: BitFeverProps) => {
  const url = `https://app.bitfever.com/sdk?clientId=${clientId}&orderId=${orderId}&auth=${auth}`;

  const config: BitFeverConfig = useMemo(() => {
    return {
      style: {
        border: "none",
        maxWidth: "343px",
        maxHeight: "650px",
        minWidth: "343px",
        minHeight: "650px",
      },
      title: "Bitfever",
      scrolling: "no",
      id: "bitfever-iframe",
      ...iframeConfig,
    };
  }, [iframeConfig]);

  const containerStyles = useMemo(
    () => ({
      position: "relative" as const,
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
      ...props.style,
    }),
    [props.style]
  );

  return (
    <div {...props} style={containerStyles}>
      <iframe {...config} src={url} />
    </div>
  );
};

export default BitFever;
