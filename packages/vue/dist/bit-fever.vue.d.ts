import { BitFeverConfig } from './types';
interface Props {
    clientId: string;
    orderId?: string;
    auth?: string;
    config?: BitFeverConfig;
    style?: Record<string, string | number>;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    style: Record<string, string | number>;
    config: BitFeverConfig;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
