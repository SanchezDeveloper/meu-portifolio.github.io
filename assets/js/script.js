//menumobile
function menuShow() {
let menuMobile = document.querySelector('.mobile-menu');
if (menuMobile.classList.contains('open')) { 
  menuMobile.classList.remove('open');
  document.querySelector('.icon').src= "media/barra-de-menu.png";
} else {
  menuMobile.classList.add('open')
  document.querySelector('.icon').src= "media/marca-x.png";
}
}

//slider com Swiper JS


//Url JSON
const jsonUrl = 'projects.json';

//Container onde os slides serão renderizados

const slidesContainer = document.getElementById('projects-slides');

// Função para criar um card como componente

const ProjectCard = (project) => {
  const card = document.createElement('div');
  card.className = 'card swiper-slide';
  card.innerHTML = `
    <div class="image-content">
      <span class="overlay"></span>
      <div class="card-image">
        <img src="${project.image}" alt="${project.title}" class="card-img">
      </div>
    </div>
    <div class="card-content">
      <h2 class="name">${project.title}</h2>
      <p class="description">${project.description}</p>
      <button class="button">
        <strong>
          <a href="${project.link}" target="_blank" rel="noopener noreferrer">Acesse</a>
        </strong>
      </button>
    </div>
  `;
  return card;
};

// Função para criar o slide genérico

const GenericCard = () => {
  const card = document.createElement('div');
  card.className = 'card swiper-slide';
  card.innerHTML = `
    <div class="image-content">
      <span class="overlay"></span>
      <div class="card-image">
        <img src="media/default-placeholder.webp" alt="Projeto futuro" class="card-img">
      </div>
    </div>
    <div class="card-content">
      <h2 class="name">Mais projetos em breve</h2>
      <p class="description">Estou sempre desenvolvendo novas ideias!</p>
    </div>
  `;
  return card;
};

// Fetch para carregar e renderizar os projetos

fetch(jsonUrl)
.then(response => response.json())
.then(data => {
  // Renderizar cada projeto como componente
  data.forEach(project => {
    const projectCard = ProjectCard(project);
    slidesContainer.appendChild(projectCard);
  });
  // Renderizar o slide genérico
  const genericCard = GenericCard();
  slidesContainer.appendChild(genericCard);

  // Inicializar o Swiper
  new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
})
.catch(error => console.error('Erro ao carregar projetos:', error));


// Section de tecnologias (MESMA LÓGICA DA RENDERIZAÇÃO DOS CARDS DO SLIDE)

const jsonTech = 'technologies.json';

const renderTech = document.getElementById('languages-img');

const divTechContent = (technology) => {

  const divTech = document.createElement('div');

  divTech.innerHTML =
    `<div>
      <img src=${technology.image} alt=${technology.alt}>
    </div>`;
  return divTech;
};

fetch (jsonTech)
.then(response => response.json())
.then(data => {
  data.forEach(technology => {
    const divTech = divTechContent(technology);
    renderTech.appendChild(divTech);
  })
})