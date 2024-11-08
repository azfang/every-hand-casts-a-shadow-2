//Automatic scrolling of the sections 

function ScrollDiv() {

  if (document.getElementById("autoscrollmotion1").scrollTop < (document.getElementById('autoscrollmotion1').scrollHeight - document.getElementById('autoscrollmotion1').offsetHeight)) {
    +1
    document.getElementById('autoscrollmotion1').scrollTop = document.getElementById('autoscrollmotion1').scrollTop + 1
  }
  else { document.getElementById('autoscrollmotion1').scrollTop = 0; }
}

function ScrollDiv2() {

  if (document.getElementById('autoscrollmotion2').scrollTop < (document.getElementById('autoscrollmotion2').scrollHeight - document.getElementById('autoscrollmotion2').offsetHeight)) {
    +1
    document.getElementById('autoscrollmotion2').scrollTop = document.getElementById('autoscrollmotion2').scrollTop + 1
  }
  else { document.getElementById('autoscrollmotion2').scrollTop = 0; }
}

function ScrollDiv3() {

  if (document.getElementById('autoscrollmotion3').scrollTop < (document.getElementById('autoscrollmotion3').scrollHeight - document.getElementById('autoscrollmotion3').offsetHeight)) {
    -1
    document.getElementById('autoscrollmotion3').scrollTop = document.getElementById('autoscrollmotion3').scrollTop + 1
  }
  else { document.getElementById('autoscrollmotion3').scrollTop = 0; }
}

function ScrollDiv4() {

  if (document.getElementById('autoscrollmotion4').scrollTop < (document.getElementById('autoscrollmotion4').scrollHeight - document.getElementById('autoscrollmotion4').offsetHeight)) {
    -1
    document.getElementById('autoscrollmotion4').scrollTop = document.getElementById('autoscrollmotion4').scrollTop + 1
  }
  else { document.getElementById('autoscrollmotion4').scrollTop = 0; }
}

function ScrollDiv5() {

  if (document.getElementById('autoscrollmotion5').scrollTop < (document.getElementById('autoscrollmotion5').scrollHeight - document.getElementById('autoscrollmotion5').offsetHeight)) {
    -1
    document.getElementById('autoscrollmotion5').scrollTop = document.getElementById('autoscrollmotion5').scrollTop + 1
  }
  else { document.getElementById('autoscrollmotion5').scrollTop = 0; }
}

function ScrollDiv6() {

  if (document.getElementById('autoscrollmotion6').scrollTop < (document.getElementById('autoscrollmotion6').scrollHeight - document.getElementById('autoscrollmotion6').offsetHeight)) {
    -1
    document.getElementById('autoscrollmotion6').scrollTop = document.getElementById('autoscrollmotion6').scrollTop + 1
  }
  else { document.getElementById('autoscrollmotion6').scrollTop = 0; }
}

function ScrollDiv7() {

  if (document.getElementById('autoscrollmotion7').scrollTop < (document.getElementById('autoscrollmotion7').scrollHeight - document.getElementById('autoscrollmotion7').offsetHeight)) {
    -1
    document.getElementById('autoscrollmotion7').scrollTop = document.getElementById('autoscrollmotion7').scrollTop + 1
  }
  else { document.getElementById('autoscrollmotion7').scrollTop = 0; }
}

function ScrollDiv8() {

  if (document.getElementById('autoscrollmotion8').scrollTop < (document.getElementById('autoscrollmotion8').scrollHeight - document.getElementById('autoscrollmotion8').offsetHeight)) {
    -1
    document.getElementById('autoscrollmotion8').scrollTop = document.getElementById('autoscrollmotion8').scrollTop + 1
  }
  else { document.getElementById('autoscrollmotion8').scrollTop = 0; }
}

function ScrollDiv9() {

  if (document.getElementById('autoscrollmotion9').scrollTop < (document.getElementById('autoscrollmotion9').scrollHeight - document.getElementById('autoscrollmotion9').offsetHeight)) {
    -1
    document.getElementById('autoscrollmotion9').scrollTop = document.getElementById('autoscrollmotion9').scrollTop + 1
  }
  else { document.getElementById('autoscrollmotion9').scrollTop = 0; }
}

