document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const selectedText = params.get('selectedText');
  const textContainer = document.getElementById('selected-text');
  textContainer.innerText = selectedText;
})