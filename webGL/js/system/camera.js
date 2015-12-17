
/***
 * カメラオブジェクト
 * 
 * */
function Camera(){
	
	var Status = {
		'Angle': 75,
		'Aspect': 300/300,
		'Near': 0.1,
		'Far': 100,
		
	};
	
	this.view = null;			// ビューマトリックス
	this.projection = null;		// プロジェクションマトリックス
	this.position = null;		// 座標
	this.rotation = null;		// 回転率
	this.normal = null;			// 法線
	
	this.Init = function(){
		
		this.position = vector3.a(0.0,1.0,3.0);
		this.rotation = vector3.a();
		this.normal = vector3.a(0.0,1.0,0.0);
		
		// マトリックス初期化
		var mtx = new matIV();
		this.view	= mtx.identity(mtx.create());
		this.projection = mtx.identity(mtx.create());
		
		// 画角　アスペクト　ニア　ファー
		mtx.perspective( Status.Angle, Status.Aspect, Status.Near, Status.Far, this.projection);
	}
	
	
	this.Update = function(){
		var mtx = new matIV();
		
		var pos = [this.position.x, this.position.y, this.position.z];
		var rot =  [this.rotation.x, this.rotation.y, this.rotation.z];
		var nor =  [this.normal.x, this.normal.y, this.normal.z];
		
		mtx.lookAt(pos,rot,nor,this.view);
	}
}