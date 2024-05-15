/* eslint-disable */
type Messages = typeof import("./messages/en.json");
type EsMessages = typeof import("./messages/es.json");

declare interface IntlMessages extends Messages, EsMessages {}

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
