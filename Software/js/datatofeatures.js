fs = require('fs');

function readImages(dirname, posture) {
  filenames = fs.readdirSync(dirname);

  // Create an array to store all the features
  numFiles = filenames.length;
  var features = new Array(numFiles);

  var img = 0;
  for (img = 0; img < numFiles; img++) {
    var content = fs.readFileSync(dirname + '/' + filenames[img], "utf8");

    // Read Images
    dataArr = JSON.parse(content);
    image = nj.array(dataArr);

    // Extract features
    t_image = imthresh(image, 0.3);
    features[img] = imfeature(t_image, posture).slice(0);
  }

  console.log(features);

  // Write the features to a single file
  fs.writeFile(dirname + '/' + dirname + '_all' + '.json',
      JSON.stringify(features),
      function (err) {
          if (err) {
              console.error('Space write error!');
          }
      }
  );
}

function getFeatures(dirnames) {
  
}