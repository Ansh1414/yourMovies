// Listen for the call to change the icon
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.newIconPath.length) {
			 chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon.png',
    title: 'Hello',
    message: 'Your background script is running!',
    priority: 2
  });
			// read `newIconPath` from request and read `tab.id` from sender
		    chrome.browserAction.setIcon({
		    	path: request.newIconPath,
		    	tabId: sender.tab.id
		    });
		}
	}
);
