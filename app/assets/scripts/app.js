import NavBtn from './modules/NavBtn';
import particles from 'particles.js'





var navBtn = new NavBtn();

// Particles.js
particles.particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('particles.js config loaded');
});
