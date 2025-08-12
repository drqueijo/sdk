<template>
  <div :style="containerStyles" v-bind="$attrs">
    <iframe :src="url" v-bind="config" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { BitFeverConfig } from "./types";

interface Props {
  clientId: string;
  orderId?: string;
  auth?: string;
  config?: BitFeverConfig;
  style?: Record<string, string | number>;
}

const props = withDefaults(defineProps<Props>(), {
  config: () => ({}),
  style: () => ({}),
});

const url = computed(() => `https://app.bitfever.com/sdk?clientId=${props.clientId}&orderId=${props.orderId}&auth=${props.auth}`);


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
</script>