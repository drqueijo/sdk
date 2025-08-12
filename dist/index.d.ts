import * as react_jsx_runtime from 'react/jsx-runtime';

type BitFeverConfig = Omit<React.HTMLAttributes<HTMLIFrameElement>, "src">;
interface BitFeverProps extends React.HTMLAttributes<HTMLDivElement> {
    clientId: string;
    config?: BitFeverConfig;
}

declare const BitFever: ({ clientId, config: iframeConfig, ...props }: BitFeverProps) => react_jsx_runtime.JSX.Element;

export { BitFever, type BitFeverConfig, type BitFeverProps };
