chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if(request.action === 'openPopup') {
    const selectedText = request.selectedText;
    const x = request.x;
    const y = request.y;
    const screenWidth = request.screenWidth;
    const screenHeight = request.screenHeight;
    const popupWidth = 400;
    const popupHeight = 300;

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        text: selectedText
      }
    };

    // 计算窗口合适的位置
    const xPosition = Math.min(x, screenWidth - popupWidth);
    const yPosition = Math.min(y, screenHeight - popupHeight);

    chrome.windows.create({
      url: chrome.runtime.getURL(`popup.html?selectedText=${selectedText}`),
      type: 'popup',
      width: popupWidth,
      height: popupHeight,
      top: yPosition + 100,
      left: xPosition
    }, async (window) => {
      // const response = await fetch(
      //   'https://jsonplaceholder.typicode.com/posts',
      // );
      // const posts = await response.json();
      const API_URL = 'http://localhost:3000/openai/translate';
      fetch(API_URL, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(889, data);
        chrome.runtime.sendMessage({
          action: 'showTranslation',
          translation: data
        })
      })
    })
  }
})
