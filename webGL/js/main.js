var g_renererGL = null;

window.onload = main;



function main(){
	Init();
}


function Init(){
	g_renererGL = RendererGL.Create();
}