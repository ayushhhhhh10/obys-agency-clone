var tl = gsap.timeline();

tl.from(".line h1", {
  y: 100,
  stagger: 0.3,
  duration: 0.6,
  delay: 0.3,
});
tl.from("#line1-part1 ,.line h2", {
  opacity:0,
  duration:1,
  onStart: function () {
    var grow = 0;
    var timer = document.querySelector("#line1-part1 h5");

    setInterval(function () {
      if (grow < 100) {
        grow++;
        timer.innerHTML = grow++;
      } else {
        timer.innerHTML = grow;
      }
    }, 35);
  },
});
tl.to('#loader',{
    opacity:0,
    duration:0.5,
    delay:1.5
})
tl.from("#page1",{
    y:1600,
    duration:1,
    ease:Power4
})
tl.to('#loader',{
    display:'none'
})
