// Locomotive Scroll
function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    
      // follwoing line is not required to work pinning on touch screen
    
      /* pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed"*/
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locoScroll();

// Cursor Effects
let cursor = document.querySelector("#cursor");
let page1Content = document.querySelector("#page1-content");

page1Content.addEventListener('mousemove',(event)=>{
    gsap.to("#cursor",{
        x: event.x-50,
        y: event.y-80,
    })
})

page1Content.addEventListener('mouseleave',(event)=>{
    gsap.to("#cursor",{
        scale: 0,
        rotate: "30deg",
        opacity: 0,
    })
})

page1Content.addEventListener('mouseenter',(event)=>{
    gsap.to("#cursor",{
        scale: 1,
        opacity:1,
        rotate: "0deg",
    })
    cursor.textContent = "Play Reel";
    cursor.style.backgroundColor = "#ff5f38";
})

// Loader Animation
function loaderAnimation(){
    var tl1 = gsap.timeline();

tl1.from("#loader h3",{
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})

tl1.to("#loader h3",{
    x: -40,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.1
})

tl1.to("#loader",{
    y: "-100%",
    opacity: 0,
    duration: 1,
})

tl1.from("#page1-content h1 span",{
    y: 100,
    opacity: 0,
    stagger: 0.1,
    delay: -0.2,
    ease: Power4.InOut
})

tl1.to("#loader",{
    display: "none",
})
}
loaderAnimation();


// Text Animation in page2
function page2Animation(){
    const tl = gsap.timeline({scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 80%",
        end: "top 5%",
        //markers: true,
        scrub: 2,
    }});

    tl.from("#p2-title-part1 h2, #p2-title-part2 h1",{
        y: 80,
        opacity: 0,
        stagger: 0.2,
        ease: Power2.InOut,
        duration: 3,
    })
    tl.from("#page2 #line", {
            width: "0%", // Set the final width of the line to 100%
            duration: 1, // Animation duration
            ease: Power4.InOut // Easing function
    });
    tl.from(".span-wrapper span",{
        y: "4vw",
        duration: 1,
    })
}
page2Animation();

function page3Animation(){
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 50%",
            end: "bottom 20%",
            //markers: true,
        }
    })

    tl2.from("#page3-text h3",{
        x: 30,
        opacity: 0,
        duration: 1,
    })
    tl2.from("#page3-text h1",{
        y: "7vw",
        duration: 1,
    })
    tl2.from("#box-top h2",{
        x: -50,
        duration: 1,
        opacity: 0,
        delay: 0.5,
    })
    tl2.from(".box",{
        x: -50,
        duration: 2,
        opacity: 0,
        delay: 0.7,
        stagger: 0.2,
    })
}
page3Animation();

function page4Animation(){
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4-titles",
            scroller: "#main",
            start: "top 60%",
            end: "bottom 40%",
            //markers: true,
            scrub: 1,
        }
    });
    tl3.from("#p4-title-part1 h2",{
        y: 50,
        opacity: 0,
        ease: Power2.InOut,
        duration: 0.5,
    });
    tl3.from("#page4 #line", {
            width: "0%", // Set the final width of the line to 100%
            duration: 0.5, // Animation duration
            ease: Power4.InOut // Easing function
    });
    tl3.from("#motive .span-wrapper span",{
        y: "9vw",
        duration: 0.6,
    });
}
page4Animation();

function page6Animation(){
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page6-titles",
            scroller: "#main",
            start: "top 60%",
            end: "bottom 40%",
            //markers: true,
            scrub: 1,
        }
    });
    tl3.from("#p6-title-part1 h2",{
        y: 50,
        opacity: 0,
        ease: Power2.InOut,
        duration: 1,
    });
    tl3.from("#page6 #line", {
            width: "0%", // Set the final width of the line to 100%
            duration: 1, // Animation duration
            ease: Power4.InOut // Easing function
    });
    tl3.from("#extra-features .span-wrapper span",{
        y: "9vw",
        duration: 0.6,
    });
}
page6Animation();

function page7Animation(){
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page7",
            scroller: "#main",
            start: "top 60%",
            end: "bottom 40%",
            //markers: true,
        }
    });
    tl4.from("#p7-heading",{
        x: -80,
        opacity: 0,
        ease: Power2.InOut,
        duration: 1,
    });
    tl4.from("#p7-subheading",{
        x: 80,
        opacity: 0,
        ease: Power2.InOut,
        duration: 1,
    });
    tl4.from(".swiper",{
        x: 80,
        opacity: 0,
        ease: Power2.InOut,
        duration: 1,
    });
}
page7Animation();

