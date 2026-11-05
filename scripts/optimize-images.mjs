// Makes lighter versions of the images in public/ for the case pages, and writes
// app/data/imageManifest.ts so the page knows which versions exist.
//
//   npm i --no-save sharp
//   node scripts/optimize-images.mjs
//
// The original file stays as it is (it is what opens fullscreen). Next to it come
// name-800.webp, name-1400.webp and name-2400.webp, only for the sizes that are
// smaller than the original. They are resized with Lanczos and saved at a high
// quality, so text and edges stay crisp.
import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.resolve("public");
const widths = [800, 1400, 2400];
const quality = { 800: 90, 1400: 90, 2400: 88 };
// Images that are not shown through ImageWithLoader
const skip = /(^|\/)(og|icons)\/|\/(thumbnail|cover)-[^/]*\.webp$/;
const variantName = /-(800|1400|2400)\.webp$/;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const manifest = {};
let before = 0;
let after = 0;

for await (const file of walk(publicDir)) {
  const url = "/" + path.relative(publicDir, file).split(path.sep).join("/");
  if (!file.endsWith(".webp") || skip.test(url) || variantName.test(url))
    continue;

  const { width, height } = await sharp(file).metadata();
  const size = (await stat(file)).size;
  const variants = [];

  for (const target of widths) {
    // A version only 10% smaller than the original is not worth having
    if (target > width * 0.9) continue;
    const out = file.replace(/\.webp$/, `-${target}.webp`);
    await sharp(file)
      .resize({ width: target, kernel: "lanczos3" })
      .webp({ quality: quality[target], effort: 6, smartSubsample: true })
      .toFile(out);
    variants.push(target);
    after += (await stat(out)).size;
  }

  manifest[url] = { width, height, variants };
  before += size;
}

const body = Object.entries(manifest)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(
    ([url, { width, height, variants }]) =>
      `  ${JSON.stringify(url)}: { width: ${width}, height: ${height}, variants: [${variants.join(", ")}] },`,
  )
  .join("\n");

await writeFile(
  path.resolve("app/data/imageManifest.ts"),
  `// Written by scripts/optimize-images.mjs, do not edit by hand
export const imageManifest: Record<
  string,
  { width: number; height: number; variants: number[] }
> = {
${body}
};
`,
);

console.log(
  `${Object.keys(manifest).length} images, originals ${(before / 1048576).toFixed(1)} MB, new versions ${(after / 1048576).toFixed(1)} MB`,
);
