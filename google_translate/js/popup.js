window.onload=function (){
	document.getElementById("ENtoCN").onclick=function(){
		chrome.tabs.executeScript(null, {file: "js/ENtoCN.js"});
	};
	document.getElementById("CNtoEN").onclick=function(){
		chrome.tabs.executeScript(null, {file: "js/CNtoEN.js"});
	};
};