// Crops the VORDANE app icon out of the supplied brand lockup and exports icon sizes.
import sharp from "sharp";

const s = 260;
const r = 68;
const out = 540;
const mask = Buffer.from(
  `<svg width="${out}" height="${out}"><rect width="${out}" height="${out}" rx="${r * 2}" fill="#fff"/></svg>`,
);
const buf = await sharp("public/lockup-source.jpg")
  .extract({ left: 126, top: 152, width: s, height: s })
  .resize(out, out, { kernel: "lanczos3" })
  .composite([{ input: await sharp(mask).png().toBuffer(), blend: "dest-in" }])
  .png()
  .toBuffer();
await sharp(buf).toFile("public/vordane-icon.png");
await sharp(buf).resize(180, 180).toFile("src/app/apple-icon.png");
await sharp(buf).resize(64, 64).toFile("src/app/icon.png");
console.log("done");
