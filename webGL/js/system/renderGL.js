function RendererGL(){
	
	this.device;
	
	this.Init = function(){
		var ctext = document.getElementById('canvas');
		
		// スクリーンサイズ指定
		ctext.width = 300;
		ctext.height = 300;
		
		// コンテキスト取得
		var gl = ctext.getContext('webgl') || ctext.getContext('experimental-webgl');
		
		// canvasを黒でクリア
		gl.clearColor(0,0,0,1);
		gl.clear(gl.COLOR_BUFFER_BIT);
		
		this.device = gl;
	}
	
	this.Uninit = function(){
		
	}
	
	this.Render = function(){
		 this.device.flush();
	}
}


RendererGL.Create = function(){
	var ptr = new RendererGL();
	ptr.Init();
	return ptr;
}