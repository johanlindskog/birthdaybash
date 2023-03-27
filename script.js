const balloonContainer = document.querySelector('.balloon-container');
const numberOfBalloons = 10;

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.backgroundImage = 'url(http://freebie.photography/events/helium_balloons.jpg)'; // Replace with your preferred balloon image URL
  balloon.style.width = '100px';
  balloon.style.height = '100px';
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDuration = Math.random() * 3 + 4 + 's';
  balloon.style.animationDelay = Math.random() * 3 + 's';
  balloonContainer.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 9000);
}

for (let i = 0; i < numberOfBalloons; i++) {
  createBalloon();
}

setInterval(() => {
  createBalloon();
}, 3000);
