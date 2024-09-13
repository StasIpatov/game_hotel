anime({
  targets: '.fiximg',       
    rotate: '3turn'
  });

  let logo1 = anime({
    targets: '.fiximg',
    keyframes: [
      {
        rotate: '1turn',
        scale: 1.2,
      },
      {
        rotate: '2turn',
        scale: 1,
      }
    ],
    duration: 2000,
    // easing: "linear",
    autoplay: false, 
  })
  
  document.querySelector('.fiximg') .addEventListener('click', logo1.play)
  