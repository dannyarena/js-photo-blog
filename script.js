document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.bacheca');
  
    fetch('https://lanciweb.github.io/demo/api/pictures/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.forEach(item => {
          const polaroid = document.createElement('div');
          polaroid.className = 'polaroid';
  
          polaroid.innerHTML = `
            <img class="puntina" src="img/pin.svg" alt="Puntina">
            <img class="foto" src="https://picsum.photos/600/600?random=${item.id}" alt="Foto">
            <p class="caption">${item.title}</p>
          `;
  
          container.appendChild(polaroid);
        });
      })
      .catch(error => {
        console.error('Errore nella fetch:', error);
      });
  });
