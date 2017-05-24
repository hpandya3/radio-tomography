function imthresh(image, threshold) {
	w = image.shape[0];
	h = image.shape[1];
	l = image.shape[2];
	min = image.min();
	if (min == 0) {
		min = -1;
	}
	var i, j, k;
	for(i = 0; i < h; i++) {
		for(j = 0; j < w; j++) {
			for(k = 0; k < l; k++) {
				var val = image.get(j, i, k)
				var percent = Math.abs(val/min)
				if (percent < threshold) {
					image.set(j, i, k, 0);
				} else {
					image.set(j, i, k, 1);
				}
			}
		}
	}
	return image;
}

function clearVerticalBorder(data, len) {
		for(posx = 1; posx <= dim["x"]; posx++) {
			for(posy = 1; posy <= dim["y"]; posy++) {
				for(posz = 1; posz <= dim["z"]; posz++) {
					if(posx <= len || posx >= (dim["x"] - len + 1) || posz <= len || 
						posz >= (dim["z"] - len + 1)) {
						data.set(posx-1, posy-1, posz-1, 0);
					}
				}
			}
		}
		return data;
	}

// Save the frame
function saveSpace(data, filename) {
	dataArr = data.tolist();
	require('fs').writeFile(
	    './' + filename + '.json',

	    JSON.stringify(dataArr),

	    function (err) {
	        if (err) {
	            console.error('Space write error!');
	        }
	    }
	);
}

// Open a frame
function openSpace(filename) {
	fs = require('fs');
	filenameStr = './' + filename + '.json';
	fs.readFile(filenameStr, function read(err, data) {
	    if (err) {
	        throw err;
	    }
	    dataArr = JSON.parse(data);
	    content = nj.array(dataArr);
	    updateColor(content);   // Update the visual
	});
}

function imfeaturetrain(image, posture) {
	w = image.shape[0];
	h = image.shape[1];
	l = image.shape[2];
	// features = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, w, l, posture];
	features = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, posture];
	var i, j, k;
	for(i = 0; i < 12; i++) { // Height
		// Sum each slice at level Z
		for(j = 0; j < w; j++) { // Width
			for(k = 0; k < l; k++) { // Length
				var val = image.get(j, i, k);
				features[i] += val;
			}
		}
	}
	return features;
}

function imfeature(image) {
	w = image.shape[0];
	h = image.shape[1];
	l = image.shape[2];
	// features = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, w, l];
	features = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var i, j, k;
	for(i = 0; i < 12; i++) { // Height
		// Sum at Z
		for(j = 0; j < w; j++) { // Width
			for(k = 0; k < l; k++) { // Length
				var val = image.get(j, i, k);
				features[i] += val;
			}
		}
	}
	return features;
}

function predictPosture(image) {
	var features = imfeature(image);
	var clf = new Brain();
	var prediction = clf.predict(features);
	return prediction;
}