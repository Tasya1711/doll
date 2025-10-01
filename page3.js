window.addEventListener('DOMContentLoaded', () => {
  const buttonForwardSecond = document.getElementById('button__forward');
  if (buttonForwardSecond) {
    buttonForwardSecond.addEventListener('click', () => {
      console.log('[renderer] sending back-to-page2-from-page3');
      window.electronAPI.openPage2();
    });
  } else {
    console.log('Button not found!')
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const buttonNextThird = document.getElementById('button__next');
  if (buttonNextThird) {
    buttonNextThird.addEventListener('click', () => {
      console.log('[renderer] sending open-page4');
      window.electronAPI.openPage4();
    });
  } else {
    console.log('Button not found!');
  }
});