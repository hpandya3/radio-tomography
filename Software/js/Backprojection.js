class Backprojection {
	constructor(recv, adv) {
		this.numLinks = recv.shape[0]*adv.shape[0];
		this.linkArray = [];
		var r, b, l = 0;
		for(r = 0; r < recv.shape[0]; r++) {
			for(b = 0; b < adv.shape[0]; b++) {
				var newLink = new Link(adv.tolist()[b], recv.tolist()[r]);
				this.linkArray[l] = newLink;
				l++;
			}
		}
		this.limX = dim["x"];
		this.limY = dim["y"];
		this.limZ = dim["z"];
		this.proj = nj.zeros([this.limX, this.limY, this.limZ]);
		for(l = 0; l < this.numLinks; l++) {
			this.proj = this.proj.add(this.linkArray[l].wVoxelSet);
		}
	}

	get projection() {
		return this.proj;
	}

	updateLinks(attnValues) {
		this.proj = nj.zeros([this.limX, this.limY, this.limZ]);
		var l;
		for(l = 0; l < this.numLinks; l++) {
			this.linkArray[l].setAttn(attnValues[l]);
			this.proj = this.proj.add(this.linkArray[l].wVoxelSet);
		}
	}
}