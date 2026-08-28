import sharp from "sharp";
import path from "path";

const inputPath = path.resolve("./public/images/nael-brand-identity-original.jpg");
const outDir = path.resolve("./public/images");

async function extract() {
  // Let's crop the top section (width 500, height 260, centered around 512, 140)
  const cropLeft = 340;
  const cropTop = 20;
  const cropWidth = 344;
  const cropHeight = 250;

  const cropped = await sharp(inputPath)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .png()
    .toBuffer();

  await sharp(cropped).toFile(path.join(outDir, "test-crop.png"));
  console.log("Saved test-crop.png");

  // Let's inspect the colors in test-crop.png
  const { data, info } = await sharp(cropped).raw().toBuffer({ resolveWithObject: true });
  console.log("Cropped Info:", info);

  // Background in the brushed metal background:
  // Let's check sample corner colors
  const getPixel = (x, y) => {
    const idx = (y * info.width + x) * info.channels;
    return [data[idx], data[idx + 1], data[idx + 2]];
  };

  console.log("Top-left (0,0):", getPixel(0, 0));
  console.log("Top-right (width-1, 0):", getPixel(info.width - 1, 0));
  console.log("Center crest (172, 60):", getPixel(172, 60));
  console.log("NAEL text (172, 190):", getPixel(172, 190));
}

extract().catch(console.error);
