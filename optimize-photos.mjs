import sharp from "sharp";
import fs from "node:fs";

const dir = "C:/Users/Austi/Downloads/Claude/HSA APP/public/photos";
const map = [
  ["MyIntel_Website_ mobile-phone-dashboard-display.png", "app-nightstand.jpg"],
  ["MyIntel_Website_tablet-dashboard.png", "product-dashboard.jpg"],
  ["MyIntel_Website_image-conversation.png", "home-assessment.jpg"],
  ["MyIntel_Website_Network-illustration.png", "care-network.jpg"],
  ["MyIntel_Website_Couch-senior-child.png", "family-couch.jpg"],
];

for (const [srcName, outName] of map) {
  const src = `${dir}/${srcName}`;
  const out = `${dir}/${outName}`;
  const info = await sharp(src)
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(out);
  const before = fs.statSync(src).size;
  console.log(
    `${outName}: ${info.width}x${info.height}  ${(before / 1024).toFixed(0)}KB -> ${(info.size / 1024).toFixed(0)}KB`
  );
  fs.rmSync(src);
}
console.log("done");
