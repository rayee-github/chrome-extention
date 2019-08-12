window.onload=function (){
	//chrome.tabs.executeScript(null, {file: "js/delete_img.js"});
	document.getElementById("create_btn").onclick=function(){
		chrome.tabs.executeScript(null, {file: "js/create_btn.js"});
	};
	
	document.getElementById("delete_img").onclick=function(){
		chrome.tabs.executeScript(null, {file: "js/delete_img.js"});
	};
	
	document.getElementById("delete_iframe").onclick=function(){
		chrome.tabs.executeScript(null, {file: "js/delete_iframe.js"});
	};
};


