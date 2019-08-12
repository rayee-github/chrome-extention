/*var parent=document.getElementById("div1");
var child=document.getElementById("p1");
parent.removeChild(child);*/

function execute(){
	var element = document.getElementsByTagName('img');

	for (index = element.length - 1; index >= 0; index--) {
		element[index].parentNode.removeChild(element[index]);
	}
}
execute();
setInterval('execute();', 100);//持續0.1秒重新執行一次