function page8Animation(){
    const tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page8",
            scroller: "#main",
            start: "top 60%",
            end: "bottom 90%",
            //markers: true,
            scrub: 2
        }
    });

    tl5.from("#page8-text h3",{
        x: 30,
        opacity: 0,
        duration: 0.3,
    });

    tl5.from("#page8-text h1",{
        y: "5vw",
        duration: 0.5,
    });
}   
page8Animation()

function footerAnimation(){
    const tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: "footer",
            scroller: "#main",
            start: "top 70%",
            end: "bottom 40%",
            markers: true,
            scrub: 2
        }
    });

    tl6.from("#f1-part1-left,#f1-part1-right",{
        y: 60,
        duration: 2,
        ease: Power3.InOut,
        opacity: 0.4,
    });

    tl6.from("footer",{
        height: "50vh",
        ease: Power2.InOut,
        duration:5,
    });

    tl6.from("#f2-info-left",{
        x: -70,
        duration: 1,
        opacity: 0,
        stagger: 0.1,
        ease: Power3.InOut,
    })
    tl6.from("#f2-info-right",{
        x: 70,
        duration: 1,
        opacity: 0,
        stagger: 0.1,
        ease: Power3.InOut,
    })
    tl6.from("#f2-info-bottom h1 span",{
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 2,
        ease: Power4.InOut
    })
}
footerAnimation();


// Underline Animation for page3 text, page8 text
let block1 = document.querySelectorAll("#block1");
let block2 = document.querySelectorAll("#block2");
let block3 = document.querySelectorAll("#block3");
let p3TextH1 = document.querySelectorAll("#page3-text h1");
let p8TextH1 = document.querySelectorAll("#page8-text h1");

p3TextH1.forEach((b)=>{
    b.addEventListener('mouseenter',()=>{
        gsap.to("#block1,#block2",{
            x: 800,
            duration: 0.3,
        })
    })
    b.addEventListener('mouseleave',()=>{
        gsap.to("#block1,#block2",{
            x: 0,
            duration: 0.3,
        })
    })
})

p8TextH1.forEach((b)=>{
    b.addEventListener('mouseenter',()=>{
        gsap.to("#block3",{
            x: 800,
            duration: 0.3,
        })
    })
    b.addEventListener('mouseleave',()=>{
        gsap.to("#block3",{
            x: 0,
            duration: 0.3,
        })
    })
})

// Page3 Box Img and Video switch
let boxes = document.querySelectorAll(".box");
let logoImg = document.querySelectorAll(".logo-img");
let contentImg = document.querySelectorAll(".content-img");
let contentVideo = document.querySelectorAll(".box video");
let i;

boxes.forEach((box)=>{
    box.addEventListener('mouseenter',(event)=>{
        if(event.target.classList.contains("box1"))
        i = 0;
        else if(event.target.classList.contains("box2"))
        i = 1;
        else
        i = 2;

        logoImg[i].style.opacity = 0;
        contentImg[i].style.opacity = 0;
        contentVideo[i].style.opacity = 1;
        contentVideo[i].play();
    })

    box.addEventListener('mouseleave',(event)=>{
        if(event.target.classList.contains("box1"))
        i = 0;
        else if(event.target.classList.contains("box2"))
        i = 1;
        else
        i = 2;

        logoImg[i].style.opacity = 1;
        contentImg[i].style.opacity = 1;
        contentVideo[i].style.opacity = 0;
        contentVideo[i].pause();
    })
})

let p5Container = document.querySelector("#page5");
p5Container.addEventListener('mousemove', (event) => {
    gsap.to("#cursor", {
        x: event.x - 50,
        y: event.y - 80,
    });
});

p5Container.addEventListener('mouseleave', (event) => {
    gsap.to("#cursor", {
        scale: 0,
        rotate: "30deg",
        opacity: 0,
    });
});

p5Container.addEventListener('mouseenter', (event) => {
    gsap.to("#cursor", {
        scale: 1,
        opacity: 1,
        rotate: "0deg",
    });

    cursor.textContent = "Take It!";
    cursor.style.backgroundColor = "#000";
});

// Swiper JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
  });
