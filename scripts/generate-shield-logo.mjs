import sharp from "sharp";
import fs from "fs";
import path from "path";

// Master Vector SVG for Nael Technology Solutions Fortress Shield Emblem
export const naelShieldSvg = `
<svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Top-to-bottom shield perimeter gradient: Cyan to Deep Sapphire -->
    <linearGradient id="naelShieldOuterGrad" x1="100" y1="10" x2="100" y2="230" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="25%" stop-color="#0284c7" />
      <stop offset="70%" stop-color="#1e40af" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>

    <!-- 3D Battlement Top Highlight -->
    <linearGradient id="naelBattlementGrad" x1="100" y1="10" x2="100" y2="50" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#7dd3fc" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>

    <!-- Interlocking knot top-left loop gradient -->
    <linearGradient id="knotGrad1" x1="60" y1="70" x2="140" y2="170" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="40%" stop-color="#0284c7" />
      <stop offset="80%" stop-color="#1e3a8a" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>

    <!-- Interlocking knot bottom-right loop gradient -->
    <linearGradient id="knotGrad2" x1="140" y1="70" x2="60" y2="170" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#0369a1" />
      <stop offset="100%" stop-color="#172554" />
    </linearGradient>

    <!-- Shield Inner Fill Tint -->
    <radialGradient id="shieldInnerGlow" cx="100" cy="110" r="80" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0" />
    </radialGradient>

    <!-- Subtle Drop Shadow Filter -->
    <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0284c7" flood-opacity="0.25" />
    </filter>
  </defs>

  <!-- Fortress Shield Outer Shell -->
  <!-- Battlement crenellations top: 3 raised merlons, 2 embrasures -->
  <path
    d="M 40 40 
       L 40 18 
       L 62 18 
       L 62 30 
       L 88 30 
       L 88 18 
       L 112 18 
       L 112 30 
       L 138 30 
       L 138 18 
       L 160 18 
       L 160 40 
       C 162 95, 155 175, 100 224 
       C 45 175, 38 95, 40 40 Z"
    fill="url(#shieldInnerGlow)"
    stroke="url(#naelShieldOuterGrad)"
    stroke-width="12"
    stroke-linejoin="round"
    stroke-linecap="round"
  />

  <!-- Top Battlement Shelf Trim -->
  <path
    d="M 36 40 L 164 40"
    stroke="url(#naelBattlementGrad)"
    stroke-width="6"
    stroke-linecap="round"
  />

  <!-- Inner Interlocking Knot / Celtic Technology Loop -->
  <!-- Loop A: Diagonal top-left to bottom-right -->
  <path
    d="M 72 90 
       C 60 102, 60 128, 75 142 
       L 110 172 
       C 125 184, 142 175, 142 158 
       C 142 145, 130 135, 118 124 
       L 85 92 
       C 76 82, 64 82, 72 90 Z"
    fill="none"
    stroke="url(#knotGrad1)"
    stroke-width="12"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <!-- Loop B: Diagonal top-right to bottom-left (Interlocked) -->
  <path
    d="M 128 90 
       C 140 102, 140 128, 125 142 
       L 90 172 
       C 75 184, 58 175, 58 158 
       C 58 145, 70 135, 82 124 
       L 115 92 
       C 124 82, 136 82, 128 90 Z"
    fill="none"
    stroke="url(#knotGrad2)"
    stroke-width="12"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <!-- Overlap bridge to give true 3D woven knot effect -->
  <path
    d="M 92 108 L 108 124"
    stroke="url(#knotGrad1)"
    stroke-width="12"
    stroke-linecap="round"
  />
  <path
    d="M 92 140 L 108 156"
    stroke="url(#knotGrad2)"
    stroke-width="12"
    stroke-linecap="round"
  />
</svg>
`;

async function main() {
  const outDir = path.resolve("./public/images");
  fs.writeFileSync(path.join(outDir, "nael-shield-emblem.svg"), naelShieldSvg.trim());
  console.log("Saved nael-shield-emblem.svg");

  // Render high-resolution PNGs from SVG at 1024x1024 and 512x512
  const svgBuffer = Buffer.from(naelShieldSvg);

  await sharp(svgBuffer, { density: 300 })
    .resize(1024, 1228)
    .png({ quality: 100 })
    .toFile(path.join(outDir, "nael-emblem.png"));

  await sharp(svgBuffer, { density: 300 })
    .resize(512, 614)
    .png({ quality: 100 })
    .toFile(path.join(outDir, "nael-emblem-512.png"));

  await sharp(svgBuffer, { density: 300 })
    .resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.resolve("./public/icon-192.png"));

  await sharp(svgBuffer, { density: 300 })
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.resolve("./public/icon-512.png"));

  await sharp(svgBuffer, { density: 300 })
    .resize(64, 64, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.resolve("./public/favicon.png"));

  console.log("Generated high-res emblem PNGs and favicons");
}

main().catch(console.error);
