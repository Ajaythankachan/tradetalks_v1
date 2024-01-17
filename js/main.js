window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if (this.scrollY <= 10) nav.className = 'navbar-expand-lg navbar absolute-nav'; else nav.className = 'scroll navbar-expand-lg navbar absolute-nav';
};
$(".testimonial-content").owlCarousel({
    loop: true,
    items: 1,
    margin: 50,
    dots: true,
    nav: true,
    navText: ["<img data-aos='fade-up' data-aos-duration='1500' src='img/Algo/left.png'>", "<img data-aos='fade-up' data-aos-duration='1500' src='img/Algo/right.png'>"],
    mouseDrag: true,
    autoplay: false,
    autoplayTimeout: 4000,
    smartSpeed: 800
});


AOS.init({

});
// ----------------------------------------------------------------------------- gsap animations 

let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } })
let flagPoles = CSSRulePlugin.getRule(".card:before");

tl.to('.main-hd', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2 })
tl.to('.sub-head', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }, "-=2")
// tl.from('.sub-card', { scaleY: 0, stagger: .2 }, "-=2")
// tl.from(flagPoles, { stagger: 1, opacity: 0, transform: 'translateY(100px)' }, "-=2")
// tl.to('.title, .desc', { stagger: .1, duration: 1.2, opacity: 1, y: 0 }, "-=2")
// tl.to('footer', { opacity: 1 }, "-=2")