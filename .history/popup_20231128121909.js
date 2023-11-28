document.addEventListener('DOMContentLoaded', () => {
  // 返显选中的数据
  // const params = new URLSearchParams(window.location.search);
  // const selectedText = params.get('selectedText');
  // const textContainer = document.getElementById('selected-container');
  // textContainer.innerText = selectedText;
  // textContainer.style.display = 'block';

  // 显示接口数据
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.action === 'showTranslation') {
      showTranslation(request.translation);
    }
  })

  function showTranslation(translation) {
    const loadingContainer = document.getElementById('loading-container');
    const textContainer = document.getElementById('selected-container');

    // 隐藏加载图标，并且显示结果
    if(loadingContainer) {
      loadingContainer.style.display = 'none';
    }
    textContainer.innerText = translation;
    textContainer.style.display = 'block';
  }
})

window.addEventListener('blur', closePopup);

function closePopup() {
  window.close()
}