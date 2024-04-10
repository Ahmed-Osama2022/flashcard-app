/**
 * Global Variables
 */

const myPhoto = document.getElementById('img-wrapper');
const celebrateElement = document.getElementById('confetti');

const clickNextAudio = document.getElementById('click-sound-next');
const clickPrevAudio = document.getElementById('click-sound-prev');

/**
 * End Global Variables
 */

setTimeout(() => {
  celebrateElement.style.display = 'none';
}, 7000);

function playClickSound(navBtn) {
  if (navBtn === 'next') {
    clickNextAudio.play();
  }
  if (navBtn === 'prev') {
    clickPrevAudio.play();
  }
}
