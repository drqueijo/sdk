<template>
  <div style="padding: 32px">
    <h1>BitFever Vue Dev App</h1>
    <BitFever clientId="demo-client-id" />
  </div>
</template>

<script setup lang="ts">
import { BitFever } from "@bitfever/sdk-vue";
</script>