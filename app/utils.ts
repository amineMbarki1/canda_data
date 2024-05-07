export function normalizeString(str: string) {
    return str.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  }