const fs = require('fs');
const sourcePath = 'node_modules/@mdi/svg/svg';
const destPath = 'src/img';

const svgIcons = [
  'bimdata_carret-down.svg',
  'bimdata_carret-right.svg',
  'bimdata_home.svg',
  'bimdata_logo-doc.svg',
  'bimdata_logo.svg',
  'bimdata_.svg',
  'chevron-down.svg',
  'chevron-left.svg',
  'chevron-right.svg',
  'chevron-up.svg',
  'close-circle.svg',
  'close.svg',
  'cloud-upload.svg',
  'cloud.svg',
  'delete.svg',
  'eye.svg',
  'filter-variant.svg',
  'folder-outline.svg',
  'img-more.svg',
  'keyboard_arrow_down',
  'keyboard_arrow_up',
  'magnify.svg',
  'map-marker.svg',
  'menu.svg',
  'pencil.svg',
  'play.svg',
  'add.svg'
];

fs.readdir(sourcePath, function(err, items) {

  for (let item of items) {
    if (svgIcons.indexOf(item) != -1) {
      try {
        copyFile(sourcePath + '/' + item, destPath + '/' + item)
          .then(() => { console.log(item + ' copied') })
      } catch (err) {
        console.log(err)
      }
    }
  }
});

async function copyFile(source, target) {
  var rd = fs.createReadStream(source);
  var wr = fs.createWriteStream(target);
  try {
    return await new Promise(function(resolve, reject) {
      rd.on('error', reject);
      wr.on('error', reject);
      wr.on('finish', resolve);
      rd.pipe(wr);
    });
  } catch (error) {
    rd.destroy();
    wr.end();
    throw error;
  }
}
