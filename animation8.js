var R8T1I1 = anime({
    targets: '#loopvid8A',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 0,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R8T1B1 = anime({
    targets: '#r8quote_block1',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 200,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R8T1B2 = anime({
    targets: '#r8quote_block2',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 400,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R8T1B3 = anime({
    targets: '#r8quote_block3',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 600,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R8T1B4 = anime({
    targets: '#r8quote_block4',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 800,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R8T1B5 = anime({
    targets: '#r8quote_block5',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1000,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R8T1I2 = anime({
    targets: '#loopvid8B',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1200,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R8T1B6 = anime({
    targets: '#r8quote_block6',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1400,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R8T1B7 = anime({
    targets: '#r8quote_block7',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1600,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R8T1B8 = anime({
    targets: '#r8quote_block8',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1600,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R8T1B9 = anime({
    targets: '#r8quote_block9',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1800,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R8T1B10 = anime({
    targets: '#r8quote_block10',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2200,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R8T1B11 = anime({
    targets: '#r8quote_block11',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2400,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  $(".row8").click(quote8appears);
  function quote8appears() {
    $("#r8quote").fadeIn();
    R8T1I1.play();
    R8T1B1.play();
    R8T1B2.play();
    R8T1B3.play();
    R8T1B4.play();
    R8T1B5.play();
    R8T1I2.play();
    R8T1B6.play();
    R8T1B7.play();
    R8T1B8.play();
    R8T1B9.play();
    R8T1B10.play();
    R8T1B11.play();
    R8T1I3.play();
    setTimeout(function () { IndexTest8() }, 8000);
    setTimeout(function () { R8QuoteFade() }, 10000);
  }

  function IndexTest8() {
    document.getElementById("r8quote").style.zIndex = "-1";
  }
  
  function R8QuoteFade() {
    R8T1fade.play();
  }
  
  var R8T1fade = anime({
    targets: '#r8quote',
    opacity: [
      { value: 0.15, duration: 1200 },
    ],
    delay: 10000,
    easing: 'easeInOutQuad',
    autoplay: false
  });
