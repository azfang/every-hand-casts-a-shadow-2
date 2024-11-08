var R3T1I1 = anime({
    targets: '#loopvid3A',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 0,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R3T1B1 = anime({
    targets: '#r3quote_block1',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 200,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R3T1B2 = anime({
    targets: '#r3quote_block2',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 400,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R3T1B3 = anime({
    targets: '#r3quote_block3',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 600,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R3T1B4 = anime({
    targets: '#r3quote_block4',
    // translateY: [
    //   {value: -25, duration: 500},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 800,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R3T1B5 = anime({
    targets: '#loopvid3B',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1000,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R3T1B6 = anime({
    targets: '#r3quote_block5',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1200,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R3T1B7 = anime({
    targets: '#r3quote_block6',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1400,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R3T1B8 = anime({
    targets: '#r3quote_block7',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1600,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R3T1B9 = anime({
    targets: '#r3quote_block8',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1800,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  
  var R3T1I2 = anime({
    targets: '#r3quote_block9',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2000,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R3T1B10 = anime({
    targets: '#r3quote_block10',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2200,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  
  var R3T1B11 = anime({
    targets: '#r3quote_block11',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2400,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  
  var R3T1B12 = anime({
    targets: '#r3quote_block12',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2600,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  var R3T1B13 = anime({
    targets: '#r3quote_block13',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2800,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  var R3T1B14 = anime({
    targets: '#loopvid3C',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 3000,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  var R3T1B15 = anime({
    targets: '#r3quote_block14',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 3200,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  $(".row3").click(quote3appears);
  function quote3appears() {
    $("#r3quote").fadeIn();
    R3T1I1.play();
    R3T1B1.play();
    R3T1B2.play();
    R3T1B3.play();
    R3T1B4.play();
    R3T1B5.play();
    R3T1B6.play();
    R3T1B7.play();
    R3T1B8.play();
    R3T1B9.play();
    R3T1I2.play();
    R3T1B10.play();
    R3T1B11.play();
    R3T1B12.play();
    R3T1B13.play();
    R3T1B14.play();
    R3T1B15.play();
    setTimeout(function () { IndexTest3() }, 8000);
    setTimeout(function () { R3QuoteFade() }, 10000);
  }

  function IndexTest3() {
    document.getElementById("r3quote").style.zIndex = "-1";
  }
  
  function R3QuoteFade() {
    R3T1fade.play();
  }
  
  var R3T1fade = anime({
    targets: '#r3quote',
    opacity: [
      { value: 0.15, duration: 1200 },
    ],
    delay: 10000,
    easing: 'easeInOutQuad',
    autoplay: false
  });
