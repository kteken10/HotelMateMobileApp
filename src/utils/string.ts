export function capitalizeFirstLetter(string: string): string {
  if (typeof string !== "string" || string.length === 0) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
export function camelCaseToText(str: string): string {
  return capitalizeFirstLetter(str.replace(/[A-Z]/g, (letter) => ` ${letter}`));
}

export function toLowerCase(str: string): string | undefined {
  if (typeof str === "string") {
    return str.toLowerCase();
  }
  return undefined;
}

export function extractINIT(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str
    .trim()
    .split(" ")
    .map((el) => el[0])
    .join("");
}

export function stringReduceAddDots(string: string, limit: number): string {
  if (string.length <= limit) {
    return string;
  } else {
    return `${string.slice(0, limit)}...`;
  }
}

export function removeWhiteSpace(str: string): string {
  return str.trim().replace(/\s/g, "");
}

export function isEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function getID(url: string): string | undefined {
  if (url.trim().length === 0) {
    return undefined;
  }
  const parentId = url.split(".com/")[1];
  return parentId;
}