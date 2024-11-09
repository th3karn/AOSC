// var tl = gsap.timelime()
gsap.from(".main-content .h1",{
  y:30,
  duration:1
})
gsap.from(".main-content h2 ",{
  y:130,
  duration:1.2
})
gsap.from(".main-content ",{
  y:40,
  duration:1
})

gsap.from(".right h2 ",{
  y:130,
  duration:1.2
})

gsap.from(".right p",{
  y:50,
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    start:"top 65%",
    end:"top 67%",

  }
})
gsap.from(".right button",{
  y:40,
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    start:"top 45%",
    end:"top 47%",

  }
})
gsap.from(".needs .box",{
  y:170,
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    start:"top 7%",
    end:"top 8%",

  }
})
gsap.from(".con3>h1",{
  y:120,
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    start:"top -7%",
    end:"top -8%",

  }
})
gsap.from(".con3 .main .left1, .right1",{
  y:180,
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    start:"top -37%",
    end:"top -39%",

  }
})



gsap.from(".page3 .ano-main .btn1 .btn2",{
  y:60,
  duration:1,
  scrollTrigger:{
    trigger:".page3",
    scroller:"body",
    start:"top -13%",
    end:"top -14%",

  }
})


gsap.from(".page4 .last-data .right",{
  y:180,
  duration:0.8,
  scrollTrigger:{
    trigger:".page4",
    scroller:"body",
    start:"top 70%",
    end:"top 71%",
  }
})
gsap.from(".page4 .last-data .right .btn3",{
  y:60,
  duration:0.8,
  scrollTrigger:{
    trigger:".page4",
    scroller:"body",
    start:"top 40%",
    end:"top 41%",

  }
})

