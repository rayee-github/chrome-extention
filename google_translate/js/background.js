chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.contentScriptQuery == "query") {
      var url = "http://fanyi.youdao.com/translate?&doctype=json&type=" + request.language + "&i=" + request.text;
      fetch(url)
	    .then(response => response.text())
        .then(string => sendResponse(string))
      return true;  // Will respond asynchronously.
    }
  });