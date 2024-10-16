var R4T1B1 = anime({
    targets: '#r4quote_block1',
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
  
  var R4T1B2 = anime({
    targets: '#r4quote_block2',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 200,
    easing: 'easeInOutQuad',
    autoplay: false
  });

var R4T1I1 = anime({
    targets: '#loopvid4A',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 400,
    easing: 'easeInOutQuad',
    autoplay: false
  });

var R4T1B3 = anime({
    targets: '#r4quote_block3',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 600,
    easing: 'easeInOutQuad',
    autoplay: false
  });

var R4T1B4 = anime({
    targets: '#r4quote_block4',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 800,
    easing: 'easeInOutQuad',
    autoplay: false
  });

var R4T1B5 = anime({
    targets: '#r4quote_block5',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1000,
    easing: 'easeInOutQuad',
    autoplay: false
  });

var R4T1B6 = anime({
    targets: '#r4quote_block6',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1200,
    easing: 'easeInOutQuad',
    autoplay: false
  });

var R4T1I2 = anime({
    targets: '#loopvid4B',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1400,
    easing: 'easeInOutQuad',
    autoplay: false
  });

var R4T1B7 = anime({
    targets: '#r4quote_block7',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1600,
    easing: 'easeInOutQuad',
    autoplay: false
  });

var R4T1B8 = anime({
    targets: '#r4quote_block8',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1800,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R4T1B9 = anime({
    targets: '#r4quote_block9',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 1800,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R4T1B10 = anime({
    targets: '#r4quote_block10',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2000,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R4T1B11 = anime({
    targets: '#r4quote_block11',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2200,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R4T1B12 = anime({
    targets: '#r4quote_block12',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2400,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  var R4T1I3 = anime({
    targets: '#loopvid4C',
    opacity: [
      { value: 1, duration: 500 },
    ],
    delay: 2600,
    easing: 'easeInOutQuad',
    autoplay: false
  });

  $(".row4").click(quote4appears);
  function quote4appears() {
    $("#r4quote").fadeIn();
    R4T1B1.play();
    R4T1B2.play();
    R4T1I1.play();
    R4T1B3.play();
    R4T1B4.play();
    R4T1B5.play();
    R4T1B6.play();
    R4T1I2.play();
    R4T1B7.play();
    R4T1B8.play();
    R4T1B9.play();
    R4T1B10.play();
    R4T1B11.play();
    R4T1B12.play();
    R4T1I3.play();
    setTimeout(function () { IndexTest4() }, 8000);
    setTimeout(function () { R4QuoteFade() }, 10000);
  }

  function IndexTest4() {
    document.getElementById("r4quote").style.zIndex = "-1";
  }
  
  function R4QuoteFade() {
    R4T1fade.play();
  }
  
  var R4T1fade = anime({
    targets: '#r4quote',
    opacity: [
      { value: 0.15, duration: 1200 },
    ],
    delay: 10000,
    easing: 'easeInOutQuad',
    autoplay: false
  });