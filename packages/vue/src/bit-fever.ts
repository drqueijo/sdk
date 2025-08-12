import { defineComponent, computed } from "vue";
import type { BitFeverConfig } from "./types";

export default defineComponent({
  name: "BitFever",
  props: {
    clientId: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: false,
    },
    auth: {
      type: String,
      required: false,
    },
    config: {
      type: Object as () => BitFeverConfig,
      default: () => ({}),
    },
    style: {
      type: Object as () => Record<string, string | number>,
      default: () => ({}),
    },
  },
  setup(props: {
    clientId: string;
    orderId?: string;
    auth?: string;
    config?: BitFeverConfig;
    style?: Record<string, string | number>;
  }) {
    const url = computed(
      () =>
        `https://app.bitfever.com/sdk?clientId=${props.clientId}&auth=${props.auth}&orderId=${props.orderId}`
    );

    const config = computed((): BitFeverConfig => {
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
        ...props.config,
      };
    });

    const containerStyles = computed(() => ({
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
    }));

    return {
      url,
      config,
      containerStyles,
    };
  },
  template: `
    <div :style="containerStyles" v-bind="$attrs">
      <iframe :src="url" v-bind="config" />
    </div>
  `,
});
