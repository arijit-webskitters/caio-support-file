function preventDefault(e) {
  e.preventDefault();
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  // window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  // window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

var Webflow = Webflow || [];
Webflow.push(function () {
    // document start
    gsap.registerPlugin(ScrollTrigger);
    window.history.scrollRestoration = "manual";
    ScrollTrigger.clearScrollMemory();
    window.scrollTo(0, 0);
    function page_anim() {

          if ($(".the-caio-sec").length) {
    let caioTl = gsap.timeline();
    const el = document.querySelector(".the-caio-sec");
    let heading = el.querySelector(".the-caio-big-txt"),
        headingMob=  el.querySelector(".the-caio-mob-txt"),
      img = el.querySelector(".the-caio-img-wpr"),
      largeContainer = el.querySelector(".caio-large-container"),
      mdmContainer = el.querySelector(".caio-medium-container"),
      caioSticker = el.querySelector(".caio-sticker"),
      imgMob = el.querySelector(".the-caio-img"),
      cntntHdng = el.querySelector(".the-caio-cntnt-hdng"),
      para = el.querySelector(".the-caio-txt-wpr p"),        
      btn = el.querySelector(".the-caio-sec .btn-wpr"),
      subheadline = el.querySelector(".the-caio-subtxt1 p"),
      subheadline2 = el.querySelector(".the-caio-subtxt2 p"),
      baseSticker = el.querySelector(".caio-sticker-wpr"),
      baseLeftArrow = el.querySelector(".base-tool-arw-btn.left-arrow"),
      baseRightArrow = el.querySelector(".base-tool-arw-btn.right-arrow"),
      baseSlider = el.querySelector(".base-tool-slider"),
      topSticker = el.querySelector(".caio-top-sticker-wpr"),
        topLeftArrow = el.querySelector(".top-tool-arw-btn.left-arrow"),
      topRightArrow = el.querySelector(".top-tool-arw-btn.right-arrow"),
      topSlider = el.querySelector(".top-tool-slider"),
      topSliderAnimWpr = el.querySelector(".top-slider-aniamtion-wpr"),
      //altImg = el.querySelector(".ps"),
      item = el.querySelector(".rv-section-rht-col");

    gsap.set(heading, { 
        opacity: (window.innerWidth > 767 ? 0 : 1), 
        letterSpacing: "-0.1em" });
    Splitting({ target: para, by: "chars" });
    gsap.set(para, { opacity: 0 });
    gsap.set([largeContainer,caioSticker], { opacity: 0, y: -30, });
    gsap.set([mdmContainer], { opacity: 0, y: 30, });
    gsap.set(para.querySelectorAll(".word"), {
      "will-change": "opacity",
      opacity: 0.1,
    });
    gsap.set(cntntHdng, { opacity: 0, y: 50 });              
    gsap.set(img, { 
        opacity: (window.innerWidth > 767 ? 0 : 1), 
        x:(window.innerWidth > 767 ? "-4vw" : '-10vw'), 
        y: '7vw', 
        scale: (window.innerWidth > 767 ? 0.6 : 0.8), 
        rotate: -25 
    });
    gsap.set(btn, { opacity: 0, yPercent: 100 });
    gsap.set([baseSticker,topSticker], { opacity: 0, y: 50 });
    gsap.set([baseLeftArrow,topLeftArrow], { opacity: 0, x: -50 });
    gsap.set([baseRightArrow,topRightArrow], { opacity: 0, x: 50 });
    gsap.set([baseSlider,topSlider], { opacity: 0, y: 70 });
    gsap.set([topSliderAnimWpr], { opacity: 0, pointerEvents: "none" });
    gsap.set([subheadline, subheadline2], {
      opacity: 0,
      pointerEvents: "none",
    });
              /*
    gsap.set(altImg, {
      opacity: 0,
      pointerEvents: "none",
      xPercent: -50,
      yPercent: 25,
    });
    */
    gsap.set(item, { opacity: 0, pointerEvents: "none" });
              

    caioTl
      .to(heading, {
        duration: 0.5,
        letterSpacing: (window.innerWidth > 767 ? "-0.05em" : '0em'),
        yPercent: (window.innerWidth > 767 ? -50 : 140),
        opacity: 1,
      })
      .to(
        img,
        {
          duration: 1,
          opacity: 1,
          y: (window.innerWidth > 767 ? '0vw' : '-3vw'),
        },
        "<"
      )
      .to(cntntHdng, { opacity: 1, y:0 }, "<")
      .set(para, { opacity: 1 }, "<")
      .to(
        para.querySelectorAll(".word"),
        {
          ease: "none",
          duration: 0.3,
          opacity: 1,
          stagger: 0.01,
        },
        "<"
      )
      .to(btn, { delay: 0.5, duration: 0.3, opacity: 1, yPercent: 0 }, "<")
      .to(heading, {
        delay: 0.1,
        duration: 0.5,
        opacity: 0,
        letterSpacing: "-0.1em",
      })
      .to([para, cntntHdng, btn], { duration: 0.5, opacity: 0, yPercent: 25 }, "<")
      // .to(img, { duration: 0.6, y: '0vw', xPercent: 39, rotate: 0 }, "-=0.3")
      .to(img, { 
          duration: 0.6,
          y: ()=>{
                  if(window.innerWidth > 767 ){
                      return "0vw";
                  }
                  else if (window.innerWidth > 479 && window.innerWidth < 768) {
                      return "15vw";
                  }
                  else{
                      return  "25vw";
                  }
              },
          //     (
              
          //     window.innerWidth > 767 ? '0vw' : '15vw'
          // ),
          x: '0vw',
          xPercent: (window.innerWidth > 767 ? 37.6 : 0),
          rotate: 0,
      },
          "-=0.3")
      .to(subheadline, {
        duration: 0.3,
        opacity: 1,
        pointerEvents: "all",
      })
      .to(subheadline, {
        delay: 0.15,
        duration: 0.3,
        opacity: 0,
        pointerEvents: "none",
      })
      .to(subheadline2, {
        duration: 0.3,
        opacity: 1,
        pointerEvents: "all",
      })
      .to(subheadline2, {
        delay: 0.15,
        duration: 0.3,
        opacity: 0,
        pointerEvents: "none",
      })
      .to(img, { 
          duration: 1, 
          scale: (window.innerWidth > 767 ? 0.75 : 1),
      }, "-=1.3")
     /* .to(img, {
        duration: 0.3,
        scale: 0.5,
        yPercent: 5,
        opacity: 0,
      })
      .to(altImg, {
        duration: 0.7,
        yPercent: 0,
        opacity: 1,
        pointerEvents: "all",
      })
      .to(
        item,
        {
          duration: 0.5,
          opacity: 1,
          pointerEvents: "all",
        },
        "-=0.3"
      )
      .to(altImg, {
        opacity: 1,
      })*/

.to(img, {
        duration: 0.3,
        scale: 0.4,
        // y: '8vw',
        x: 
            (window.innerWidth > 767 ? 0 : 8),
            // ()=>{
            //       if(window.innerWidth > 575 ){
            //           return 0;
            //       }
            //       else if (window.innerWidth > 479 && window.innerWidth < 576) {
            //           return 8;
            //       }
            //       else{
            //           return  -3;
            //       }
            //   },
        y: 
            ()=>{
                  if(window.innerWidth > 767 ){
                      return "8vw";
                  }
                  else if (window.innerWidth > 479 && window.innerWidth < 768) {
                      return "34vh";
                  }
                  else{
                      return  "27vh";
                  }
              },
        // y: ()=>{(window.innerWidth > 767 ? '8vw' : '30vh')},
        opacity: 1,
      })
      .to(
        item,
        {
          duration: 0.5,
          opacity: 1,
          pointerEvents: "all",
        },
        "-=0.3"
      )
      .to(img, {
        opacity: 1,
      })
      .to(img, {
        opacity: 1,
      })
    .to(img, {
        y: () => {
            if (window.innerWidth > 767) {
                return "-0.5vw";
            }
            else if (window.innerWidth > 479 && window.innerWidth < 768) {
                return "16vh";
            }
            else {
                return "14vh";
            }
        },
        scale: () => {
            if (window.innerWidth > 767) {
                return 0.5;
            }
            else if (window.innerWidth > 479 && window.innerWidth < 768) {
                return 0.7;
            }
            else {
                return 0.7;
            }
        },
        opacity: 0,            
    })
    .to(baseSticker,{
        y: 0,
        opacity: 1,            
    },"-=40%")
    .to(baseSticker,{
        y: 0,
        opacity: 1,            
    },"-=40%")
    .to([baseLeftArrow,baseRightArrow],{
        x: 0,
        opacity: 1,            
    },"-=40%")
    .to([baseSlider],{
        y: 0,
        opacity: 1,            
    },"-=40%")
    .to(baseSlider,{
        opacity: 0,
        delay: 0.2,
    })
    .to(baseSticker,{
        y: 50,
        opacity: 0,            
    })
    .to([baseLeftArrow],{
        x: -20,
        opacity: 0,            
    },"<")
    .to([baseRightArrow],{
        x: 20,
        opacity: 0,            
    },"<")
    .to([baseSlider],{
        y: 50,
        opacity: 0,            
    },"<")
    .set([topSliderAnimWpr], { 
        opacity: 1,
        pointerEvents: "all" })
    .to(topSticker,{
        y: 0,
        opacity: 1,            
    },"-=40%")
    .to([topLeftArrow,topRightArrow],{
        x: 0,
        opacity: 1,            
    },"-=40%")
    .to([topSlider],{
        y: 0,
        opacity: 1,            
    },"-=40%")
      .pause();
    ScrollTrigger.create({
      trigger: ".caio-sec-cntnt",
      start: "top 70%",
      end: "+=350%",
      animation: caioTl,
      toggleActions: "play none play none",
      invalidateOnRefresh: true,
      scrub: 1.3,
      // markers: true,
      //onEnter: () => ScrollTrigger.refresh(),
      onUpdate: (self) => {
        console.log(self.progress);
        if (self.progress > 0.42 && self.progress <= 0.538) {
            $(".rv-section-rht-col").addClass("present");
            $(".the-caio-img-wpr").addClass("part-show");                
        } else {
            $(".rv-section-rht-col").removeClass("present");
            $(".the-caio-img-wpr").removeClass("part-show");                
        }
        if (self.progress > 0.42 && self.progress <= 0.50) {
            disableScroll()
            setTimeout(function(){
                enableScroll()              
             },1500)
        } else {
            $(".the-caio-img-wpr").removeClass("part-show");
            // setTimeout(function(){
            //     $(".the-caio-img-wpr").removeClass("part-show");                
            // },3500)
        }
        /*if (self.progress > 0.75 && self.progress <= 0.9) {
            // setTimeout(function(){
                $(".the-caio-img-wpr").addClass("part-show");                
                $(".the-caio-img-wpr").removeClass("instant");                
            // },3500)
        } else if(self.progress>0.9) {
            $(".the-caio-img-wpr").addClass("instant");
        } else {
            $(".the-caio-img-wpr").removeClass("part-show");
            // setTimeout(function(){
            //     $(".the-caio-img-wpr").removeClass("part-show");                
            // },3500)
        }*/
      },
    });

    ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "+=350%",
      invalidateOnRefresh: true,
      pin: true,
      // markers: true,
    });
              

    if($(window).width()<768){
        gsap.set(headingMob, { opacity: 0, y: 50 });
        gsap.set(imgMob, { opacity: 0, y: -150 });
        let caioTlMob = gsap.timeline({
            defaults: {
                duration: 1.5,
                ease: "none",
            },
        });
        caioTlMob.to(headingMob, {
            opacity:1,
            y: 0,
            delay: 2.5,
        })
            .to(imgMob, {
                opacity:1,
                y: 0,
            }, "-=0.2")
    }
  };

        //title/paragraph text anim
        if ($("[data-effect]").length) {
            let el_effects = document.querySelectorAll("[data-effect]");
            el_effects.forEach((t) => {
                let Tl = gsap.timeline({
                    defaults: {
                        duration: 1,
                    },
                });
                //   console.log(t.dataset.effect);
                let pos = t.getBoundingClientRect();
                function animload() {
                    Splitting({ target: t, by: "chars" });
                    gsap.set(t, { opacity: 0 });
                    if (t.dataset.effect == "title") {
                        const e = t.querySelectorAll(".word");
                        e.forEach((m) =>
                            gsap.set(m.parentNode, {
                                perspective: 1e3,
                            })
                        );
                        Tl = gsap.timeline({
                            defaults: {
                                ease: "Power3.easeOut",
                                duration: 0.7,
                            },
                        });
                        Tl.set(t, { opacity: 1 });
                        Tl.fromTo(
                            e,
                            {
                                "will-change": "opacity, transform",
                                opacity: 0,
                                rotateX: () => gsap.utils.random(-120, 120),
                                z: () => gsap.utils.random(-200, 200),
                                filter: "blur(10px)",
                                scale: () => gsap.utils.random(-0.5, 1.5),
                            },
                            {
                                opacity: 1,
                                rotateX: 0,
                                scale: 1,
                                z: 0,
                                filter: "none",
                                stagger: 0.06,
                            }
                        ).pause();
                        if (pos.top < window.innerHeight) {
                            Tl.play();
                        } else {
                            ScrollTrigger.create({
                                trigger: t,
                                start: "top 80%",
                                end: "bottom bottom",
                                animation: Tl,
                                toggleActions: "play none play none",
                                // scrub: 1.3,
                                // markers: true,
                            });
                        }
                    }
                    if (t.dataset.effect == "header") {
                        const e = t.querySelectorAll(".char");
                        e.forEach((m) =>
                            gsap.set(m.parentNode, {
                                perspective: 1e3,
                            })
                        );
                        gsap.set(t, { scaleX: 0 });
                        Tl = gsap.timeline({
                            defaults: {
                                ease: "Power3.easeOut",
                                duration: 0.7,
                            },
                        });
                        Tl.set(t, { opacity: 1 })
                            .fromTo(t, { scaleX: 0 }, { scaleX: 1 })
                            .fromTo(
                                e,
                                {
                                    "will-change": "opacity,",
                                    opacity: 0,
                                },
                                {
                                    opacity: 1,
                                    stagger: 0.06,
                                }
                            )
                            .pause();
                        if (pos.top < window.innerHeight) {
                            Tl.play();
                        } else {
                            ScrollTrigger.create({
                                trigger: t,
                                start: "top 80%",
                                end: "bottom bottom",
                                animation: Tl,
                                toggleActions: "play none play none",
                                // scrub: 1.3,
                                // markers: true,
                            });
                        }
                    }
                    if (t.dataset.effect == "paragraph") {
                        Tl.set(t, { opacity: 1 });
                        Tl.fromTo(
                            t.querySelectorAll(".word"),
                            {
                                "will-change": "opacity",
                                opacity: 0.1,
                            },
                            {
                                ease: "none",
                                opacity: 1,
                                stagger: 0.05,
                            }
                        ).pause();
                        if (pos.top < window.innerHeight) {
                            Tl.timeScale(2).play();
                        } else {
                            ScrollTrigger.create({
                                trigger: t,
                                start: "top 90%",
                                end: "bottom 90%",
                                scrub: 1.3,
                                animation: Tl,
                                // markers: true,
                            });
                        }
                    }
                    if (t.dataset.effect == "squeeze") {
                        Tl.set(t, { opacity: 1 });
                        const e = t.querySelectorAll(".char");
                        Tl.fromTo(
                            t,
                            {
                                letterSpacing: "-0.1em",
                                opacity: 0,
                            },
                            {
                                letterSpacing: "-0.05em",
                                opacity: 1,
                            }
                        ).pause();
                        if (pos.top < window.innerHeight) {
                            setTimeout(() => {
                                Tl.timeScale(0.5).play();
                            }, 800);
                        } else {
                            ScrollTrigger.create({
                                trigger: t,
                                start: "top 80%",
                                end: "bottom 50%",
                                scrub: 1.3,
                                animation: Tl,
                                // markers: true,
                            });
                        }
                    }
                }
                //set animation on section enter
                ScrollTrigger.create({
                    trigger: t,
                    start: "top bottom",
                    onEnter: animload,
                    onEnterBack: animload,
                    once: true,
                    // markers:true,
                });
            });
        }
        //position anim -from
        if ($("[data-position]").length) {
            let el_position = document.querySelectorAll("[data-position]");
            el_position.forEach((t) => {
                const pos = t.getBoundingClientRect();
                gsap.set(t, { opacity: 0 });
                let Tl = gsap.timeline({
                    defaults: {
                        repeatRefresh: true,
                        ease: "Power3.easeOut",
                        duration: 1.5,
                        stagger: 0.1,
                    },
                });
                Tl.set(t, { opacity: 1 });
                if (pos.top > window.innerHeight) {
                    ScrollTrigger.create({
                        trigger: t,
                        start: "top 85%",
                        end: "bottom bottom",
                        animation: Tl,
                        toggleActions: "play none play none",
                        invalidateOnRefresh: true,
                        // scrub: 1.3,
                        // markers: true,
                    });
                }
                // console.log(t.dataset.position);
                function animload() {
                    if (t.dataset.position == "left") {
                        Tl.fromTo(
                            t,
                            {
                                "will-change": "opacity, transform",
                                opacity: 0,
                                xPercent: -100,
                            },
                            {
                                opacity: 1,
                                xPercent: 0,
                                stagger: 0.06,
                            }
                        ).pause();
                    }
                    if (t.dataset.position == "right") {
                        Tl.fromTo(
                            t,
                            {
                                "will-change": "opacity, transform",
                                opacity: 0,
                                xPercent: 100,
                            },
                            {
                                opacity: 1,
                                xPercent: 0,
                                stagger: 0.06,
                            }
                        ).pause();
                    }
                    if (t.dataset.position == "top") {
                        Tl.fromTo(
                            t,
                            {
                                "will-change": "opacity, transform",
                                opacity: 0,
                                yPercent: -100,
                            },
                            {
                                opacity: 1,
                                yPercent: 0,
                                stagger: 0.06,
                            }
                        ).pause();
                    }
                    if (t.dataset.position == "bottom") {
                        Tl.fromTo(
                            t,
                            {
                                "will-change": "opacity, transform",
                                opacity: 0,
                                yPercent: 100,
                            },
                            {
                                opacity: 1,
                                yPercent: 0,
                                stagger: 0.06,
                            }
                        ).pause();
                    }
                    if (t.dataset.position == "scale") {
                        Tl.fromTo(
                            t,
                            {
                                "will-change": "opacity, transform",
                                opacity: 0,
                                scale: 0,
                            },
                            {
                                opacity: 1,
                                scale: 1,
                                stagger: 0.06,
                            }
                        ).pause();
                    }
                    if (pos.top < window.innerHeight) {
                        setTimeout(() => {
                            Tl.timeScale(0.5).play();
                        }, 1200);
                    }
                }
                //set animation on section enter
                ScrollTrigger.create({
                    invalidateOnRefresh: true,
                    trigger: t,
                    start: "top bottom",
                    onEnter: animload,
                    onEnterBack: animload,
                    once: true,
                    // markers: true,
                });
            });
        }
        //parallax
        if ($("[data-parallax]").length) {
            const parallax_box = document.querySelectorAll("[data-parallax]");
            parallax_box.forEach(function (prel) {
                const data = prel.dataset.parallax;
                const parallax_el = prel.querySelectorAll("[data-speed]");
                if (parallax_el.length > 0) {
                    parallax_el.forEach(function (el) {
                        let smoothVal =
                            Number(el.dataset.speed === 0 ? 1 : el.dataset.speed) * 100;
                        let topPos = el.getBoundingClientRect().top;
                        // console.log(topPos);
                        gsap.to(el, {
                            yPercent: () => -smoothVal,
                            ease: "none",
                            scrollTrigger: {
                                start: () =>
                                    topPos > window.innerHeight ? "top bottom" : "top top",
                                trigger: prel,
                                scrub: 1.3,
                                // markers: true,
                            },
                        });
                    });
                } else {
                    let elPos = prel.getBoundingClientRect().top;
                    if (data == "scaleX") {
                        gsap.to(prel, {
                            transformOrigin: "left center",
                            xPercent: () => -15,
                            scaleX: () => 1.5,
                            ease: "none",
                            scrollTrigger: {
                                start: () =>
                                    elPos > window.innerHeight ? "top bottom" : "top top",
                                trigger: prel,
                                scrub: 1.5,
                                // markers: true,
                            },
                        });
                    } else if (data == "scale") {
                        gsap.to(prel, {
                            transformOrigin: "bottom center",
                            scale: () => 1.5,
                            ease: "none",
                            scrollTrigger: {
                                start: () =>
                                    elPos > window.innerHeight ? "top bottom" : "top top",
                                trigger: prel,
                                scrub: 1.5,
                                // markers: true,
                            },
                        });
                    } else {
                        gsap.to(prel, {
                            xPercent: -100,
                            ease: "none",
                            scrollTrigger: {
                                start: () =>
                                    elPos > window.innerHeight ? "top 75%" : "top top",
                                end: () => "bottom 30%",
                                trigger: prel,
                                scrub: 1.3,
                                // markers: true,
                            },
                        });
                    }
                }
            });
        }
        if ($("[data-reveal]").length) {
            const reveal_box = document.querySelectorAll("[data-reveal]");
            reveal_box.forEach(function (revEl) {
                let elPos = revEl.getBoundingClientRect().top;
                ScrollTrigger.create({
                    invalidateOnRefresh: true,
                    start: () => (elPos > window.innerHeight ? "top 85%" : "top top"),
                    trigger: revEl,
                    onEnter: () => revEl.classList.add("onViewport"),
                    onEnterBack: () => revEl.classList.add("onViewport"),
                    // markers: true,
                });
            });
        }
        if ($("[data-scroll]").length) {
          const scroll_box = document.querySelectorAll("[data-scroll]");
          scroll_box.forEach(function (revEl) {
            const dataval = revEl.dataset.scroll;
            gsap.to(revEl, {
              x: () => (revEl.scrollWidth - window.innerWidth + (window.innerWidth > 991 ? 50 : 20)) * -1,
              scrollTrigger: {
                start: () => dataval == "center" ? "top 65%" : "top 70%",
                end: () => dataval == "center" ? "bottom 45%" : "bottom 30%",
                trigger: revEl,
                scrub: 1.3,
                // markers: true,
              },
            })
          });
        }

        
    }

    //page loader
    if ($("#loader").length) {
        gsap.set(".ld1", { transformOrigin: "50% 50%" });
        gsap.set(".ld2", { x: -70, opacity: 0 });
        gsap.set(".ld3", { y: -50, opacity: 0 });
        gsap.set(".ld4", { y: 50, opacity: 0 });
        var loader_tl = gsap.timeline({ repeat: -1 });
        loader_tl
            .to(".ld1", {
                duration: 0.7,
                ease: "Power2.easeOut",
                scale: 1.2,
                transformOrigin: "50% 50%",
            })
            .to(".ld1", {
                duration: 0.7,
                ease: "Power2.easeOut",
                scale: 0.8,
                opacity: 0.8,
            })
            .to(".ld1", {
                duration: 0.6,
                ease: "Power2.easeIn",
                scale: 1,
                opacity: 1,
            });
        function loader() {
            loader_tl
                .repeat(0)
                .to(".loader_inner", { duration: 0.3, ease: "Power2.easeOut", x: 0 })
                .to(".ld2", { duration: 0.3, ease: "Power2.easeOut", opacity: 1, x: 0 })
                .to(
                    ".ld3",
                    { duration: 0.5, ease: "Power2.easeOut", opacity: 1, y: 0 },
                    "<"
                )
                .to(
                    ".ld4",
                    { duration: 0.5, ease: "Power2.easeOut", opacity: 1, y: 0 },
                    "<"
                )
                .to(".loader_inner", {
                    scale: 1.3,
                    opacity: 0,
                    duration: 0.5,
                    ease: "Power2.easeOut",
                    onComplete: () => {
                        ScrollTrigger.refresh();
                        gsap.set("#loader", { display: "none" });
                        if ($(".reveal_outer").length) {
                            document.querySelector(".reveal_outer").classList.add("loaded");
                            gsap.set(".main-footer", { y: 10 });
                        } else {
                            gsap.set("body", { overflow: "auto" });
                            gsap.to(".banner .container", { delay: 0.3, opacity: 1 });
                        }
                        page_anim();
                    },
                })
                .to(
                    "#loader",
                    {
                        duration: 1.3,
                        ease: "Power2.easeIn",
                        opacity: 0,
                    },
                    "<"
                );
        }
        //for home page
        if ($(".reveal_outer").length) {
            document.body.style.overflow = "hidden";
            //mouse scroll action
            var scrollPos = "down";
            window.addEventListener("wheel", (event) => {
                if (event.deltaY > 0) {
                    scrollPos = "down";
                }
                if (event.deltaY < 0) {
                    scrollPos = "up";
                }
                // console.log(scrollPos);
            });
            //touch action
            const touch = {
                threshold: 50,
                listening: false,
                startX: 0,
                startY: 0,
                dx: 0,
                dy: 0,
                startTime: 0,
                dt: 0,
            };
            Reveal.initialize({
                mouseWheel: false,
                touch: false,
                controls: false,
                controlsTutorial: false,
                progress: false,
                respondToHashChanges: false,
                jumpToSlide: false,
                keyboard: false,
                overview: false,
                fragments: false,
                fragmentInURL: false,
                help: false,
                hideInactiveCursor: false,
                embedded: true,
                width: window.innerWidth,
                height: window.innerHeight,
                margin: 0,
                minScale: 1,
                maxScale: 1,
            });
            Reveal.layout();
            Reveal.on("ready", (event) => {
                //progressbar
                loader();
                let parent = document.querySelector(".reveal_outer"),
                    els = parent.querySelectorAll(".slides>.rv-section");
                let list = document.createElement("ul");
                list.classList.add("list");
                parent.append(list);
                els.forEach((el, i) => {
                    let li = document.createElement("li");
                    // li.innerHTML = (i + 1).toString().padStart(2, 0);
                    list.append(li);
                });
                list.querySelectorAll("li")[event.indexh].classList.add("active");
                //split by lines
                document.querySelectorAll(".cover_fig_outer .ban-h1").forEach((tr) => {
                    Splitting({ target: tr, by: "lines" });
                    tr.querySelectorAll(".word").forEach((wrd) => {
                        wrd.innerHTML =
                            "<span class='wrd_anim'>" + wrd.innerHTML + "</div>";
                        wrd.querySelector(".wrd_anim").style.cssText = wrd.style.cssText;
                    });
                });
                setTimeout(() => {
                    //enable reveal
                    touch.listening = true;
                    Reveal.configure({
                        mouseWheel: true,
                    });
                }, 3000);
            });
            Reveal.on("slidechanged", (event) => {
                ScrollTrigger.refresh();
                Reveal.configure({
                    mouseWheel: false,
                });
                let list = document.querySelector(".list");
                let els = list.querySelectorAll("li");
                els.forEach((el, i) => {
                    el.classList.remove("active");
                });
                list.querySelectorAll("li")[event.indexh].classList.add("active");
            });
            Reveal.on("slidetransitionend", (event) => {
                Reveal.configure({
                    mouseWheel: true,
                });
                setTimeout(() => {
                    if (
                        event.indexh ==
                        document.querySelectorAll(".reveal>.slides>section").length - 1 &&
                        scrollPos == "down"
                    ) {
                        // console.log("last slidetransitionend");
                        document.body.style.overflow = "auto";
                        Reveal.configure({
                            mouseWheel: false,
                        });
                    }
                }, 1500);
            });
            window.addEventListener("resize", () => {
                Reveal.configure({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
                ScrollTrigger.refresh();
            });
            ScrollTrigger.create({
                trigger: ".reveal_outer",
                start: "top top",
                end: 50,
                onEnterBack: () => {
                    Reveal.configure({
                        mouseWheel: true,
                    });
                    document.body.style.overflow = "hidden";
                    // console.log("onEnterBack");
                },
                onLeave: () => {
                    Reveal.configure({
                        mouseWheel: false,
                    });
                    document.body.style.overflow = "auto";
                    // console.log("onLeave");
                },
                // markers: true,
            });
            document.addEventListener("touchstart", handleTouchStart, false);
            document.addEventListener("touchmove", handleTouchMove, false);
            document.addEventListener("touchend", handleTouchEnd, false);
            function handleDirection() {
                if (!touch.listening) return;
                touch.listening = false;
                if (scrollPos === "down") {
                    Reveal.next();
                    setTimeout(() => {
                        touch.listening = true;
                    }, 600);
                }
                if (scrollPos === "up") {
                    // console.log(current, next);
                    Reveal.prev();
                    setTimeout(() => {
                        touch.listening = true;
                    }, 600);
                }
            }
            function handleTouchStart(e) {
                if (!touch.listening) return;
                const t = e.changedTouches[0];
                touch.startX = t.pageX;
                touch.startY = t.pageY;
            }
            function handleTouchMove(e) {
                if (!touch.listening) return;
                e.preventDefault();
            }
            function handleTouchEnd(e) {
                if (!touch.listening) return;
                const t = e.changedTouches[0];
                touch.dx = t.pageX - touch.startX;
                touch.dy = t.pageY - touch.startY;
                if (Math.abs(touch.dy) < touch.threshold) {
                    touch.listening = false;
                    setTimeout(() => {
                        touch.listening = true;
                    }, 300);
                } else {
                    if (touch.dy > 1) scrollPos = "up";
                    if (touch.dy < -1) scrollPos = "down";
                }
                handleDirection();
            }
        }
        //for other pages - not contains reveal.js
        else {
            loader();
        }
    }
    //end loader
    else {
        ScrollTrigger.refresh();
        gsap.set("body", { overflow: "auto" });
        gsap.to(".banner .container", { opacity: 1, onComplete: page_anim });
    }
});
