window.addEventListener('mouseup', () => {
  const selectedText = window.getSelection().toString();
  if(selectedText) {
    chrome.runtime.sendMessage({
      action: 'openPopup',
      selectedText: selectedText,
    })
  }
})