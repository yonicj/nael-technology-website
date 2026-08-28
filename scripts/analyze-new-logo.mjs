import sharp from "sharp";
import path from "path";

const inputPath = path.resolve("./public/images/nael-brand-identity-original.jpg");

async function analyze() {
  const metadata = await sharp(inputPath).metadata();
  console.log("Image metadata:", metadata);
}

analyze().catch(console.error);
