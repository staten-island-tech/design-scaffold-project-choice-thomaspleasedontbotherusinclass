import { gsap } from "gsap";


const tl = gsap.timeline({ delay: 0.2 });

tl.from(".wrapper-btn", {opacity:0, duration: 0.2})