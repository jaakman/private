function Shader(){
	this.vertex = null;
	this.fragment = null;
	this.program = null;
	
	this.Init = function(id){}
	
	
	/***
	 * シェーダーをコンパイルする
	 * @param id	シェーダのid
	 * */
	this.createShader = function(id){
		var shader;
		var gl = g_rendererGL.device;
		
		// シェーダを取得
		var scriptElement = document.getElementById(id);
		
		// シェーダが存在しない場合抜ける
		if(!scriptElement){return;}
		
		
		// シェーダータイプをチェック
		switch(scriptElement.type){
			
			// 頂点シェーダの場合
			case 'x-shader/x-vertex':
			shader = gl.createShader(gl.VERTEX_SHADER);
			break;
			
			// フラグメントシェーダの場合
			case 'x-shader/x-fragment':
			shader = gl.createShader(gl.FRAGMENT_SHADER);
			break;
			
			
			default :
			return;
		}
		
		// 生成したシェーダにソースを割り当て
		gl.shaderSource( shader, scriptElement.textContent );
		// シェーダをコンパイル
		gl.compileShader(shader);
		
		// コンパイルチェック
		if(gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
			// 成功の場合シェーダを返す
			return shader;
		}else{
			// 失敗の場合エラーログをアラートで出力
			alert(gl.getShaderInfoLog(shader));
		}
	}
	
	/****
	 * シェーダの計算を行う
	 * @param	vs	頂点シェーダポインタ
	 * @param	fs	フラグメントシェーダポインタ
	 * */
	this.createProgram = function(vs, fs){
		var gl = g_rendererGL.device;
		// プログラムオブジェ作成
		var prg = gl.createProgram();
		
		// プログラムオブジェにシェーダ割り当て
		gl.attachShader(prg, vs);
		gl.attachShader(prg, fs);
		
		// シェーダをリンク
		gl.linkProgram(prg);
		
		// シェーダのリンクチェック
		if(gl.getProgramParameter( prg, gl.LINK_STATUS)){
			// 成功の場合シェーダを有効
			gl.useProgram(prg);
			// プログラムオブジェを返す
			return prg;
		}else{
			// 失敗の場合はアラートでログを表示
			alert( gl.getProgramInfoLog(prg));
		}
	}
	
	
	
}