function ScrollDiv10() {

  if (document.getElementById('autoscrollmotion10').scrollTop < (document.getElementById('autoscrollmotion10').scrollHeight - document.getElementById('autoscrollmotion10').offsetHeight)) {
    -1
    document.getElementById('autoscrollmotion10').scrollTop = document.getElementById('autoscrollmotion10').scrollTop + 1
  }
  else { document.getElementById('autoscrollmotion10').scrollTop = 0; }
}

setInterval(ScrollDiv, 50)
setInterval(ScrollDiv2, 50)
setInterval(ScrollDiv3, 50)
setInterval(ScrollDiv4, 50)
setInterval(ScrollDiv5, 50)
setInterval(ScrollDiv6, 50)
setInterval(ScrollDiv7, 50)
setInterval(ScrollDiv8, 50)
setInterval(ScrollDiv9, 50)
setInterval(ScrollDiv10, 50)

var items;

//Starting fade-in animation
$(document).ready(function () {
  $("#r1quote").hide();
  $("#r2quote").hide();
  $("#r3quote").hide();
  $("#r4quote").hide();
  $("#r5quote").hide();
  $("#r6quote").hide();
  $("#r7quote").hide();
  $("#r8quote").hide();
  fade1.play();
  fade2.play();
  fade3.play();
  fade4.play();
  fade5.play();
  fade6.play();
  fade7.play();
  fade8.play();
  fade9.play();
  fade10.play();
});

var fade1 = anime({
  targets: '.row1',
  // translateY: [
  //   {value: -25, duration: 400},
  // ],
  opacity: [
    { value: 1, duration: 350 },
  ],
  delay: 0,
  easing: 'easeInOutQuad',
  autoplay: false
});

var fade2 = anime({
  targets: '.row2',
  // translateY: [
  //   {value: -25, duration: 400},
  // ],
  opacity: [
    { value: 1, duration: 350 },
  ],
  delay: 100,
  easing: 'easeInOutQuad',
  autoplay: false
});

var fade3 = anime({
  targets: '.row3',
  // translateY: [
  //   {value: -25, duration: 400},
  // ],
  opacity: [
    { value: 1, duration: 350 },
  ],
  delay: 200,
  easing: 'easeInOutQuad',
  autoplay: false
});

var fade4 = anime({
  targets: '.row4',
  // translateY: [
  //   {value: -25, duration: 400},
  // ],
  opacity: [
    { value: 1, duration: 350 },
  ],
  delay: 300,
  easing: 'easeInOutQuad',
  autoplay: false
});

var fade5 = anime({
  targets: '.row5',
  // translateY: [
  //   {value: -25, duration: 400},
  // ],
  opacity: [
    { value: 1, duration: 350 },
  ],
  delay: 400,
  easing: 'easeInOutQuad',
  autoplay: false
});

var fade6 = anime({
  targets: '.row6',
  // translateY: [
  //   {value: -25, duration: 400},
  // ],
  opacity: [
    { value: 1, duration: 350 },
  ],
  delay: 500,
  easing: 'easeInOutQuad',
  autoplay: false
});

var fade7 = anime({
  targets: '.row7',
  // translateY: [
  //   {value: -25, duration: 400},
  // ],
  opacity: [
    { value: 1, duration: 350 },
  ],
  delay: 600,
  easing: 'easeInOutQuad',
  autoplay: false
});

var fade8 = anime({
  targets: '.row8',
  // translateY: [
  //   {value: -25, duration: 400},
  // ],
  opacity: [
    { value: 1, duration: 350 },
  ],
  delay: 700,
  easing: 'easeInOutQuad',
  autoplay: false
});

var fade9 = anime({
  targets: '.row9',
  // translateY: [
  //   {value: -25, duration: 400},
  // ],
  opacity: [
    { value: 1, duration: 350 },
  ],
  delay: 800,
  easing: 'easeInOutQuad',
  autoplay: false
});

var fade10 = anime({
  targets: '.row10',
  opacity: [
    { value: 1, duration: 350 },
  ],
  delay: 800,
  easing: 'easeInOutQuad',
  autoplay: false
});

// Set the date we're counting down to
var countDownDate = new Date("Jun 1, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown-demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-demo").innerHTML = "EXPIRED";
  }
}, 1000);

function refreshPage() {
            location.reload(); // This reloads the page
        }
