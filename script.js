window.addEventListener("load", () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
});

window.addEventListener("load", () => {
  scroll.update();
});


// const scroll = new LocomotiveScroll({
//     el:document.querySelector('main'),
//     smooth:true,
// });