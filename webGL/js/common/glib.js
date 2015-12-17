


function createVertexBuffer(data){
	var gl = g_rendererGL.device;
	
	var vtx = gl.createBuffer();
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vtx);
	
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
	
	gl.bindBuffer( gl.ARRAY_BUFFER, null);
	
	return vtx;
}