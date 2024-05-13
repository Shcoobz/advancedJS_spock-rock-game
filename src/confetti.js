var maxParticleCount = 100;
var particleSpeed = 5;
var colors = [
  'DodgerBlue',
  'OliveDrab',
  'Gold',
  'Pink',
  'SlateBlue',
  'LightBlue',
  'Violet',
  'PaleGreen',
  'SteelBlue',
  'SandyBrown',
  'Chocolate',
  'Crimson',
];
var streamingConfetti = false;
var animationTimer = null;
var particles = [];
var waveAngle = 0;

function resetParticle(particle, width, height) {
  particle.color = colors[(Math.random() * colors.length) | 0];
  particle.x = Math.random() * width;
  particle.y = Math.random() * height - height;
  particle.diameter = Math.random() * 10 + 5;
  particle.tilt = Math.random() * 10 - 10;
  particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
  particle.tiltAngle = 0;
  return particle;
}

function startConfetti() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvas = document.getElementById('confetti-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'confetti-canvas');
    canvas.setAttribute(
      'style',
      'position:absolute;top:0;left:0;display:block;z-index:999999;pointer-events:none'
    );
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    window.addEventListener(
      'resize',
      function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      },
      true
    );
  }
  var context = canvas.getContext('2d');
  particles = [];
  for (var i = 0; i < maxParticleCount; i++) {
    particles.push(resetParticle({}, width, height));
  }
  streamingConfetti = true;
  if (!animationTimer) {
    (function runAnimation() {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (particles.length === 0) {
        streamingConfetti = false;
        animationTimer = null;
      } else {
        updateParticles();
        drawParticles(context);
        animationTimer = requestAnimationFrame(runAnimation);
      }
    })();
  }
}

function stopConfetti() {
  streamingConfetti = false;
}

function removeConfetti() {
  stopConfetti();
  particles = [];
}

function drawParticles(context) {
  particles.forEach(function (particle) {
    context.beginPath();
    context.lineWidth = particle.diameter;
    context.strokeStyle = particle.color;
    var x = particle.x + particle.tilt;
    context.moveTo(x + particle.diameter / 2, particle.y);
    context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
    context.stroke();
  });
}

function updateParticles() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  waveAngle += 0.01;
  particles.forEach(function (particle, index) {
    particle.tiltAngle += particle.tiltAngleIncrement;
    particle.x += Math.sin(waveAngle);
    particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.4;
    particle.tilt = Math.sin(particle.tiltAngle) * 15;

    if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
      if (streamingConfetti && particles.length <= maxParticleCount) {
        resetParticle(particle, width, height);
      } else {
        particles.splice(index, 1);
      }
    }
  });
}

export { startConfetti, stopConfetti, removeConfetti };
