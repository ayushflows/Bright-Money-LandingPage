const carouselContainer = document.querySelector('.carousel-container');
const cards = document.querySelectorAll('.testinomial-content-elements');

function cloneCardsForSmallScreens() {
  if (window.innerWidth <= 1080) {
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      carouselContainer.appendChild(clone);
    });
  } else {
    const clones = carouselContainer.querySelectorAll('.testinomial-content-elements');
    clones.forEach(clone => {
      if (clone !== cards[0] && clone !== cards[1] && clone !== cards[2] && clone !== cards[0] && clone !== cards[3]) {
        clone.remove();
      }
    });
  }
}

cloneCardsForSmallScreens();
window.addEventListener('resize', cloneCardsForSmallScreens);

carouselContainer.addEventListener('mouseover', () => {
  carouselContainer.style.animationPlayState = 'paused';
});

carouselContainer.addEventListener('mouseout', () => {
  carouselContainer.style.animationPlayState = 'running';
});
