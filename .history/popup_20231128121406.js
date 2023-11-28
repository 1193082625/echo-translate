document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const selectedText = params.get('selectedText');
  const textContainer = document.getElementById('selected-container');
  textContainer.innerText = selectedText;
  textContainer.style.display = 'block';


  const appid = '20231127001893208';
  const key = 'jrCQKXBSYsTL8aRLH33r';
  const salt = (new Date).getTime();
  const from = 'auto';
  const to = 'auto';

  const str1 = appid + selectedText + salt + KeyboardEvent;
  const sign = MD5(str1);

  // const aaa = document.getElementById('test-container');
  // fetch('https://fanyi-api.baidu.com/api/trans/vip/translate', {
  //   method: 'GET',
  //   data: {
  //     q: selectedText,
  //     appid: appid,
  //     salt: salt,
  //     from: from,
  //     to: to,
  //     sign: sign
  //   }
  // }).then(response => response.json())
  // .then(data => {
  //   const result = data.trans_result[0].dst;
  //   aaa.innerText = result;
  // }).catch(err => {
  //   aaa.innerText = err;
  // })


  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.action === 'showTranslation') {
      showTranslation(request.translation);
    }
  })

  function showTranslation(translation) {
    const loadingContainer = document.getElementById('loading-container');
    const textContainer = document.getElementById('selected-container');

    // 隐藏加载图标，并且显示结果
    loadingContainer.style.display = 'none';
    textContainer.innerText = translation;
    textContainer.style.display = 'block';
  }
})

window.addEventListener('blur', closePopup);

function closePopup() {
  window.close()
}