import i18next, { resources } from "./i18n";
import type { RecursiveKeyOf } from './types';
// Is it a RTL language?
export const isRTL: boolean = i18next.dir() === 'rtl';

type DefaultLocale = typeof resources.en
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;