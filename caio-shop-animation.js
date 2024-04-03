// Tokennomics Animation
if ($(".prdct-dscp-dtls-wpr").length) {
    let product_dtls_row = document.querySelector('.prdct-point-row');
    let row_line = product_dtls_row.querySelector('.prdct-point-line'),
        row_dot = product_dtls_row.querySelector('.prdct-point-dot');
    let rowLineTl = gsap.timeline();

    gsap.set(row_line, {
        height: "0%",
    })
    gsap.set(row_dot, {
        scale: 0,
    })

    rowLineTl.to(row_dot, {
        scale: 1,
        duration: 0.2
    })
    .to(row_line, {
        height: "100%",
    })
    rowLineTl.pause();
    ScrollTrigger.create({
        trigger: product_dtls_row,
        start: "top 80%",
        end: "bottom 100%",
        animation: rowLineTl,
        scrub: true,
    })
}



if ($(".prdct-dscp-dtls-wprsss").length) {
    tokenSecTl.from(tokenSec_circle1, {
        //   delay: 1,
        ease: "none",
        duration: 0.3,
        opacity: 0,
    })
        .from(tokenSec_circle2, {
            ease: "none",
            duration: 0.3,
            opacity: 0,
        })
        .from(tokenSec_logo, {
            ease: "none",
            duration: 0.3,
            scale: 0,
        }, "-=0.1")
        // .fromTo(".box", { opacity: 0 }, { opacity: 0.5, duration: 1 })
        .to(tokenSec_leftPoint_each, {
            ease: "none",
            duration: 0.15,
            y: 0,
            stagger: {
                each: 0.3,
                onComplete() {
                    //console.log(this.targets()[0]); // <= the current target
                    this.targets()[0].classList.add("show")
                }
            }

        }, "-=0.1")
        .to(benifitSec_right_box_each, {
            ease: "none",
            duration: 0.05,
            y: 0,
            stagger: {
                each: 0.3,
                onComplete() {
                    //console.log(this.targets()[0]); // <= the current target
                    this.targets()[0].classList.add("show")
                }
            }

        }, "<")
        .from(btnWpr, {
            ease: "none",
            duration: 0.3,
            y: 0,
            opacity: 0,
        })

    ScrollTrigger.create({
        trigger: product_dtls_row,
        start: "top 90%",
        animation: tokenSecTl,
    })

}
