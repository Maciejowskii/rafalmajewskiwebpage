const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'all', 'foty ukończonych projektów');
const destDir = path.join(__dirname, 'public', 'images', 'projects');

const filesToCopy = [
  { src: 'CR-Ulstein-Group_Per-Eide-Studio_PES8039.jpg', dest: 'ulstein-group.jpg' },
  { src: 'GEA-1.jpg', dest: 'gea.jpg' },
  { src: 'Romex instalacja na nowo powstałej hali wraz z budową stacji transformatorowej.jpg', dest: 'romex-hala.jpg' },
  { src: 'baltin-sun_207bb3.jpg', dest: 'baltin-sun.jpg' },
  { src: 'origami.jpg', dest: 'origami-project.jpg' },
  { src: 'vivantes klinikum.jpg', dest: 'vivantes-klinikum.jpg' }
];

filesToCopy.forEach(file => {
  const srcPath = path.join(srcDir, file.src);
  const destPath = path.join(destDir, file.dest);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file.src} to ${file.dest}`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});
