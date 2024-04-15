const splashContainer = document.getElementById('splash-container');
const containerOne = document.querySelector('.container-one');
const containerTwo = document.querySelector('.container-two');

// JS particles library
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

// Function that plays particles effect
function shootConfetti() {
  setTimeout(Confetti_1, 0);
  setTimeout(Confetti_1, 200);
}

// Function that plays water splash animation and screen transition
function splashAnimStart() {
  splashContainer.classList.remove("hidden");
  splashContainer.classList.add("splash-animation");
  setTimeout(()=> {
    containerOne.classList.add("hidden");
    containerTwo.classList.remove("hidden");
  }, 500)
}

// Function that resets the water splash after its animation ends
function splashAnimEnd() {
  shootConfetti();
  splashContainer.classList.add("hidden");
  splashContainer.classList.remove("splash-animation");
}

// Function that triggers when clicking splash button
function splashTransition() {
  splashAnimStart();
  setTimeout(splashAnimEnd, 2000);
}

// Function that triggers when clicking go back button
function goBack(){
  containerTwo.classList.add("hidden");
  containerOne.classList.remove("hidden");
}