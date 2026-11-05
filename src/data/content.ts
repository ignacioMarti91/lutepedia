export const postKindLabels = {
  cronica: "Crónica",
  radar: "Radar",
  relato: "Relato",
} as const;

export const projectKindLabels = {
  negocios: "Negocios",
  digital: "Digital",
  audiovisual: "Audiovisual",
} as const;

export function tagSlug(tag: string): string {
  return tag
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function newestFirst<T extends { data: { pubDate?: Date } }>(entries: T[]): T[] {
  return [...entries].sort((a, b) => {
    const dateA = a.data.pubDate?.getTime() ?? 0;
    const dateB = b.data.pubDate?.getTime() ?? 0;
    return dateB - dateA;
  });
}
