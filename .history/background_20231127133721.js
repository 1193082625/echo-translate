chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if(request.action === 'openPopup') {
    chrome.windows.create({
      url: chrome.runtime.getURL('popup.html'),
      type: 'popup',
      width: 400,
      height: 400
    })
  }
})