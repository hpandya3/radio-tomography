class VoxelTraversal {
	constructor(limX, limY, limZ) {
		this.limX = limX;
		this.limY = limY;
		this.limZ = limZ;
	}
	
	getVoxels(from, to, ellipWidth) {
		// Initialisation
		this.w = nj.zeros([this.limX, this.limY, this.limZ]);
		this.eWidth = ellipWidth;
		this.from = from;
		this.fromX = from.get(0);
		this.fromY = from.get(1);
		this.fromZ = from.get(2);

		this.to = to;
		this.toX = to.get(0);
		this.toY = to.get(1);
		this.toZ = to.get(2);

		this.stepX = this.step(this.fromX, this.toX);
		this.stepY = this.step(this.fromY, this.toY);
		this.stepZ = this.step(this.fromZ, this.toZ);

		this.length = this.findDistance(this.fromX, this.fromY, 
			this.fromZ, this.toX, this.toY, this.toZ);
		this.wg = 1/Math.sqrt(this.length); // Weight

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
		this.checkEllipsoid(this.X, this.Y, this.Z);
		this.voxNum = 0;
		do {
			//console.log("X: ", this.X, "Y: ", this.Y, "Z: ", this.Z);
			this.w.set(this.X-1, this.Y-1, this.Z-1, this.wg);
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
		return this.w;
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

	// Returns  true if end of line
	// 			false otherwise
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

	checkEllipsoid(x, y, z) {
		if(this.w.get(x-1, y-1, z-1) == this.wg) {
			return;
		}
		// Distance from point to start of the line
		var dOne = this.findDistance(x, y, z, this.fromX, 
			this.fromY, this.fromZ);

		// Distance from point to end of the line
		var dTwo = this.findDistance(x, y, z, this.toX, 
			this.toY, this.toZ);

		if((dOne + dTwo) < (this.length + this.eWidth)) {
			this.w.set(x-1, y-1, z-1, this.wg);
			//console.log("Ellipsoid X: ", x, "Y: ", y, "Z: ", z);

			// Checking all directions
			// Positive movement
			if(!this.checkBorder(x, y, z+1)) {
				this.checkEllipsoid(x, y, z+1);
			} 
			if(!this.checkBorder(x, y+1, z)) {
				this.checkEllipsoid(x, y+1, z);
			} 
			if(!this.checkBorder(x, y+1, z+1)) {
				this.checkEllipsoid(x, y+1, z+1);
			} 
			if(!this.checkBorder(x+1, y, z)) {
				this.checkEllipsoid(x+1, y, z);
			} 
			if(!this.checkBorder(x+1, y, z+1)) {
				this.checkEllipsoid(x+1, y, z+1);
			} 
			if(!this.checkBorder(x+1, y+1, z)) {
				this.checkEllipsoid(x+1, y+1, z);
			} 
			if(!this.checkBorder(x+1, y+1, z+1)) {
				this.checkEllipsoid(x+1, y+1, z+1);
			}
			// Negative movement
			if(!this.checkBorder(x, y, z-1)) {
				this.checkEllipsoid(x, y, z-1);
			} 
			if(!this.checkBorder(x, y-1, z)) {
				this.checkEllipsoid(x, y-1, z);
			} 
			if(!this.checkBorder(x, y-1, z-1)) {
				this.checkEllipsoid(x, y-1, z-1);
			} 
			if(!this.checkBorder(x-1, y, z)) {
				this.checkEllipsoid(x-1, y, z);
			} 
			if(!this.checkBorder(x-1, y, z-1)) {
				this.checkEllipsoid(x-1, y, z-1);
			} 
			if(!this.checkBorder(x-1, y-1, z)) {
				this.checkEllipsoid(x-1, y-1, z);
			} 
			if(!this.checkBorder(x-1, y-1, z-1)) {
				this.checkEllipsoid(x-1, y-1, z-1);
			}
			return;
		} else {
			return;
		}
	}

	findDistance(fX, fY, fZ, tX, tY, tZ) {
		return Math.sqrt(Math.pow(tX - fX, 2) + 
			Math.pow(tY - fY, 2) + 
			Math.pow(tZ - fZ, 2));
	}

	// Returns  true if past the border of the cube
	// 			false otherwise
	checkBorder(x, y, z) {
		if(x > this.limX || x < 1) {
			return true;
		} else if(y > this.limY || y < 1) {
			return true;
		} else if(z > this.limZ || z < 1) {
			return true;
		} else {
			return false;
		}
	}
}