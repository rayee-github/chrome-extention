window.onload=function (){
	//chrome.tabs.executeScript(null, {file: "js/delete_img.js"});
	document.getElementById("btn").onclick=function(){
		chrome.tabs.executeScript(null, {file: "js/btn.js"});
	};
};


