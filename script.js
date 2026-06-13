
let tl = gsap.timeline();

tl.from(".left-nav svg", {
  y:-100,
  opacity:0,
  duration:1,
})
tl.from(".right-nav a", {
  y:-50,
  opacity:0,
  duration:1,
  stagger:0.3
})
tl.from(".text-section-1 h1", {
  y:100,
  duration:0.5,
  opacity:0,
  stagger:0.3
})
tl.from(".part-2 .image-box", {
  y:100,
  duration:1,
  opacity:0
})


const scroll = new LocomotiveScroll({
    el:document.querySelector('main'),
    smooth:true,
    lerp:0.01
});

window.addEventListener('load', () => {
    scroll.update();
});
