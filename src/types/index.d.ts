export { TFunction } from "i18next";

export type Filters = {
  [key: string]: { value: string; label: string; selected?: boolean }[];
};
