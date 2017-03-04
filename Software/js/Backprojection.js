class Backprojection {
	constructor(nodes) {
		var numNodes = nodes.shape[0];

		// Total number of unique links
		this.numLinks = (Math.pow(numNodes, 2) - numNodes)/2;
		this.linkArray = [];
		this.linkSetCheck = [];
		this.linksSet = 0;
		this.linkLUT = [];
		var r, b, l = 0;
		for(r = 1; r < numNodes; r++) {
			for(b = 1+r; b <= numNodes; b++) {
				console.log(r + " to " + b);
				var newLink = new Link(nodes.tolist()[r-1], nodes.tolist()[b-1]);
				this.linkArray[l] = newLink;
				this.linkLUT.push([r, b]);
				l++;
			}
		}

		// Create the projection matrix
		this.limX = dim["x"];
		this.limY = dim["y"];
		this.limZ = dim["z"];
	}

	get projection() {
		this.proj = nj.zeros([this.limX, this.limY, this.limZ]);
		var l;
		for(l = 0; l < this.numLinks; l++) {
			this.proj.add(this.linkArray[l].wVoxelSet, false);
		}
		return this.proj;
	}

	// attnValues: Channel,NodeID,tenth,0,0,0,0,0,0,0,0,0,0
	updateLinks(attnValues, calibration) {
		var i;
		var data = attnValues;

		// Convert data to integers
		for(var i = 0; i < data.length; i++) {
			data[i] = parseInt(data[i], 10);
		}

		// Decode
		var chn = data[0];
		var nodeID = data[1];
		var base = (data[2]*10) + 1;

		for(i = 0; i < 10; i++) {
			var to = i + base;
			if(data[i+3] > 0) {
				var attn = data[i+3] - 128;
				var linkIndex = this.getLinkIndex([Math.min(nodeID, to), 
				Math.max(nodeID, to)]);
				if(linkIndex > -1 && this.linkSetCheck.indexOf(linkIndex) == -1) {
					this.linkSetCheck.push(linkIndex);
					this.linksSet++;
					if(calibration == true) {
						this.linkArray[linkIndex].setStaticLoss(attn, chn);
					} else {
						this.linkArray[linkIndex].setAttn(attn, chn);
					}
				}
			}
		}
		if(this.linksSet == this.numLinks) {
			return true;
		} else {
			return false;
		}
	}

	resetLinks() {
		this.linkSetCheck = [];
		this.linksSet = 0;
	}

	// Returns the link index
	getLinkIndex(node) {
		var i;
		for(i = 0; i < this.numLinks; i++) {
			if(this.linkLUT[i][0] == node[0] && this.linkLUT[i][1] == node[1]) {
				return i;
			}
		}
	}
}