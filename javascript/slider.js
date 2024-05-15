// Slide de areas na Porfolio section na página index

  export function sliderIndex() {
       
    const slider = document.querySelector('.card-portfolio-list');
    const images = slider.querySelectorAll('li');
    
    let currentImageIndex = 0;
    
    function nextSlide() {
      if (currentImageIndex === images.length - 1) {
        currentImageIndex = 0;
      } else {
        currentImageIndex++;
      }
      scrollToImage();
    }
    
    function scrollToImage() {
      const imageWidth = images[currentImageIndex].offsetWidth;
      const newPosition = currentImageIndex * imageWidth;
      slider.scrollLeft = newPosition;
    }
    slider.addEventListener('click', nextSlide);
  }



  // slider portfolio
export function sliderPortfolio() {

  const slidesContainers = document.querySelectorAll('.slider-project-img'); // Seleciona todas as divs de imagens
  
  slidesContainers.forEach(container => {
    const slides = container.querySelectorAll('.img-slider'); // Seleciona as imagens dentro de cada div
    const pagination = container.nextElementSibling; // Seleciona o elemento irmão (próximo) para adicionar os botões de paginação
  
    slides.forEach((slide, index) => {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        goToSlide(container, index); // Passa a div do slide como parâmetro
      });
      pagination.appendChild(button);
    });
  
    const carousel = container; // Usa a própria div do slide como o elemento de carrossel
    const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  
    carousel.addEventListener('scroll', () => {
      const scrollPercentage = (carousel.scrollLeft / scrollWidth) * 100;
      const index = Math.round(scrollPercentage / (100 / slides.length));
      highlightButton(pagination, index); // Passa a div do slide como parâmetro
    });
  });
  
  function goToSlide(container, index) {
    const slides = container.querySelectorAll('.img-slider'); // Seleciona as imagens dentro da div específica
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
    const pagination = container.nextElementSibling; // Seleciona o elemento irmão (próximo)
    highlightButton(pagination, index); // Passa a div do slide como parâmetro
  }
  
  function highlightButton(pagination, index) {
    const buttons = pagination.querySelectorAll('button'); // Seleciona os botões de paginação dentro da div específica
    buttons.forEach((button, i) => {
      button.classList.toggle('active', i === index);
    });
  }
}
