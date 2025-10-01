window.addEventListener('DOMContentLoaded', () => {
  const buttonForwardThird = document.getElementById('button__forward');
  if (buttonForwardThird) {
    buttonForwardThird.addEventListener('click', () => {
      console.log('[renderer] sending back-to-page3-from-page4');
      window.electronAPI.openPage3();
    });
  } else {
    console.log('Button not found!');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const buttonNextFourth = document.getElementById('button__next');
  if (buttonNextFourth) {
    buttonNextFourth.addEventListener('click', () => {
      console.log('[renderer] sending open-page5');
      window.electronAPI.openPage5();
    });
  } else {
    console.log('Button not found!');
  }
});