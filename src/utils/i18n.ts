import fr from '../content/fr.json';
import en from '../content/en.json';

type Lang = 'fr' | 'en';

const translations: Record<Lang, Record<string, any>> = { fr, en };

export function t(lang: Lang, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return (value as string) ?? key;
}

export function tArray(lang: Lang, key: string): string[] {
  const keys = key.split('.');
  let value: any = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return (value as string[]) ?? [];
}

export function tObj(lang: Lang, key: string): Record<string, any> {
  const keys = key.split('.');
  let value: any = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value ?? {};
}

export function getLang(url: URL): Lang {
  return url.pathname.startsWith('/en') ? 'en' : 'fr';
}

export function localizedPath(lang: Lang, path: string): string {
  if (lang === 'fr') return path;
  return `/en${path}`;
}
