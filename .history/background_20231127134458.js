chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if(request.action === 'openPopup') {
    const selectedText = request.selectedText;

    chrome.windows.create({
      url: chrome.runtime.getURL(`popup.html?selectedText=${selectedText}`),
      type: 'popup',
      width: 400,
      height: 400
    })
  }
})