// GSAP ANIMATIONS
gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.batch(".card", {
  batchMax: 2,
  start: "90% 90%",
  onEnter: batch => gsap.to(batch, {
    y: 20,
    opacity: 1,
    duration: 2,
    ease: 'elastic',
    stagger: {each: .15, grid: [1,3]},
    overwrite: true
  }),
  onLeave: batch => {
    gsap.set(batch, {
      opacity: 0,
      y: 0,
      stagger: .15,
      overwrite: true
    })
  },
  onEnterBack: batch => {
    gsap.to(batch, {
      opacity: 1,
      y: 20,
      stagger: .15,
      overwrite: true
    })},
    onLeaveBack: batch => {
      gsap.set(batch, {
        opacity: 0,
        y: 0, 
        overwrite: true
      })
    }
})