window.addEventListener('DOMContentLoaded', () => {
  const buttonForwardFirst = document.getElementById('button__forward');
  if (buttonForwardFirst) {
    buttonForwardFirst.addEventListener('click', () => {
      console.log('[renderer] sending open-home-page');
      window.electronAPI.openHomePage();
    });
  } else {
    console.error('Button not found!');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const buttonNextSecond = document.getElementById('button__next');
  if (buttonNextSecond) {
    buttonNextSecond.addEventListener('click', () => {
      console.log('[renderer] sending open-page3');
      window.electronAPI.openPage3();
    });
  } else {
    console.error('Button not found!');
  }
});