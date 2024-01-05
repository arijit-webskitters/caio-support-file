var Webflow = Webflow || [];
Webflow.push(function () {
  // document start
  gsap.registerPlugin(ScrollTrigger);
  window.history.scrollRestoration = "manual";
  ScrollTrigger.clearScrollMemory();
  window.scrollTo(0, 0);

  

  function page_anim() {
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
