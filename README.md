# BitFever SDK

BitFever SDK provides React and Vue components for integrating BitFever functionality into your applications.

## Packages

This monorepo contains the following packages:

- **[@bitfever/sdk-react](./packages/react)**: React component for integrating BitFever
- **[@bitfever/sdk-vue](./packages/vue)**: Vue component for integrating BitFever

## Development

### Prerequisites

- Node.js >= 18
- pnpm (recommended) or npm

### Setup

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run development servers
pnpm dev

# Type checking
pnpm typecheck

# Linting
pnpm lint

# Clean build artifacts
pnpm clean
```

### Package-specific commands

```bash
# React package
pnpm --filter @bitfever/sdk-react dev
pnpm --filter @bitfever/sdk-react build

# Vue package
pnpm --filter @bitfever/sdk-vue dev
pnpm --filter @bitfever/sdk-vue build
```

## Architecture

This monorepo uses:

- **Turbo**: For build orchestration and caching
- **TypeScript**: For type safety across all packages
- **Vite**: For development and building
- **tsup**: For library bundling
- **ESLint**: For code linting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT

## Installation

```bash
npm install @bitfever/sdk-react
# or
yarn add @bitfever/sdk-react
# or
pnpm add @bitfever/sdk-react
```

## Basic Usage

```tsx
import { BitFever } from '@bitfever/sdk-react';

function App() {
  return <BitFever clientId="your-client-id" />;
}
```

## Component Props

The `BitFever` component accepts the following props:

### Required Props

- **`clientId`** (string): Your BitFever client ID for authentication and configuration.

### Optional Props

- **`orderId`** (string): The order ID to associate with the BitFever session.
- **`auth`** (string): Authentication token for the BitFever session.
- **`config`** (BitFeverConfig): Configuration object for the iframe element. This can include:
  - `style`: Custom styles for the iframe
  - `title`: Title attribute for the iframe
  - `scrolling`: Scrolling behavior for the iframe
  - `id`: HTML id attribute for the iframe
  - Any other valid iframe HTML attributes
- **`style`** (React.CSSProperties | Record<string, string | number>): Custom styles for the container div.
- **`className`** (string): CSS class name for the container div (React only).
- **`id`** (string): HTML id attribute for the container div.

### Additional Props

- **`...props`**: All other standard HTML div attributes are supported and will be spread to the container div.

## Types

### BitFeverProps

```tsx
interface BitFeverProps extends React.HTMLAttributes<HTMLDivElement> {
  clientId: string;
  config?: BitFeverConfig;
}
```

### BitFeverConfig

```tsx
type BitFeverConfig = Omit<
  React.HTMLAttributes<HTMLIFrameElement>,
  "src"
>;
```

The `BitFeverConfig` type allows you to pass any standard iframe HTML attributes except for `src` (which is automatically set by the component).

## Advanced Usage

### Custom Styling

```tsx
import { BitFever } from '@bitfever/sdk-react';

function App() {
  return (
    <BitFever 
      clientId="your-client-id"
    />
  );
}
```

### Custom Iframe Configuration

```tsx
import { BitFever } from '@bitfever/sdk-react';

function App() {
  return (
    <BitFever 
      clientId="your-client-id"
      config={{
        title: "BitFever Integration",
        allow: "camera; microphone",
        sandbox: "allow-scripts allow-same-origin"
      }}
    />
  );
}
```

### With Event Handlers

```tsx
import { BitFever } from '@bitfever/sdk-react';

function App() {
  return (
    <BitFever 
      clientId="your-client-id"
      onClick={() => console.log('BitFever container clicked')}
      onMouseEnter={() => console.log('Mouse entered BitFever')}
    />
  );
}
```

## Default Configuration

The component comes with sensible defaults:

### Container Defaults
- **Dimensions**: 343px × 650px (min/max width and height)
- **Positioning**: Relative positioning with centered content
- **Styling**: Rounded corners (0.75rem), shadow effect, hidden overflow
- **Layout**: Flexbox with centered alignment

### Iframe Defaults
- **Dimensions**: 343px × 650px (min/max width and height)
- **Border**: None
- **Scrolling**: Disabled
- **Title**: "Bitfever"
- **ID**: "bitfever-iframe"

## Integration Example

```tsx
import React from 'react';
import { BitFever } from '@bitfever/sdk-react';

function MyApp() {
  return (
    <div className="app">
      <header>
        <h1>My Application</h1>
      </header>
      
      <main>
        <div className="bitfever-container">
          <BitFever 
            clientId="your-client-id"
            className="bitfever-widget"
          />
        </div>
      </main>
    </div>
  );
}

export default MyApp;
```

## Notes

- The component creates an iframe that loads content from `https://app.bitfever.com/sdk`
- The iframe URL includes your `clientId` as a query parameter
- The component is responsive and maintains aspect ratio
- All standard HTML div attributes are supported for the container
- All standard HTML iframe attributes (except `src`) are supported via the `config` prop
