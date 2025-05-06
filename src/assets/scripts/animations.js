import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", init);

function init() {
	gsap.set("[data-fade]", { autoAlpha: 0, y: 20 });
	ScrollTrigger.batch("[data-fade]", {
		batchMax: 3,
		onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.15 }),
	});

	gsap.set("[data-splash]", { autoAlpha: 0, x: "-10%" });
	gsap.to("[data-splash]", {
		autoAlpha: 1,
		x: 0,
	});
}
