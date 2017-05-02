class Link {
	constructor(from, to) {
		this.voxTrav = new VoxelTraversal(from, to, 0.25);
		this.voxMat = this.voxTrav.voxelSet;
		this.attn = 0;
		this.staticLoss = 0;
	}

	setAttn(a) {
		this.attn = a - this.staticLoss;
		if(this.attn > 0) {
			this.attn = 0;
		}
	}

	setStaticLoss(l) {
		this.staticLoss = l;
	}

	get wVoxelSet() {
		var weightedSet = this.voxMat.multiply(this.attn);
		return weightedSet;
	}
}