const fs = require('fs');
const path = require('path');

function findHtmlFiles(dir, fileList) {
  fileList = fileList || [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function injectScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';

  if (content.includes(scriptTag) || content.includes('dashboard-console-capture.js')) {
    return;
  }

  if (content.includes('</head>')) {
    content = content.replace('</head>', `  ${scriptTag}\n</head>`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Injected console capture script into ${filePath}`);
  }
}

function main() {
  const buildDirs = ['.next', 'out', 'build', 'dist'];
  let targetDir = null;

  for (const dir of buildDirs) {
    if (fs.existsSync(dir)) {
      targetDir = dir;
      break;
    }
  }

  if (!targetDir) {
    console.log('No build directory found, skipping console capture injection.');
    return;
  }

  const htmlFiles = findHtmlFiles(targetDir);
  htmlFiles.forEach(injectScript);
  console.log(`Console capture injection complete. Processed ${htmlFiles.length} files.`);
}

main();