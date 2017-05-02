class Backprojection {
	constructor(nodes) {
		var numNodes = nodes.shape[0];

		// Total number of unique links
		this.numLinks = (Math.pow(numNodes, 2) - numNodes)/2;
		this.linkArray = [];
		this.linkSetCheck = [];
		this.linksSet = 0;
		this.nodeStatus = {};
		this.nodeCount = {};
		var c;
		for(c = 1; c <= numNodes; c++) {
			var IDStr = "p" + c.toString();
			this.nodeCount[IDStr] = 0;
		}
		this.linksSetTen = 0;
		this.linkLUT = [];
		this.offset = 0;
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
		var nodeID = data[0];
		var nodeIDStr = attnValues[0];
		var base = (data[1]*10) + 1;
		var dataoffset = data[1];
		var validAttnCount = 0;
		var nodeCountID = "p"+nodeIDStr;
		this.nodeCount[nodeCountID] += 1;

		if(this.offset == dataoffset) {
			for(i = 0; i < 10; i++) {
				var to = i + base;
				if(data[i+2] > 0) {
					validAttnCount++;
					var attn = data[i+2] - 128;
					var linkIndex = this.getLinkIndex([Math.min(nodeID, to), 
					Math.max(nodeID, to)]);
					if(linkIndex > -1 && this.linkSetCheck.indexOf(linkIndex) == -1) {
						this.linkSetCheck.push(linkIndex);
						this.linksSet++;
						this.linksSetTen++;
						if(calibration == true) {
							this.linkArray[linkIndex].setStaticLoss(attn);
						} else {
							this.linkArray[linkIndex].setAttn(attn);
						}
					}
				}
			}
			// Update node status
			if (this.offset == 0) {
				this.nodeStatus[nodeIDStr] = validAttnCount;
			} else {
				this.nodeStatus[nodeIDStr] = 10 + validAttnCount;
			}
			
		}

		if(this.linksSet == this.numLinks) {
			return -1;
		} else if(this.linksSetTen == 65) {
			this.linksSetTen = 0;
			this.offset++;
			return this.offset;
		}
	}

	resetLinks() {
		this.nodeStatus = {};
		this.linkSetCheck = [];
		this.linksSet = 0;
		this.offset = 0;
		this.linksSetTen = 0;
	}

	getNodeStatus() {
		return this.nodeStatus;
	}

	getNodeCount() {
		return this.nodeCount;
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