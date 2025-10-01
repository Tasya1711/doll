window.addEventListener('DOMContentLoaded', () => {
  const buttonForwardFourth = document.getElementById('button__forward');
  if (buttonForwardFourth) {
    buttonForwardFourth.addEventListener('click', () => {
      console.log('[renderer] sending back-to-page4-from-page5');
      window.electronAPI.openPage4();
    });
  } else {
    console.log('Button not found!');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const returnButton = document.querySelector('.box-button');

  returnButton.addEventListener('click', () => {
    localStorage.removeItem('skin');
    localStorage.removeItem('hair');
    localStorage.removeItem('outfit');
    localStorage.removeItem('dollName');

    const girlImg = document.getElementById('girlImg');
    girlImg.src = "img/girls/Dark-black-simple.png";

    window.location.href = "index.html";
  });
});
