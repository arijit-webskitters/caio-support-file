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
        duration: 0.05,
    })
        .to(row_line, {
            ease: "none",
            height: "100%",
            // duration: 200,
        },"<")
    rowLineTl.pause();
    ScrollTrigger.create({
        trigger: product_dtls_row,
        start: "top 90%",
        end: "bottom 70%",
        animation: rowLineTl,
        scrub: 1,
        once: true,
        //markers: true,
    });



    let productPointcard = document.querySelectorAll('.product-point-card');
    productPointcard.forEach(eachCard => {
        let productToolLine = eachCard.querySelector('.product-point-card-line'),
            productToolHdng = eachCard.querySelector('.product-tool-hdng'),
            productToolListLi = eachCard.querySelectorAll('.product-dscp-richtxt ul li');

        let dtlsCardTl = gsap.timeline();

        gsap.set(productToolLine, {
            width: "0%",
        });
        if (eachCard.classList.contains('right')) {
            gsap.set(productToolHdng, {
                opacity: 0,
                x: 50,
            });
            productToolListLi.forEach(eachLi => {
                gsap.set(eachLi, {
                    opacity: 0,
                    x: 20,
                });
            })
        } else {
            gsap.set(productToolHdng, {
                opacity: 0,
                x: -50,
            });
            productToolListLi.forEach(eachLi => {
                gsap.set(eachLi, {
                    opacity: 0,
                    x: -20,
                });
            })
        }

        dtlsCardTl.to(productToolLine, {
            width: "100%",
            ease: "none",
            duration: 0.3,
        })
            .to(productToolHdng, {
                x: 0,
                opacity: 1,
                ease: "none",
                duration: 0.3,
            })
            .to(productToolListLi, {
                x: 0,
                opacity: 1,
                stagger: {
                    each: 0.3,
                    onComplete() {
                        //console.log(this.targets()[0]); // <= the current target
                        this.targets()[0].classList.add("show")
                    }
                },
                ease: "none",
                duration: 0.15,
            })

        dtlsCardTl.pause();


        ScrollTrigger.create({
            trigger: eachCard,
            start: "top 80%",
            // end: "bottom 100%",
            animation: dtlsCardTl,
            // scrub: 0.6,
        });
    })

}
