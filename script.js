function loaderAnimation () {
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
    delay:1
})
tl.from("#page1",{
    y:1600,
    duration:1,
    ease:Power4.easeOut
})
tl.to('#loader',{
    display:'none',
    duration:0
})
tl.from('#nav',{
  opacity:0,
  y:-40
})
tl.from('#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1',{
  y:120,
  stagger:0.2
})

} 
loaderAnimation();

function cursorAnimation() {
  document.addEventListener('mousemove',function(e) {
    gsap.to('#circle',{
      top:e.y,
      left:e.x,
    })
  })
  
  Shery.makeMagnet("#nav-part2 h4");
}
cursorAnimation();