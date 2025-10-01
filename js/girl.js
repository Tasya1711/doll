window.addEventListener('DOMContentLoaded', () => {
  const girlImg = document.getElementById('girlImg');

  const skinMap = {
    dark:   "img/girls/Dark-black-simple.png",
    mulatto:"img/girls/Mulatto-black-simple.png",
    light:  "img/girls/Light-black-simple.png"
  };
  const hairMap = {
    black:  "img/girls/Dark-black-simple.png",
    blonde: "img/girls/Dark-blonde-simple.png",
    redhead:    "img/girls/Dark-redhead-simple.png"
  };
  const outfitMap = {
    pink:   "img/girls/Dark-black-pink.png",
    green:  "img/girls/Dark-black-green.png",
    yellow: "img/girls/Dark-black-yellow.png"
  };

  function capitalize(s) { return s ? s[0].toUpperCase() + s.slice(1) : s; }

  function buildCandidatePaths(skin, hair, outfit) {
    const capSkin = capitalize(skin);
    const candidates = [
      `img/girls/${capSkin}-${hair}-${outfit}.png`,
      `img/girls/${skin}-${hair}-${outfit}.png`,
      `img/girls/Girl-${capSkin}-${hair}-${outfit}.png`,
      `img/girls/Girl-${skin}-${hair}-${outfit}.png`,

      `img/girls/${capSkin}-${hair}-simple.png`,
      `img/girls/${capSkin}-${hair}.png`,

      skinMap[skin],
      hairMap[hair],
      outfitMap[outfit]
    ];

    return [...new Set(candidates.filter(Boolean))];
  }

  function tryLoad(paths) {
    if (!paths || !paths.length) {
      console.warn('No candidate image paths provided');
      return;
    }
    let i = 0;
    function next() {
      if (i >= paths.length) {
        console.warn('No image found for any candidate path:', paths);
        girlImg.alt = 'Image not found';
        return;
      }
      const p = paths[i++];
      const tmp = new Image();
      tmp.onload = () => {
        girlImg.src = p;
        console.log('Loaded girl image:', p);
      };
      tmp.onerror = () => {
        console.log('Not found, trying next:', p);
        next();
      };
      tmp.src = encodeURI(p);
    }
    next();
  }

  function updateGirlFromSaved() {
    const skin   = localStorage.getItem('skin')   || 'dark';
    const hair   = localStorage.getItem('hair')   || 'black';
    const outfit = localStorage.getItem('outfit') || 'simple';
    console.log('updateGirlFromSaved ->', {skin, hair, outfit});

    const paths = buildCandidatePaths(skin, hair, outfit);
    tryLoad(paths);
  }

  document.querySelectorAll('#skincolor .colors img').forEach(img => {
    img.addEventListener('click', () => {
      const skin = img.dataset.skin;
      if (!skin) return;
      localStorage.setItem('skin', skin);
      updateGirlFromSaved();
    });
  });

  document.querySelectorAll('#haircolor .colors img').forEach(img => {
    img.addEventListener('click', () => {
      const hair = img.dataset.hair;
      if (!hair) return;
      localStorage.setItem('hair', hair);
      updateGirlFromSaved();
    });
  });

  document.querySelectorAll('#outfit .colors img').forEach(img => {
    img.addEventListener('click', () => {
      const outfit = img.dataset.outfit;
      if (!outfit) return;
      localStorage.setItem('outfit', outfit);
      updateGirlFromSaved();
    });
  });

  updateGirlFromSaved();

  function updateName() {
    const name = localStorage.getItem('dollName') || '';
    const nameDiv = document.getElementById('girlName');
    if (nameDiv) {
      nameDiv.textContent = name;
    }
  }
  
  updateName();
});