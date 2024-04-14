const splashContainer = document.getElementById('splash-container');
const containerOne = document.querySelector('.container-one');
const containerTwo = document.querySelector('.container-two');

// Check https://particles.js.org/ for particles effect

const defaults = {
  spread: 360,
  ticks: 200,
  gravity: 1,
  decay: 0.95,
  startVelocity: 30,
}

function Confetti_1() {
  confetti({
    ...defaults,
    particleCount: 80,
    scalar: 4,
    shapes: ["image"],
    shapeOptions: {
      image: [{
          src: "/images/confetti1.png",
          width: 60,
          height: 60,
        },
        {
          src: "/images/confetti2.png",
          width: 60,
          height: 60,
        },
        {
          src: "/images/confetti3.png",
          width: 60,
          height: 60,
        },
    ]}
  });

  confetti({
    ...defaults,
    particleCount: 15,
    scalar: 5,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["💧"]
      }
    },
  })
}

function shootConfetti() {
  setTimeout(Confetti_1, 0);
  setTimeout(Confetti_1, 200);
}

function splashAnimStart() {
  splashContainer.classList.remove("hidden");
  splashContainer.classList.add("splash-animation");
  setTimeout(()=> {
    containerOne.classList.add("hidden");
    containerTwo.classList.remove("hidden");
  }, 500)
}

function splashAnimEnd() {
  shootConfetti();
  splashContainer.classList.add("hidden");
  splashContainer.classList.remove("splash-animation");
}

function clickTransition() {
  splashAnimStart();
  setTimeout(splashAnimEnd, 2000);
}

function goBack(){
  containerTwo.classList.add("hidden");
  containerOne.classList.remove("hidden");
}