// Pure-helper entry ("@block52/ui-sdk/helpers"): no React, no DOM components,
// no peer dependencies. Apps that only want the shared utilities (e.g. the web
// UI's guards) import from here so bundlers and test runners never evaluate the
// component barrel and its react/motion imports.

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

// Pagination math & clipboard
export { pageInfo, paginate, pageButtons } from "./utils/paginate";
export type { PageInfo } from "./utils/paginate";
export { copyText } from "./utils/clipboard";
