function vector2(x,y){
	this.x = 0.0;
	this.y = 0.0;
	
	if(x != undefined){ this.set(x,y); }
	
	this.set = function(x,y){
		if(y == undefined){
			var vec2 = x;
			this.x = vec2.x;
			this.y = vec2.y;
		}else{
			this.x = x;
			this.y = y;
		}
	}
	
	this.add = function(x,y){
		if(y == undefined){
			var vec2 = x;
			this.x += vec2.x;
			this.y += vec2.y;
		}else{
			this.x += x;
			this.y += y;
		}
	}
	
	this.sub = function(x,y){
		if(y == undefined){
			var vec2 = x;
			this.x -= vec2.x;
			this.y -= vec2.y;
		}else{
			this.x -= x;
			this.y -= y;
		}
	}
	
	
	this.mul = function(x,y){
		if(y == undefined){
			var vec2 = x;
			this.x *= vec2.x;
			this.y *= vec2.y;
		}else{
			this.x *= x;
			this.y *= y;
		}
	}
	
	this.div = function(x,y){
		if(y == undefined){
			var vec2 = x;
			this.x /= vec2.x;
			this.y /= vec2.y;
		}else{
			this.x /= x;
			this.y /= y;
		}
	}
}

function vector3(x, y, z){
	this.x =0.0;
	this.y = 0.0;
	this.z = 0.0;
	
	if(x != undefined){ this.set(x,y,z); }
	
	this.set = function(x,y,z){
		
		if(y == undefined && z == undefined){
			var vec3 = x;
			this.x = vec3.x;
			this.y = vec3.y;
			this.z = vec3.z;
		}else{
			this.x = x;
			this.y = y;
			this.z = z;
		}
	}
	
	this.add = function(x,y,z){
		
		if(y == undefined && z == undefined){
			var vec3 = x;
			this.x += vec3.x;
			this.y += vec3.y;
			this.z += vec3.z;
		}else{
			this.x += x;
			this.y += y;
			this.z += z;
		}
	}
	
	this.sub = function(x,y,z){
		
		if(y == undefined && z == undefined){
			var vec3 = x;
			this.x -= vec3.x;
			this.y -= vec3.y;
			this.z -= vec3.z;
		}else{
			this.x -= x;
			this.y -= y;
			this.z -= z;
		}
	}
	
	this.mul = function(x,y,z){
		
		if(y == undefined && z == undefined){
			var vec3 = x;
			this.x *= vec3.x;
			this.y *= vec3.y;
			this.z *= vec3.z;
		}else{
			this.x *= x;
			this.y *= y;
			this.z *= z;
		}
	}
	
	this.div = function(x,y,z){
		
		if(y == undefined && z == undefined){
			var vec3 = x;
			this.x /= vec3.x;
			this.y /= vec3.y;
			this.z /= vec3.z;
		}else{
			this.x /= x;
			this.y /= y;
			this.z /= z;
		}
	}
	
}



function vector4(x, y, z,w){
	this.x =0.0;
	this.y = 0.0;
	this.z = 0.0;
	this.w = 0.0;
	
	if(x != undefined){ this.set(x,y,z,w); }
	
	this.set = function(x,y,z,w){
		
		if(z == undefined && w == undefined){
			
			if( y == undefined ){
				var vec4 = x;
				this.x = vec4.x;
				this.y = vec4.y;
				this.z = vec4.z;
				this.w = vec4.w;
			}else{
				var vec3 = x;
				this.x = vec3.x;
				this.y = vec3.y;
				this.z = vec3.z;
				this.w = y;
			}
			
		}else{
			this.x = x;
			this.y = y;
			this.z = z;
			this.w = w;
		}
	}
	
	this.add = function(x,y,z,w){
		
		if(z == undefined && w == undefined){
			
			if( y == undefined ){
				var vec4 = x;
				this.x += vec4.x;
				this.y += vec4.y;
				this.z += vec4.z;
				this.w += vec4.w;
			}else{
				var vec3 = x;
				this.x += vec3.x;
				this.y += vec3.y;
				this.z += vec3.z;
				this.w += y;
			}
			
		}else{
			this.x += x;
			this.y += y;
			this.z += z;
			this.w += w;
		}
	}
	
	
	
	this.sub = function(x,y,z,w){
		
		if(z == undefined && w == undefined){
			
			if( y == undefined ){
				var vec4 = x;
				this.x -= vec4.x;
				this.y -= vec4.y;
				this.z -= vec4.z;
				this.w -= vec4.w;
			}else{
				var vec3 = x;
				this.x -= vec3.x;
				this.y -= vec3.y;
				this.z -= vec3.z;
				this.w -= y;
			}
			
		}else{
			this.x -= x;
			this.y -= y;
			this.z -= z;
			this.w -= w;
		}
	}
	
	
	this.mul = function(x,y,z,w){
		
		if(z == undefined && w == undefined){
			
			if( y == undefined ){
				var vec4 = x;
				this.x *= vec4.x;
				this.y *= vec4.y;
				this.z *= vec4.z;
				this.w *= vec4.w;
			}else{
				var vec3 = x;
				this.x *= vec3.x;
				this.y *= vec3.y;
				this.z *= vec3.z;
				this.w *= y;
			}
			
		}else{
			this.x *= x;
			this.y *= y;
			this.z *= z;
			this.w *= w;
		}
	}
	
	
	this.div = function(x,y,z,w){
		
		if(z == undefined && w == undefined){
			
			if( y == undefined ){
				var vec4 = x;
				this.x /= vec4.x;
				this.y /= vec4.y;
				this.z /= vec4.z;
				this.w /= vec4.w;
			}else{
				var vec3 = x;
				this.x /= vec3.x;
				this.y /= vec3.y;
				this.z /= vec3.z;
				this.w /= y;
			}
			
		}else{
			this.x /= x;
			this.y /= y;
			this.z /= z;
			this.w /= w;
		}
	}
	
}


function mtx3(x,y){
	this._11 = 0.0;this._12 = 0.0;this._13 = 0.0;
	this._21 = 0.0;this._22 = 0.0;this._23 = 0.0;
	this._31 = 0.0;this._32 = 0.0;this._33 = 0.0;
	
	
	this.set = function(x,y){
		
	}
}