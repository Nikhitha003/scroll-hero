gsap.registerPlugin(ScrollTrigger);

const intro = gsap.timeline();

intro.from(".title", { 
  opacity: 0, 
  y: -50, 
  duration: 1.2, 
  ease: "power3.out" 
})
.from(".stat", { 
  opacity: 0, 
  y: 30, 
  stagger: 0.2, 
  duration: 0.8 
}, "-=0.8")
.to(".car", { 
  left: "5%", 
  duration: 1.5, 
  ease: "power2.out" 
}, "-=1");

const scrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=2000", 
    scrub: 1.5, 
    pin: true
  }
});

scrollTl.to(".car", { 
  x: window.innerWidth + 500, 
  ease: "none" 
}, 0)
.to(".road", { 
  x: -1500, 
  ease: "none" 
}, 0)
.to(".mountain", { 
  x: -400, 
  ease: "none" 
}, 0)
.to(".content", { 
  opacity: 0, 
  y: -100, 
  ease: "none" 
}, 0);
