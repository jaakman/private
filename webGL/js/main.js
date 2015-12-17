var g_rendererGL = null;
var g_Camera = null;
window.onload = main;



function main(){
	Init();
}


function Init(){
	g_rendererGL = RendererGL.Create();
	var gl = g_rendererGL.device;
	
    g_Camera = new Camera();
    var camera = g_Camera;
    camera.Init();
    
	var object = new Object3D();
    object.Init();
	
    
    /****
     * 更新
     * */
     camera.Update();
     
     
     /****
      * 描画
      */
      object.Render();
          
    // コンテキストの再描画
    gl.flush();
}