# @block52/ui-sdk

Shared React UI primitives for Block52 apps. Presentational components (tooltip, dropdown,
pagination, sliding tabs, toast, copy button, animated background) extracted from the
[Block52 desktop app](https://github.com/block52/desktop), which is the source of truth.

> **Source of truth is the desktop repo.** These components are not edited here directly —
> they are copied in verbatim from `block52/desktop` by its `yarn sync:ui-sdk` script. Fix a
> component in desktop, re-run the sync, then publish a new version here.

## Install

```bash
yarn add @block52/ui-sdk
```

Peer dependencies (provided by the consuming app): `react`, `react-dom`, `motion`.

## Usage

```tsx
import { Tooltip, Pagination, Dropdown, SlidingTabs } from "@block52/ui-sdk";
import "@block52/ui-sdk/styles.css"; // once, at the app root
```

## Components (v0.1.0)

- `AnimatedBackground`
- `CopyButton`
- `Dropdown`
- `Pagination`
- `SlidingTabs`
- `ToastViewport` (+ toast context)
- `Tooltip`

Out of scope: poker-domain components (table, wallet, modals). Those stay in the desktop app.

## Develop

```bash
yarn build       # tsup → dist (ESM + CJS + .d.ts + index.css)
yarn test        # vitest (component tests opt into jsdom per file)
yarn typecheck
yarn lint
```

## Release

```bash
npm login        # @block52 org, once
yarn release     # build + npm publish --access public
```

## License

[CC0-1.0](./LICENSE)
