import { BitFeverConfig } from './types';
declare const _default: import('vue').DefineComponent<{
    clientId: string;
    orderId?: string | undefined;
    auth?: string | undefined;
    config?: BitFeverConfig | undefined;
    style?: Record<string, string | number> | undefined;
}, {
    url: import('vue').ComputedRef<string>;
    config: import('vue').ComputedRef<BitFeverConfig>;
    containerStyles: import('vue').ComputedRef<{
        position: "relative";
        boxShadow: string;
        display: string;
        alignItems: string;
        justifyContent: string;
        maxHeight: string;
        maxWidth: string;
        borderRadius: string;
        minHeight: string;
        minWidth: string;
        overflow: string;
    }>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    clientId: string;
    orderId?: string | undefined;
    auth?: string | undefined;
    config?: BitFeverConfig | undefined;
    style?: Record<string, string | number> | undefined;
}> & Readonly<{}>, {
    style: Record<string, string | number>;
    config: BitFeverConfig;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
