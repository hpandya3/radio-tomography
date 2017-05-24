fs = require('fs');

function readImages(dirname, posture) {
  filenames = fs.readdirSync(dirname);

  // Create an array to store all the features
  numFiles = filenames.length;
  var features = new Array(numFiles);
  var clearFile = false;
  var offset = 0;
  var img = 0;
  for (img = 0; img < numFiles; img++) {
    var content = fs.readFileSync(dirname + '/' + filenames[img], "utf8");
    
    if (filenames[img] != 'all.json') {
      // Read Images
      dataArr = JSON.parse(content);
      image = nj.array(dataArr);
      cropped_image = clearVerticalBorder(image, 2);

      // Extract features
      //t_image = imthresh(cropped_image, 0.2);
      features[img-offset] = imfeaturetrain(cropped_image, posture).slice(0);
    } else {
      features = features.splice(img, 1);
      offset = 1;
      clearFile = true;
    }
  }

  console.log(features);

  if (clearFile) {
    fs.unlinkSync(dirname + '/' + 'all.json');
  }

  // Write the features to a single file
  fs.writeFileSync(dirname + '/' + 'all.json', JSON.stringify(features), {encoding: "utf8"});
}
