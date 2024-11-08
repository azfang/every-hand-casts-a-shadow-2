var R6T1B1 = anime({
  targets: '#r6quote_block1',
  opacity: [
    { value: 1, duration: 500 },
  ],
  delay: 0,
  easing: 'easeInOutQuad',
  autoplay: false
});

var R6T1B2 = anime({
  targets: '#r6quote_block2',
  opacity: [
    { value: 1, duration: 500 },
  ],
  delay: 200,
  easing: 'easeInOutQuad',
  autoplay: false
});

var R6T1B3 = anime({
  targets: '#r6quote_block3',
  opacity: [
    { value: 1, duration: 500 },
  ],
  delay: 400,
  easing: 'easeInOutQuad',
  autoplay: false
});

var R6T1I1 = anime({
  targets: '#loopvid6A',
  opacity: [
    { value: 1, duration: 500 },
  ],
  delay: 600,
  easing: 'easeInOutQuad',
  autoplay: false
});

var R6T1B4 = anime({
  targets: '#r6quote_block4',
  opacity: [
    { value: 1, duration: 500 },
  ],
  delay: 800,
  easing: 'easeInOutQuad',
  autoplay: false
});

var R6T1B5 = anime({
  targets: '#r6quote_block5',
  opacity: [
    { value: 1, duration: 500 },
  ],
  delay:1000,
  easing: 'easeInOutQuad',
  autoplay: false
});

var R6T1I2 = anime({
  targets: '#loopvid6B',
  opacity: [
    { value: 1, duration: 500 },
  ],
  delay:1200,
  easing: 'easeInOutQuad',
  autoplay: false
});

var R6T1B6 = anime({
  targets: '#r6quote_block6',
  opacity: [
    { value: 1, duration: 500 },
  ],
  delay: 1400,
  easing: 'easeInOutQuad',
  autoplay: false
});

var R6T1B7 = anime({
  targets: '#r6quote_block7',
  opacity: [
    { value: 1, duration: 500 },
  ],
  delay: 1600,
  easing: 'easeInOutQuad',
  autoplay: false
});

var R6T1B8 = anime({
  targets: '#r6quote_block8',
  opacity: [
    { value: 1, duration: 500 },
  ],
  delay: 1800,
  easing: 'easeInOutQuad',
  autoplay: false
});

var R6T1B9 = anime({
  targets: '#r6quote_block9',
  opacity: [
    { value: 1, duration: 500 },
  ],
  delay: 2000,
  easing: 'easeInOutQuad',
  autoplay: false
});

var R6T1B10 = anime({
  targets: '#r6quote_block10',
  opacity: [
    { value: 1, duration: 500 },
  ],
  delay: 2200,
  easing: 'easeInOutQuad',
  autoplay: false
});

var R6T1B11 = anime({
  targets: '#r6quote_block11',
  opacity: [
    { value: 1, duration: 500 },
  ],
  delay: 2400,
  easing: 'easeInOutQuad',
  autoplay: false
});

var R6T1I3 = anime({
  targets: '#loopvid6C',
  opacity: [
    { value: 1, duration: 500 },
  ],
  delay: 2400,
  easing: 'easeInOutQuad',
  autoplay: false
});

$(".row6").click(quote6appears);
function quote6appears() {
  $("#r6quote").fadeIn();
  R6T1B1.play();
  R6T1B2.play();
  R6T1B3.play();
  R6T1I1.play();
  R6T1B4.play();
  R6T1B5.play();
  R6T1I2.play();
  R6T1B6.play();
  R6T1B7.play();
  R6T1B8.play();
  R6T1B9.play();
  R6T1B10.play();
  R6T1B11.play();
  R7T1I3.play();
  setTimeout(function () { IndexTest6() }, 8000);
  setTimeout(function () { R6QuoteFade() }, 10000);
}

function IndexTest6() {
  document.getElementById("r6quote").style.zIndex = "-1";
}

function R6QuoteFade() {
  R6T1fade.play();
}

var R6T1fade = anime({
  targets: '#r6quote',
  opacity: [
    { value: 0.15, duration: 1200 },
  ],
  delay: 10000,
  easing: 'easeInOutQuad',
  autoplay: false
});
