const fs = require("fs");
const path = require("path");

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = [".tsx", ".ts", ".jsx", ".js"]) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (
      stat &&
      stat.isDirectory() &&
      !file.startsWith(".") &&
      file !== "node_modules" &&
      file !== ".git"
    ) {
      results = results.concat(findFiles(filePath, extensions));
    } else if (extensions.some((ext) => file.endsWith(ext))) {
      results.push(filePath);
    }
  });

  return results;
}

// Function to update Image imports and usage
function updateImageComponents(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  // Check if file contains Image from next/image
  if (
    content.includes('from "next/image"') ||
    content.includes("from 'next/image'")
  ) {
    console.log(`Processing: ${filePath}`);

    // Replace import
    content = content.replace(
      /import\s+Image\s+from\s+["']next\/image["'];?/g,
      "import { LazyImage } from '@/components/ui/lazy-image';"
    );

    // Replace Image components with LazyImage
    content = content.replace(/<Image\s+/g, "<LazyImage ");

    // Add priority prop for above-the-fold images (hero, banner, logo, nav, header)
    content = content.replace(
      /(<LazyImage[^>]*src=["'][^"']*(?:hero|banner|logo|nav|header|main|primary)[^"']*["'][^>]*>)/g,
      "$1 priority={true}"
    );

    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Updated: ${filePath}`);
  }
}

// Main execution
function main() {
  const projectRoot = process.cwd();
  const files = findFiles(projectRoot);

  console.log("Found files with Image components:");
  let updatedCount = 0;

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf8");
    if (
      content.includes('from "next/image"') ||
      content.includes("from 'next/image'")
    ) {
      console.log(`- ${file}`);
      updateImageComponents(file);
      updatedCount++;
    }
  });

  console.log(`\nUpdated ${updatedCount} files`);
  console.log("\nManual steps needed:");
  console.log("1. Review the changes in each file");
  console.log(
    "2. Add priority={true} to above-the-fold images manually if needed"
  );
  console.log("3. Test the application to ensure all images load correctly");
}

if (require.main === module) {
  main();
}
