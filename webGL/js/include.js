var TYPE = {
	"JS": 0, 
	"CSS": 1,
	"VS": 2,
	"PS": 3,
	"FS": 4
};

var SRCTYPE = {
	0: 'text/javascript',
	1: 'text/css',
	2: 'x-shader/x-vertex',
	3: 'x-shader/x-fragment',
	4: 'x-shader/x-fragment',
};

var SRCDIR = {
	0: 'js/',
	1: 'css/',
	2: 'GLSL/vs/',
	3: 'GLSL/fs/',
	4: 'GLSL/fs/',	
};



/***
 * インクルードするファイル配列
 * 
 * [ソースのパス,ソースのタイプ,ID]
 * IDは入力がない場合設定されません
 * 登録した順番に読み込まれます
 * */
var g_srcfiles = [
	['common/common.js', TYPE.JS],
	['common/myMath.js', TYPE.JS],
	['common/glib.js', TYPE.JS],
	['common/minMatrix.js', TYPE.JS],
	['system/renderGL.js', TYPE.JS],
	['system/camera.js', TYPE.JS],
	['system/shader.js', TYPE.JS],
	['object/object3d.js', TYPE.JS],	
	['main.js', TYPE.JS]
];



/***
 * 単体ファイルのインクルード
 * 
 * @param	path	ソースのパス
 * @param	type	ソースのタイプ
 * @param	id			ソースの認識ID(任意)
 * @return	boolen
 * */
function Include(path,type,id){
	var fullpath = SRCDIR[ type ] + path;		// ソースのフルパス
	
	// インクルード済みチェック
	if( isIncluded( fullpath )){ 
		// ワーニング出力
		console.log('%cWARINING: '+fullpath+' has already been Included.', 'color:orange');
		return false;		// インクルード済みなのでインクルード失敗
	 }
	
	// ヘッドタグを取得
	var head = document.getElementsByTagName('head')[0];
	
	// スクリプトエレメント作成
	var script = document.createElement('script');
	script.src = fullpath;						// ソース
	script.type = SRCTYPE[ type ];		// タイプ
	if( id ){ script.id = id.toString(); }	// ID	undefindの場合適用しない
	
	// ヘッドタグの子に登録
	head.appendChild(script);
	
	return true;	// インクルードに成功
}


/****
 * 複数ファイルを一度にインクルード
 * @param	files	ソースファイルのフォーマットに適した配列
 * */
function Includes(files){
	// 配列数ループ
	for( var cnt=0; cnt < files.length; cnt++ ){
		var file = files[cnt];
		// インクルード
		Include(file[0],file[1],file[2]);
	}
}


/***
 * インクルード済みの判定
 * 
 * @param fullpath		ソースのフルパス
 * @return 	boolen
 * */
function isIncluded(fullpath){
	// 全てのスクリプトタグを取得
	var scripts = document.getElementsByTagName('script');
	// スクリプトタグ数ループ
	for(var cnt = 0; cnt < scripts.length; cnt++ ){
		var script = scripts[cnt];
		
		// ソースが存在(インクルードファイルで在る)
		if(script.src){
			// 引数と一致していれば true 
			if(script.src.match(fullpath)){ return true; }
		 }
	}
	return false;
}