var R2V1 = anime({
    targets: '#loopvid2A',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 100,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  var R2T1 = anime({
    targets: '#r2quote_block1',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 400,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  var R2T2 = anime({
    targets: '#r2quote_block2',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 700,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  var R2T3 = anime({
    targets: '#r2quote_block3',
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
  var R2T4 = anime({
    targets: '#r2quote_block4',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1300,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  var R2T5 = anime({
    targets: '#r2quote_block5',
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
  var R2T6 = anime({
    targets: '#r2quote_block6',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1900,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  var R2T7 = anime({
    targets: '#r2quote_block7',
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
  var R2V2 = anime({
    targets: '#loopvid2B',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2500,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  var R2T8 = anime({
    targets: '#r2quote_block8',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2800,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  var R2T9 = anime({
    targets: '#r2quote_block9',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 3100,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  var R2T10 = anime({
    targets: '#r2quote_block10',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 3400,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  var R2T11 = anime({
    targets: '#r2quote_block11',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 3700,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  var R2T12 = anime({
    targets: '#r2quote_block12',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 4000,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  var R2T13 = anime({
    targets: '#r2quote_block13',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 4200,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  var R2T14 = anime({
    targets: '#r2quote_block14',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 4500,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  var R2V3 = anime({
    targets: '#loopvid2C',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 4800,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  
  
  $(".row2").click(quote2appears);
  function quote2appears() {
    $("#r2quote").fadeIn();
    R2V1.play();
    R2T1.play();
    R2T2.play();
    R2T3.play();
    R2T4.play();
    R2T5.play();
    R2T6.play();
    R2T7.play();
    R2T8.play();
    R2T9.play();
    R2V2.play();
    R2T10.play();
    R2T11.play();
    R2T12.play();
    R2T13.play();
    R2T14.play();
    R2V3.play();
    setTimeout(function () { IndexTest2() }, 8000);
    setTimeout(function () { R2QuoteFade() }, 10000);
  
  }

  function IndexTest2() {
    document.getElementById("r2quote").style.zIndex = "-1";
  }
  
  function R2QuoteFade() {
    R2Tfade.play();
  }
  
  var R2Tfade = anime({
    targets: '#r2quote',
    opacity: [
      { value: 0.15, duration: 1200 },
    ],
    delay: 10000,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  