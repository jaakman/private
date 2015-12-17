function Camera(){
	this.view = null;			// ビューマトリックス
	this.projection = null;		// プロジェクションマトリックス
	this.world  = null;			// ワールドビューマトリックス
	this.wvpMtx = null;		// ワールドビュープロジェクションマトリックス
	this.position = null;		// 座標
	this.rotation = null;		// 回転率
	this.normal = null;			// 法線
	
	this.Init = function(){
		
		this.position = new vector3(0.0,1.0,3.0);
		this.rotation = new vector3();
		this.normal = new vector3(0.0,1.0,0.0);
		
		// 処理用マトリックス生成
		var mtx = new matIV();
		// マトリックス初期化
		this.world = mtx.identity(mtx.create());
		this.view	= mtx.identity(mtx.create());
		this.projection = mtx.identity(mtx.create());
		this.mvpMtx = mtx.identity(mtx.create());
		
		var pos = [this.position.x, this.position.y, this.position.z];
		var rot =  [this.rotation.x, this.rotation.y, this.rotation.z];
		var nor =  [this.normal.x, this.normal.y, this.normal.z];
		
		mtx.lookAt(pos,rot,nor,this.view);
		var c = document.getElementById('canvas');
		// 画角　アスペクト　ニア　ファー
		mtx.perspective(75, c.width/c.height, 0.1, 100, this.projection);
		
		mtx.multiply(this.projection, this.view, this.wvpMtx);
		mtx.multiply(this.wvpMtx, this.world, this.wvpMtx);
		
	}
	
	
	this.Render = function(){
		var mtx = new matIV();
		
		mtx.multiply(this.projection, this.view, this.wvpMtx);
		mtx.multiply(this.wvpMtx, this.world, this.wvpMtx);
		
		/*** ??? これはデバイスで処理の方がわかりやすい? ****/
		var gl = g_rendererGL.device;
		var uniLocation = gl.getUniformLoction( g_shader.program, 'wvpMtx');
		
		// uniformLocationへ座標変換行列を登録
		gl.uniformMatrix4fv(uniLocation, false, this.wvpMtx);
	}
}