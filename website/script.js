const storeBtn = document.getElementById('storeBtn');
const submitBtn = document.getElementById('submitBtn');
const keywordInput = document.getElementById('keyword');
const message = document.getElementById('message');

if (storeBtn) {
  storeBtn.addEventListener('click', () => {
    window.location.href = 'store.html';
  });
}

if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    const word = keywordInput.value.trim().toLowerCase();
    if (word === 'gizli') {
      window.location.href = 'secret.html';
    } else {
      message.textContent = 'Yanlış kelime!';
    }
  });
}
