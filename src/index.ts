// This repo is the source of truth for these primitives and helpers; the
// desktop and web apps consume the published @block52/ui-sdk package.
// (Originally seeded from block52/desktop by its sync-ui-sdk script, since
// retired — the desktop copies were deleted in favour of this package.)

// Components
export { default as AnimatedBackground } from "./components/background/AppBackground";
export { default as Pagination } from "./components/pagination/Pagination";
export { PAGE_SIZES } from "./components/pagination/Pagination";
export { default as Tooltip } from "./components/tooltip/Tooltip";
export { default as Dropdown } from "./components/dropdown/Dropdown";
export type { DropdownOption } from "./components/dropdown/Dropdown";
export { default as SlidingTabs } from "./components/slidingTabs/SlidingTabs";
export { default as CopyButton } from "./components/copyButton/CopyButton";
export { default as ToastViewport } from "./components/toast/Toast";

// Shared helpers & context
export { pageInfo, paginate, pageButtons } from "./utils/paginate";
export type { PageInfo } from "./utils/paginate";
export { ToastProvider, useToast } from "./context/ToastContext";
export type { ToastItem } from "./context/ToastContext";
export { useCopyToClipboard } from "./hooks/useCopyToClipboard";
export { copyText } from "./utils/clipboard";

// Type guards (null/empty/typeof checks — mirrors pvm/ts/src/utils/guards.ts)
export { hasValue, isNullish, isEmpty, hasElements, safeLength, isBlank, hasContent, isRecord, isString, isNumber, isBoolean } from "./utils/guards";

// Encoding & entropy
export { base64ToHex } from "./utils/encodingUtils";
export { generateSystemEntropy, generatePlayerSeedHex } from "./utils/entropy";

// Sit & Go schedule
export {
    getTimeZoneOffsetMs,
    getZonedWeekday,
    zonedWallTimeToUtc,
    getNextOccurrence,
    getUpcomingSngs,
    formatCountdown,
    formatUtcLabel,
    formatLocalLabel,
    parseSngSchedule
} from "./utils/sngSchedule";
export type { SngTournament, UpcomingSng } from "./utils/sngSchedule";
