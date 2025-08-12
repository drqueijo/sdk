# @bitfever/sdk-vue

BitFever SDK Vue component for integrating BitFever functionality into Vue applications.

## Installation

```bash
npm install @bitfever/sdk-vue
# or
yarn add @bitfever/sdk-vue
# or
pnpm add @bitfever/sdk-vue
```

## Usage

```vue
<template>
  <div>
    <h1>My App</h1>
    <BitFever 
      clientId="your-client-id"
      :config="{
        style: {
          border: 'none',
          maxWidth: '343px',
          maxHeight: '650px',
        }
      }"
    />
  </div>
</template>

<script setup>
import { BitFever } from '@bitfever/sdk-vue';
</script>
```

## Props

- `clientId` (required): Your BitFever client ID
- `config` (optional): Configuration object for the iframe
- `style` (optional): Additional styles for the container div
- All other HTML div attributes are supported

## Requirements

- Vue >= 3.0.0 