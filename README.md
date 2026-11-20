# @block52/ui-sdk

Shared React UI primitives and helpers for Block52 apps. Presentational components (tooltip,
dropdown, pagination, sliding tabs, toast, copy button, animated background) plus the shared
pure helpers (type guards, encoding, entropy, Sit & Go schedule), originally extracted from the
[Block52 desktop app](https://github.com/block52/desktop) and [web UI](https://github.com/block52/ui).

> **This repo is the source of truth.** The desktop and web apps consume the published
> package and keep no local copies. Fix a component or helper here, publish a new version,
> then bump the consumers. (The original desktop `sync:ui-sdk` script is retired.)

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

## Components

- `AnimatedBackground`
- `CopyButton`
- `Dropdown`
- `Pagination`
- `SlidingTabs`
- `ToastViewport` (+ toast context)
- `Tooltip`

## Helpers

- Type guards: `hasValue`, `isNullish`, `isEmpty`, `hasElements`, `safeLength`, `isBlank`,
  `hasContent`, `isRecord`, `isString`, `isNumber`, `isBoolean` (mirrors `pvm/ts/src/utils/guards.ts`)
- `base64ToHex`, `generateSystemEntropy`, `generatePlayerSeedHex`
- Sit & Go schedule: `parseSngSchedule` (https-only links), `getUpcomingSngs`, `formatCountdown`,
  `formatUtcLabel`, `formatLocalLabel` and the timezone math behind them
- `paginate` / `pageInfo` / `pageButtons`, `copyText`, `useCopyToClipboard`

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
