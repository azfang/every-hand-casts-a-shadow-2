var R1T1I1 = anime({
    targets: '#loopvid1A',
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
  
  var R1T1B1 = anime({
    targets: '#r1quote_block1',
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
  
  var R1T1B2 = anime({
    targets: '#r1quote_block2',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 400,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R1T1B3 = anime({
    targets: '#r1quote_block3',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 600,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R1T1B4 = anime({
    targets: '#r1quote_block4',
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
  
  var R1T1B5 = anime({
    targets: '#r1quote_block5',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1000,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R1T1B6 = anime({
    targets: '#r1quote_block6',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1200,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R1T1B7 = anime({
    targets: '#r1quote_block7',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1400,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R1T1B8 = anime({
    targets: '#r1quote_block8',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1600,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R1T1B9 = anime({
    targets: '#r1quote_block9',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1800,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  
  var R1T1I2 = anime({
    targets: '#loopvid1B',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2000,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  var R1T1B10 = anime({
    targets: '#r1quote_block10',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2200,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  
  var R1T1B11 = anime({
    targets: '#r1quote_block11',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2400,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  
  var R1T1B12 = anime({
    targets: '#r1quote_block12',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2600,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  var R1T1B13 = anime({
    targets: '#r1quote_block13',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2800,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  var R1T1B14 = anime({
    targets: '#r1quote_block14',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 3000,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  var R1T1B15 = anime({
    targets: '#r1quote_block15',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 3200,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  var R1T1B16 = anime({
    targets: '#r1quote_block16',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 3400,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  var R1T1B17 = anime({
    targets: '#r1quote_block17',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 3600,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  var R1T1B18 = anime({
    targets: '#r1quote_block18',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 3800,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  var R1T1B19 = anime({
    targets: '#r1quote_block19',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 4000,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  var R1T1B20 = anime({
    targets: '#r1quote_block20',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 4200,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  var R1T1B21 = anime({
    targets: '#r1quote_block21',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 4400,
    easing: 'easeInOutQuad',
    autoplay: false,
  });
  var R1T1I3 = anime({
    targets: '#loopvid1C',
    // translateY: [
    //   {value: -25, duration: 400},
    // ],
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 4600,
    easing: 'easeInOutQuad',
    autoplay: false
  });
  
  $(".row1").click(quote1appears);
  function quote1appears() {
    $("#r1quote").fadeIn();
    R1T1I1.play();
    R1T1B1.play();
    R1T1B2.play();
    R1T1B3.play();
    R1T1B4.play();
    R1T1B5.play();
    R1T1B6.play();
    R1T1B7.play();
    R1T1B8.play();
    R1T1B9.play();
    R1T1I2.play();
    R1T1B10.play();
    R1T1B11.play();
    R1T1B12.play();
    R1T1B13.play();
    R1T1B14.play();
    R1T1B15.play();
    R1T1B16.play();
    R1T1B17.play();
    R1T1B18.play();
    R1T1B19.play();
    R1T1B20.play();
    R1T1B21.play();
    R1T1I3.play();
    setTimeout(function () { IndexTest() }, 8000);
    setTimeout(function () { R1QuoteFade() }, 10000);
  }

  function IndexTest() {
    document.getElementById("r1quote").style.zIndex = "-1";
  }
  
  function R1QuoteFade() {
    R1T1fade.play();
  }
  
  var R1T1fade = anime({
    targets: '#r1quote',
    opacity: [
      { value: 0.15, duration: 1200 },
    ],
    delay: 10000,
    easing: 'easeInOutQuad',
    autoplay: false
  });