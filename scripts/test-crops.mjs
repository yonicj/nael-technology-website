import sharp from "sharp";
import path from "path";

const inputPath = path.resolve("./public/images/nael-brand-identity-original.jpg");
const outDir = path.resolve("./public/images");

async function checkCardCrops() {
  // Top main logo:
  await sharp(inputPath)
    .extract({ left: 400, top: 20, width: 224, height: 240 })
    .png()
    .toFile(path.join(outDir, "crop-top-main.png"));

  // Crest only:
  await sharp(inputPath)
    .extract({ left: 440, top: 25, width: 144, height: 155 })
    .png()
    .toFile(path.join(outDir, "crop-crest-only.png"));

  // White business card:
  await sharp(inputPath)
    .extract({ left: 208, top: 276, width: 120, height: 75 })
    .png()
    .toFile(path.join(outDir, "crop-card-white.png"));

  // Dark blue business card:
  await sharp(inputPath)
    .extract({ left: 208, top: 370, width: 120, height: 75 })
    .png()
    .toFile(path.join(outDir, "crop-card-dark.png"));

  console.log("Saved all test crops");
}

checkCardCrops().catch(console.error);
