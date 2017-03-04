class Link {
	constructor(from, to) {
		this.voxTrav = new VoxelTraversal(from, to, 0.25);
		this.voxMat = this.voxTrav.voxelSet;
		this.attnOne = 0;
		this.attnTwo = 0;
		this.attnFour = 0;
		this.staticLossOne = 0;
		this.staticLossTwo = 0;
		this.staticLossFour = 0;
		this.staticLossLow = 0;
	}

	setAttn(a, chn) {
		if(chn == 1) { 			// Channel: 37
			this.attnOne = a - this.staticLossLow;
			if(this.attnOne > 0) {
				this.attnOne = 0;
			}
		} else if(chn == 2) { 	// Channel: 38
			this.attnTwo = a - this.staticLossLow;
			if(this.attnTwo > 0) {
				this.attnTwo = 0;
			}
		} else if(chn == 4) {	// Channel: 39
			this.attnFour = a - this.staticLossLow;
			if(this.attnFour > 0) {
				this.attnFour = 0;
			}

		}
	}

	setStaticLoss(l, chn) {
		if(chn == 1) { 			// Channel: 37
			this.staticLossOne = l;
		} else if(chn == 2) { 	// Channel: 38
			this.staticLossTwo = l;
		} else if(chn == 4) {	// Channel: 39
			this.staticLossFour = l;
		}
		// Find the minimum of attenuation (Assuming minimum fading loss)
		this.staticLossLow = Math.max(this.staticLossOne, this.staticLossTwo, this.staticLossFour);
	}

	get wVoxelSet() {
		// Find the minimum of attenuation (Assuming minimum fading loss)
		var minAttn = Math.max(this.attnOne, this.attnTwo, this.attnFour);
		var weightedSet = this.voxMat.multiply(minAttn);
		return weightedSet;
	}
}