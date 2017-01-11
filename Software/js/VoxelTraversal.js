class VoxelTraversal {
	constructor(limX, limY, limZ) {
		this.limX = limX;
		this.limY = limY;
		this.limZ = limZ;
	}
	
	getVoxels(from, to) {
		// Initialisation
		this.voxels = nj.array([]);
		this.fromX = from.get(0);
		this.fromY = from.get(1);
		this.fromZ = from.get(2);

		this.toX = to.get(0);
		this.toY = to.get(1);
		this.toZ = to.get(2);

		this.stepX = this.step(this.fromX, this.toX);
		this.stepY = this.step(this.fromY, this.toY);
		this.stepZ = this.step(this.fromZ, this.toZ);

		this.length = Math.sqrt(Math.pow(this.toX - this.fromX, 2) + 
			Math.pow(this.toY - this.fromY, 2) + 
			Math.pow(this.toZ - this.fromZ, 2));

		this.deltaX = this.length/Math.abs(this.toX - this.fromX);
		this.deltaY = this.length/Math.abs(this.toY - this.fromY);
		this.deltaZ = this.length/Math.abs(this.toZ - this.fromZ);

		// No offset at origin
		this.maxX = this.deltaX/2;
		this.maxY = this.deltaY/2;
		this.maxZ = this.deltaZ/2;

		console.log(this.deltaX);
		console.log(this.deltaY);
		console.log(this.deltaZ);

		this.X = this.fromX;
		this.Y = this.fromY;
		this.Z = this.fromZ;

		this.voxNum = 0;
		do {
			console.log("X: ", this.X, "Y: ", this.Y, "Z: ", this.Z);

			this.voxel = nj.array([this.X, this.Y, this.Z]);
			this.voxels.set(this.voxNum, this.voxel);
		    if(this.maxX < this.maxY) {
		    	if(this.maxX < this.maxZ) {
			    	this.X += this.stepX;
			    	this.maxX += this.deltaX;
			    	if (this.checkBounds(this.X, this.toX, 
			    		this.stepX)) {
			    		break;
			    	}
			    } else {
			    	this.Z += this.stepZ;
			    	this.maxZ += this.deltaZ;
			    	if (this.checkBounds(this.Z, this.toZ, 
			    		this.stepZ)) {
			    		break;
			    	}
			    }
			} else {
				if(this.maxY < this.maxZ) {
			    	this.Y += this.stepY;
			    	this.maxY += this.deltaY;
			    	if (this.checkBounds(this.Y, this.toY, 
			    		this.stepY)) {
			    		break;
			    	}
			    } else {
			    	this.Z += this.stepZ;
			    	this.maxZ += this.deltaZ;
			    	if (this.checkBounds(this.Z, this.toZ, 
			    		this.stepZ)) {
			    		break;
			    	}
			    }
			}
			this.voxNum++;
		} while (1);
		return this.voxels;
	}

	step(from, to) {
		var s = 0;
		if(from > to) {
			s = -1;
		} else if(from < to) {
			s = 1;
		}
		return s;
	}

	checkBounds(value, to, step) {
		if(step == -1) {
			if(value < to) {
				return true;
			}
		} else if(step == 1) {
			if(value > to) {
				return true;
			}
		} else {
			return false;
		}
	}
}