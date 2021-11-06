/* We will use declarativeContent to pick which urls are to be blocked
    * Reddit
    * Twitter
    * Instagram
    * Youtube
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
