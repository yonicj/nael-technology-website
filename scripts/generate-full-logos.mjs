import sharp from "sharp";
import fs from "fs";
import path from "path";

// Full Horizontal Brand Logo SVG with Fortress Shield and Typography
export const naelFullHorizontalSvg = (theme = "light") => {
  const textColor = theme === "dark" ? "#f8fafc" : "#0f172a";
  const naelColor = "#0ea5e9";
  const subtextColor = theme === "dark" ? "#94a3b8" : "#334155";

  return `
<svg viewBox="0 0 540 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Shield Outer Gradient -->
    <linearGradient id="shieldGrad_${theme}" x1="50" y1="10" x2="50" y2="110" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="35%" stop-color="#0284c7" />
      <stop offset="75%" stop-color="#1e3a8a" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>

    <!-- Battlement Shelf Highlight -->
    <linearGradient id="battlementGrad_${theme}" x1="50" y1="10" x2="50" y2="30" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#7dd3fc" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>

    <!-- Knot Gradient 1 -->
    <linearGradient id="knotGrad1_${theme}" x1="30" y1="35" x2="70" y2="85" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#1e3a8a" />
    </linearGradient>

    <!-- Knot Gradient 2 -->
    <linearGradient id="knotGrad2_${theme}" x1="70" y1="35" x2="30" y2="85" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#0369a1" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <!-- SHIELD EMBLEM (Left: centered in 100x120) -->
  <g transform="translate(10, 10) scale(0.42)">
    <!-- Outer Shield with Battlement -->
    <path
      d="M 40 40 
         L 40 16 
         L 62 16 
         L 62 28 
         L 88 28 
         L 88 16 
         L 112 16 
         L 112 28 
         L 138 28 
         L 138 16 
         L 160 16 
         L 160 40 
         C 162 95, 155 175, 100 224 
         C 45 175, 38 95, 40 40 Z"
      fill="none"
      stroke="url(#shieldGrad_${theme})"
      stroke-width="14"
      stroke-linejoin="round"
      stroke-linecap="round"
    />

    <!-- Battlement Shelf -->
    <path
      d="M 36 40 L 164 40"
      stroke="url(#battlementGrad_${theme})"
      stroke-width="6"
      stroke-linecap="round"
    />

    <!-- Inner Interlocking Ribbon Knot -->
    <path
      d="M 72 90 
         C 60 102, 60 128, 75 142 
         L 110 172 
         C 125 184, 142 175, 142 158 
         C 142 145, 130 135, 118 124 
         L 85 92 
         C 76 82, 64 82, 72 90 Z"
      fill="none"
      stroke="url(#knotGrad1_${theme})"
      stroke-width="13"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M 128 90 
         C 140 102, 140 128, 125 142 
         L 90 172 
         C 75 184, 58 175, 58 158 
         C 58 145, 70 135, 82 124 
         L 115 92 
         C 124 82, 136 82, 128 90 Z"
      fill="none"
      stroke="url(#knotGrad2_${theme})"
      stroke-width="13"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path d="M 92 108 L 108 124" stroke="url(#knotGrad1_${theme})" stroke-width="13" stroke-linecap="round" />
    <path d="M 92 140 L 108 156" stroke="url(#knotGrad2_${theme})" stroke-width="13" stroke-linecap="round" />
  </g>

  <!-- BRAND TYPOGRAPHY (Right: X=110) -->
  <text
    x="110"
    y="66"
    font-family="system-ui, -apple-system, sans-serif"
    font-size="54"
    font-weight="900"
    letter-spacing="-0.03em"
    fill="${naelColor}"
  >
    NAEL
  </text>

  <text
    x="112"
    y="96"
    font-family="system-ui, -apple-system, sans-serif"
    font-size="16"
    font-weight="800"
    letter-spacing="0.16em"
    fill="${textColor}"
  >
    TECHNOLOGY SOLUTIONS
  </text>
</svg>
`;
};

async function buildAllLogos() {
  const outDir = path.resolve("./public/images");

  // Write SVGs
  fs.writeFileSync(path.join(outDir, "nael-logo-horizontal-light.svg"), naelFullHorizontalSvg("light").trim());
  fs.writeFileSync(path.join(outDir, "nael-logo-horizontal-dark.svg"), naelFullHorizontalSvg("dark").trim());

  // Render high-res PNGs from SVG
  await sharp(Buffer.from(naelFullHorizontalSvg("light")), { density: 300 })
    .resize(1080, 240)
    .png({ quality: 100 })
    .toFile(path.join(outDir, "nael-logo-horizontal.png"));

  await sharp(Buffer.from(naelFullHorizontalSvg("dark")), { density: 300 })
    .resize(1080, 240)
    .png({ quality: 100 })
    .toFile(path.join(outDir, "nael-logo-horizontal-dark.png"));

  console.log("Generated clean vector horizontal logos");
}

buildAllLogos().catch(console.error);
