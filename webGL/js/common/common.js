
// メッセージ出力
function ErrorMessage(msg){ console.log('【ERROR】: '+msg); }

// ポインタ破棄
function SAFE_DELETE(p){ if(p){ delete p; return true;} return false; }
function SAFE_RELEASE(p){if(p){ if(p.Uninit()){ delete p; return true; } } return false; }