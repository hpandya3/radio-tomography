function imthresh(image, threshold) {
	w = image.shape[0];
	h = image.shape[1];
	l = image.shape[2];
	min = image.min();
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

function clearVerticalBorder(data) {
		for(posx = 1; posx <= dim["x"]; posx++) {
			for(posy = 1; posy <= dim["y"]; posy++) {
				for(posz = 1; posz <= dim["z"]; posz++) {
					if(posx == 1 || posx == dim["x"] || posz == 1 || 
						posz == dim["z"]) {
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

function imfeature(thresholded_image, posture) {
	w = thresholded_image.shape[0];
	h = thresholded_image.shape[1];
	l = thresholded_image.shape[2];
	features = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, w, l, posture];
	var i, j, k;
	for(i = 0; i < 13; i++) {
		for(j = 0; j < w; j++) {
			for(k = 0; k < l; k++) {
				var val = thresholded_image.get(j, i, k)
				if (val == 1) {
					features[i] += 1;
				}
			}
		}
	}
	return features;
}