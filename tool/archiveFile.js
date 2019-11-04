const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const process = require('process');
const pkg = require('../package.json');

// const distDir = path.resolve(__dirname, '../public');
// const buildTimestampFile = path.join(distDir, 'buildtime.txt');
// const buildTimestamp = moment().format('YYYYMMDDHHmmss');
// if (!fs.existsSync(distDir)) {
//   fs.mkdirSync(distDir, { recursive: true });
// }

// let fileZipName = `${pkg.name}${
//   process.env.NODE_ENV == 'production'
//     ? `-${pkg.version}-${buildTimestamp}`
//     : ``
// }.zip`;

const output = fs.createWriteStream(`${__dirname}/../my-ssr.zip`);
const archive = archiver('zip');
const startTime = new Date().getTime();
console.log('正在打包部署包...');

output.on('close', function() {
  const endTime = new Date().getTime();
  const elaspedTime = (endTime - startTime) / 1000;
  const filesize = (archive.pointer() / 1000 / 1000).toFixed(2); // MB
  console.log(`打包部署包完成，包大小为：${filesize}MB，耗时：${elaspedTime}s`);
  // fs.writeFileSync(buildTimestampFile, buildTimestamp);
});

archive.on('error', function(err) {
  throw err;
});

archive.on('entry', function(entry) {
  if (!entry.name.match(/^node_modules/g) && entry.type === 'file') {
    console.log(`添加文件：${entry.name}`);
  }
});

const timestamp = new Date();

archive.pipe(output);

const walkSync = function(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(function(file) {
    const absFile = path.join(dir, file);
    if (fs.statSync(absFile).isDirectory()) {
      if (file.search('sourcemaps') === -1) {
        archive.directory(absFile, `./src/${file}`, { date: timestamp });
      }
    } else {
      archive.file(`src/${file}`, { date: timestamp });
    }
  });
};

// archive.file('package.json', { date: timestamp });
// archive.file('publish.sh', { date: timestamp });
// archive.file('start_test.sh', { date: timestamp });
// if (process.env.NODE_ENV == 'production') {
//   archive.file('start_yfb.sh', { date: timestamp });
//   archive.file('start_prod.sh', { date: timestamp });
// }
// archive.file('.nvmrc', { date: timestamp });
walkSync(path.join(__dirname, '../src'));
archive.directory('public', '../public', { date: timestamp });

// 添加Node运行时依赖
require('child_process').exec('npm ls --production --parseable', function(
  err,
  stdout,
  stderr
) {
  archive.finalize();
});
