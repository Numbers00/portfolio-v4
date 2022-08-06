const techSlider = tns({
  container: '.tech-slider',
  items: 3,
  slideBy: 'page',
  autoWidth: true,
  autoplay: true,
  autoplayTimeout: 3500,
  mouseDrag: true,
  swipeAngle: false,
  controls: false,
  nav: false,
  speed: 400
});

const soloProjectSlider = tns({
  container: '.solo-projects-slider',
  items: 3,
  gutter: 50,
  slideBy: 'page',
  mouseDrag: true,
  swipeAngle: false,
  controls: false,
  nav: false,
  speed: 400
});
