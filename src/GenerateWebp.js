import path from "path";
import { readdir, stat, unlink } from "fs/promises";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

export default function vitePluginWebpClean() {
  return {
    name: "vite-plugin-webp-clean",

    async buildStart() {
      const imgDir = path.resolve("src/assets/images");
      const files = await readdir(imgDir);

      const jpgFiles = files.filter((f) => /\.(jpe?g)$/i.test(f));

      for (const file of jpgFiles) {
        const filePath = path.join(imgDir, file);
        const webpPath = path.join(
          imgDir,
          file.replace(/\.(jpe?g)$/i, ".webp")
        );

        const webpStat = await stat(webpPath).catch(() => null);
        const jpgStat = await stat(filePath);

        const needsConvert = !webpStat || webpStat.mtimeMs < jpgStat.mtimeMs;

        try {
          if (needsConvert) {
            await imagemin([filePath], {
              destination: imgDir,
              plugins: [imageminWebp({ quality: 75 })],
            });
            this.warn(`[webp] Converted: ${file}`);
          } else {
            this.warn(
              `[webp] Existing webp found for ${file}, skipping conversion`
            );
          }

          // Always delete the .jpg if .webp exists now
          const checkWebpNow = await stat(webpPath).catch(() => null);
          if (checkWebpNow) {
            await unlink(filePath);
            this.warn(`[webp] Deleted original: ${file}`);
          } else {
            this.warn(`[webp] Skipped deletion, no .webp created for: ${file}`);
          }
        } catch (err) {
          this.error(`[webp] Error processing ${file}: ${err}`);
        }
      }
    },
  };
}
