var endFlipFoxkeh = function(){
var foxkeh = document.querySelector("#slidein-foxkeh img");
foxkeh.removeEventListener("animationend", endFlipFoxkeh);


foxkeh.setAttribute("class", "");
};
フォクスケの直近のイベント、アニメーション（フリップ）を受け、それが終わるというルールを定めているイベントハンドラがある。
イメージも具体的に指定されている。
クラス属性が指定されていないのは、もうここで動作は終了するから。


var endSlideinFoxkehAndStartFlipFoxkeh = function(){
var foxkeh = document.querySelector("#slidein-foxkeh img");

スライドインというイベントを終了させ、その後にフリップするというルールを定めている。
イメージも具体的に指定されている。

foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
foxkeh.addEventListener("animationend", endFlipFoxkeh);

foxkeh.setAttribute("class", "flip");
};
クラス属性として指定されているフリップ（＝アニメーション）が起こると、イベントリスナーがそれを受けフォクスケを回転させる。
そして、このアニメーションが完了されるとこのイベントリスナーが取り除かれ、フリップが開始される。


var startSlideinFoxkeh = function(){
var foxkeh = document.querySelector("#slidein-foxkeh img");
foxkeh.setAttribute("class", "slidein");

クラス属性として指定されているスライドインが開始される。
イメージも具体的に指定されている。

foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
イベントリスナーが、直近のアニメーション（スライドイン）を終了させ、回転を開始する。
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);

イベント（クリック）を受け、スライドインが始まるというルールを定めているイベントハンドラがある。
スライドインフォクスケボタンにより一連の動作が始まることがクエリーセレクターにより決められている。
