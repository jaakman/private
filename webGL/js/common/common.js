
// メッセージ出力
function ErrorMessage(msg){ console.log('【ERROR】: '+msg); }

// ポインタ破棄
function SAFE_DELETE(p){ if(p){ delete p; return true;} return false; }
function SAFE_RELEASE(p){if(p){ if(p.Uninit()){ delete p; return true; } } return false; }




function createVBO( data ){
	var gl = g_renererGL;
	var vbo = gl.createBuffer();
	
	gl.bindBuffer( gl.ARRAY_BUFFER, vbo );
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAM );
	
	gl.bindBuffer( gl.ARRAY_BUFFER, null );
	
	return vbo;
	
}