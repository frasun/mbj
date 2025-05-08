import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set("[data-fade]", { autoAlpha: 0, y: 20 });
ScrollTrigger.batch("[data-fade]", {
	batchMax: 3,
	onEnter: (batch) =>
		gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.15, clearProps: "scale" }),
	once: true,
});

gsap.set("[data-splash]", {
	autoAlpha: 0,
	xPercent: window.innerWidth >= 800 ? -10 : 0,
	y: window.innerWidth < 800 ? 20 : 0,
});
gsap.to("[data-splash]", {
	autoAlpha: 1,
	xPercent: 0,
	y: 0,
	duration: 1,
	clearProps: "scale",
});

let mm = gsap.matchMedia();

mm.add("(min-width: 601px)", () => {
	gsap.set("[data-slide] img", { x: "15vw", autoAlpha: 0 });
	gsap.to("[data-slide] img", {
		autoAlpha: 1,
	});
	gsap.to("[data-slide] img", {
		scrollTrigger: {
			trigger: "[data-slide] img",
			scrub: 1,
			start: "top bottom",
			end: "bottom top",
			once: true,
		},
		x: "-15vw",
		clearProps: "scale",
	});
});
