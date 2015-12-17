var g_rendererGL = null;
var g_shader = null;
window.onload = main;



function main(){
	Init();
}


function Init(){
	g_rendererGL = RendererGL.Create();
	var gl = g_rendererGL.device;
	
	var shader = new Shader();
	shader.vtxshader = shader.createShader('vs');
	shader.frgshader = shader.createShader('ps');
	shader.program = shader.createProgram(shader.vtxshader,shader.frgshader);
	
	var attLocation = gl.getAttribLocation( shader.program,'position');
	
	var attStride = 3;
	
	var vertex_position = [
         0.0, 1.0, 0.0,
         1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0
    ];
	
	var vbo = create_vbo(vertex_position);
	
	gl.bindBuffer( gl.ARRAY_BUFFER, vbo );
	gl.enableVertexAttribArray( attLocation );
	gl.vertexAttribPointer( attLocation, attStride, gl.FLOAT, false, 0, 0 );
	
	var m = new matIV();
	
	// 各種行列の生成と初期化
    var mMatrix = m.identity(m.create());
    var vMatrix = m.identity(m.create());
    var pMatrix = m.identity(m.create());
    var mvpMatrix = m.identity(m.create());
    
    // ビュー座標変換行列
    m.lookAt([0.0, 1.0, 3.0], [0, 0, 0], [0, 1, 0], vMatrix);
    var c = document.getElementById('canvas');
    // プロジェクション座標変換行列
    m.perspective(90, c.width / c.height, 0.1, 100, pMatrix);
    
    // 各行列を掛け合わせ座標変換行列を完成させる
    m.multiply(pMatrix, vMatrix, mvpMatrix);
    m.multiply(mvpMatrix, mMatrix, mvpMatrix);
    
    // uniformLocationの取得
    var uniLocation = gl.getUniformLocation(shader.program, 'mvpMatrix');
    
    // uniformLocationへ座標変換行列を登録
    gl.uniformMatrix4fv(uniLocation, false, mvpMatrix);
    
    // モデルの描画
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    
    // コンテキストの再描画
    gl.flush();
}