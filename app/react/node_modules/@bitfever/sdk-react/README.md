# @bitfever/sdk-react

BitFever SDK React component for integrating BitFever functionality into React applications.

## Installation

```bash
npm install @bitfever/sdk-react
# or
yarn add @bitfever/sdk-react
# or
pnpm add @bitfever/sdk-react
```

## Usage

```tsx
import { BitFever } from '@bitfever/sdk-react';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <BitFever 
        clientId="your-client-id"
        config={{
          style: {
            border: "none",
            maxWidth: "343px",
            maxHeight: "650px",
          }
        }}
      />
    </div>
  );
}
```

## Props

- `clientId` (required): Your BitFever client ID
- `config` (optional): Configuration object for the iframe
- `style` (optional): Additional styles for the container div
- All other HTML div attributes are supported

## Requirements

- React >= 18
- React DOM >= 18 