const scriptModule = (() => {
  const projectDescs = [
    {
      name:  'FCC Javascript Calculator',
      desc: 'A simple calculator built with React. It performs only as a regular calculator for simple arithmetic calculations.'
    },
    {
      name: 'Odin RPS Game',
      desc: 'Built in Vanilla HTML/CSS/JS as project submission for The Odin Project online curriculum. The website features a smooth transition to a multi-round rock-paper-scissors elimination game where 64 “players” (bots) fight each other in parallel with the user and his/her bot matchup. Upon entry of name, epithet, and/or image, the user is transported to a few seconds long matchmaking sequence where new “players” (bots) join the game based on weighted random numbers to simulate a real game matchmaking sequence. After finishing loading, the user must fight his/her way out to the top with each round eliminating half of the participants and with a timer that gets faster-and-faster. While fighting, the user can also see what’s happening  in the other (initially) 32 matchups, who threw what and who eliminated who.'
    },
    {
      name: 'Odin Etch-a-Sketch',
      desc: 'Built in Vanilla HTML/CSS/JS as project submission for The Odin Project online curriculum. The user can draw on a board with an adjustable pixel size and while switching between selected primary and secondary colors. The user can also erase, toggle grid visuals on/off, draw each cell with a random RGB color, etc.'
    },
    {
      name: 'Odin Landing Page',
      desc: 'Built in Vanilla HTML/CSS as a project submission for The Odin Project online curriculum. It is simply a replica of the design of the landing page (as instructed).'
    },
    {
      name: 'Odin Arithmetic Calculator',
      desc: 'Built in Vanilla HTML/CSS/JS as a project submission for The Odin Project online curriculum. It functions as a regular calculator but with a side device displaying the history of the user\'s calculations, which can also be cleared.'
    },
    {
      name: 'Odin Signup Form',
      desc: 'Built in Vanilla HTML/CSS as a project submission for The Odin Project online curriculum. Based of the design required but made for a game I\'ve made with a friend titled "Tanks Unknown".'
    },
    {
      name: 'FCC 25 + 5 Clock',
      desc: 'Built with React as a project submission for the freeCodeCamp online curriculum. I consider this to be the hardest project I\'ve done for the curriculum, as ReactJS and Javascript date and time mechanisms keep not working the way I\'d expected them to work and bugs keep popping up. It\'s essentially a pomodoro app with adjustable pomodoro and break durations.'
    },
    {
      name: 'FCC Markdown Previewer',
      desc: 'Built with React as a project submission for the freeCodeCamp online curriculum. The user here can type on the upper box and see them converted in real time to HTML in the box below. I seem to only have used ReactJS (as requied) for the dynamic HTML aspect.'
    },
    {
      name: 'FCC Random Quote Machine',
      desc: 'Built with React as a project submission for the freeCodeCamp online curriculum. It\'s the easiest of the ReactJS projects I\'ve done there and with a relatively simple design. The user here can get quotes from random philosophers complete with animation and jQuery fadeout and fadein. The randomness here doesn\'t seem much though, as the data for philosophers and their quotes are hardcoded as an array of objects.'
    },
    {
      name: 'FCC God Arc Technical Documentation',
      desc: 'Built in Vanilla HTML/CSS as a project submission for The Odin Project online curriculum. A made-up technical documentation for the God Arcs in the game/series God Eater'
    },
    {
      name: 'FCC Drum Machine',
      desc: 'Built with React as a project submission for the freeCodeCamp online curriculum. It\'s a simple drum machine with two modes and a set of buttons the user can either click or use the corresponding button to activate. It can be toggled on/off, but the volume handle is unusable and is purely for aesthetic purposes.'
    }
  ];

  const techSlider = tns({
    container: '.tech-slider',
    items: 1,
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

  soloProjectSlider.events.on('transitionEnd', (info) => {
    const middle = document.querySelector('.solo-projects-slider')
      .querySelectorAll('.tns-slide-active')[1]
      .querySelector('.solo-project-img');
    
    const currSoloProject = projectDescs.find((project) => {
      return project.name === middle.getAttribute('alt');
    });

    document.querySelector('.solo-projects-slider-desc').querySelector('h2').textContent = currSoloProject.name;
    document.querySelector('.solo-projects-slider-desc').querySelector('p').textContent = currSoloProject.desc;
  });

  return {
    projectDescs,
    techSlider,
    soloProjectSlider
  }
})();

export default scriptModule;
