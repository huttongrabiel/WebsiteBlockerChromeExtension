/* This JS file is NOT NEEDED for the extension
but I will be leaving it here since I may want to
use it for some other piece of this extension
*/


var rule2 = {
  conditions: [
    new chrome.declarativeWebRequest.RequestMatcher({
      pageUrl: { hostSuffix: 'reddit.com' }
    })
  ],
  actions: [
    new chrome.declarativeWebRequest.CancelRequest() 
  ]
};

//chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeWebRequest.onRequest.addRules([rule2]);
//});
