window.addEventListener('mouseup', () => {
  chrome.runtime.sendMessage({
    action: 'openPopup'
  })
})