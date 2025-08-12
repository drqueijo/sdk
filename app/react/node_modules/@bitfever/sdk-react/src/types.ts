import React from "react";

export type BitFeverConfig = Omit<
  React.HTMLAttributes<HTMLIFrameElement>,
  "src"
>;

export interface BitFeverProps extends React.HTMLAttributes<HTMLDivElement> {
  clientId: string;
  orderId?: string;
  auth?: string;
  config?: BitFeverConfig;
}
