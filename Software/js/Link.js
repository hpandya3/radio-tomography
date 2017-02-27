class Link {
	constructor(from, to) {
		this.voxTrav = new VoxelTraversal(from, to, 0.25);
		this.voxMat = this.voxTrav.voxelSet;
		this.attn = 1;
	}

	setAttn(a) {
		this.attn = a;
	}

	getAttn() {
		return this.attn;
	}

	get wVoxelSet() {
		var weightedSet = this.voxMat.multiply(this.attn);
		return weightedSet;
	}
}