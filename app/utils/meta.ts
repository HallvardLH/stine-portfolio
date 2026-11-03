// Title, description and the Open Graph tags that decide how a link looks when it is shared
export function pageMeta(title: string, description: string) {
  const text = description.trim();
  return [
    { title },
    { name: "description", content: text },
    { property: "og:title", content: title },
    { property: "og:description", content: text },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "nb_NO" },
    { property: "og:site_name", content: "Stine Knutsen" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}
