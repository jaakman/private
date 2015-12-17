function Object3D(){
	this.position = null;
	this.rotation = null;
	this.normal = null;
	this.world = null;
	this.vtx	= null;
	this.shader = null;
	
	
	
	this.Init = function(){
		// 各パラメータ初期化
		this.position = new vector3();
		this.rotation = new vector3();
		this.normal = new vector3();
		
		// マトリックス初期化
		var m = new matIV();
		this.world = m.identity(m.create());
		
		// 頂点座標データ
		var vertex_position = [
			0.0, 1.0, 0.0,
			1.0, 0.0, 0.0,
			-1.0, 0.0, 0.0
		];
		
		// 頂点バッファ作成
		this.vtx = createVertexBuffer(vertex_position);
		
		
		this.shader = new Shader();
		
		// シェーダとプログラムをコンパイル
		this.shader.vertex = this.shader.createShader('vs');
		this.shader.fragment = this.shader.createShader('ps');
		this.shader.program = this.shader.createProgram( this.shader.vertex, this.shader.fragment );
	}
	
	
	/***
	 * 更新処理
	 * 
	 * */
	this.Update = function(){
	}
	
	
	/***
	 * 描画処理
	 * 
	 * */
	this.Render = function(){
		
		var gl = g_rendererGL.device;	// GLデバイス取得
		
		
		// マトリックス計算
		var mtx = new matIV();
		var wvpMtx = mtx.identity(mtx.create());
		var view = g_Camera.view;
		var projection = g_Camera.projection;
		
		mtx.multiply(projection, view, wvpMtx);
		mtx.multiply(wvpMtx, this.world, wvpMtx)
		
		
		// 	頂点バッファ
		gl.bindBuffer( gl.ARRAY_BUFFER, this.vtx );
		
		
		
		// シェーダに送るパラメータを指定
		// 座標
		var attPosition = gl.getAttribLocation( this.shader.program, 'position' );
		// 指定したパラメータを設定
		gl.enableVertexAttribArray( attPosition );
		// シェーダにパラメータを送信
		// 指定パラメータ　配列数 パラメータフォーマット ? ? ?
		gl.vertexAttribPointer( attPosition, 3, gl.FLOAT, false, 0, 0 );
		// オブジェクトの座標変換
		var uni = gl.getUniformLocation( this.shader.program, 'wvpMatrix' );
		gl.uniformMatrix4fv( uni, false, wvpMtx );
		
		
		// ポリゴン描画
		// フォーマット　インデックス数	頂点数
		gl.drawArrays(gl.TRIANGLES, 0, 3);
	}
}