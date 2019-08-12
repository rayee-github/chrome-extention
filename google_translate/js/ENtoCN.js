var mx,my;
document.addEventListener("mousemove", function (e){
  mx=e.clientX; 
  my=e.clientY; 
  if(element = document.getElementById("gjejwerjjp"))
  {
    var x = mx + document.documentElement.scrollLeft + 10;
    var y = my + document.documentElement.scrollTop + 10;
    
    element.style.left = x + "px";
    element.style.top = y + "px";
  }
});

function create_btn(value)
{
  if(element = document.getElementById("gjejwerjjp"))
  {
    element.innerHTML = value;
  }
  else
  {
	var btn=document.createElement("BUTTON");
    btn.innerHTML = value;
    btn.id = "gjejwerjjp";
    var x = mx + document.documentElement.scrollLeft + 10;
    var y = my + document.documentElement.scrollTop + 10;
    
    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
    btn.style.display = "block";
    document.body.appendChild(btn);
  }
}

function delete_btn()
{
  if(element = document.getElementById("gjejwerjjp"))
    element.parentNode.removeChild(element);
}

function json_parse(string)
{
  var obj = eval("(" + string + ")");
  var value = obj.translateResult[0][0].tgt;
  create_btn(value);
}

var LastSentence='';
function GetSelectText()
{
  var t='';
  if(window.getSelection){t=window.getSelection();}
  else if(document.getSelection){t=document.getSelection();}
  else if(window.document.selection){t=window.document.selection.createRange().text;}
  
  if(t!='')
  {
	if(LastSentence!=t.toString())
	{
	  chrome.runtime.sendMessage({contentScriptQuery: "query",language:"EN2ZH_CN", text: t.toString()},string => json_parse(string));
	}
	LastSentence = t.toString();
  }
  else
  {
	delete_btn();
	LastSentence='';
  }
}

setInterval('GetSelectText();', 1000);//持續1秒重新執行一次