document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.bacheca');
    const overlay = document.querySelector('.overlay');
    const overlayImg = document.querySelector('.overlay-img');
    const closeBtn = document.querySelector('.close-btn');
  
    
    closeBtn.addEventListener('click', () => {
      overlay.classList.add('hidden');
    });
  
    fetch('https://lanciweb.github.io/demo/api/pictures/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.forEach(item => {
          const polaroid = document.createElement('div');
          polaroid.className = 'polaroid';
  
          const pin = document.createElement('img');
          pin.className = 'puntina';
          pin.src = 'img/pin.svg';
          pin.alt = 'Puntina';
  
          const foto = document.createElement('img');
          foto.className = 'foto';
          foto.src = `https://picsum.photos/600/600?random=${item.id}`;
          foto.alt = 'Foto';
  
          foto.addEventListener('click', () => {
            overlay.classList.remove('hidden');
            overlayImg.src = foto.src;
          });
  
          const caption = document.createElement('p');
          caption.className = 'caption';
          caption.textContent = item.title;
  
          polaroid.appendChild(pin);
          polaroid.appendChild(foto);
          polaroid.appendChild(caption);
  
          container.appendChild(polaroid);
        });
      })
      .catch(error => {
        console.error('Errore nella fetch:', error);
      });
  });
  