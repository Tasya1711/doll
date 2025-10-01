const func = async () => {
  const response = await window.versions.ping();
  console.log(response);
};

window.addEventListener('DOMContentLoaded', () => {
  const buttonNextFirst = document.getElementById('button__next');
  if (buttonNextFirst) {
    buttonNextFirst.addEventListener('click', () => {
      console.log('[renderer] sending open-page2');
      window.electronAPI.openPage2();
    });
  } else {
    console.error('Button not found!');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name');
  const submitBtn = document.getElementById('submit');

  submitBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
      localStorage.setItem('dollName', name);
      alert(`Name saved: ${name}`);
    } else {
      alert('Please enter a name');
    }
  });
});
