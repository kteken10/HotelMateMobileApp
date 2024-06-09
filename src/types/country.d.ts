// types.ts

// Type représentant le code de pays
export type CountryCode = string;

// Type représentant les informations détaillées sur un pays
export interface Country {
  name: string;
  cca2: CountryCode;
  callingCode: string;
  flag: string;
  emoji: string;
  // Ajoutez d'autres propriétés si nécessaire
}
