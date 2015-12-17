


function create_vbo(data){
	var gl = g_rendererGL.device;
	
	var vbo = gl.createBuffer();
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
	
	gl.bindBuffer( gl.ARRAY_BUFFER, null);
	
	return vbo;
}