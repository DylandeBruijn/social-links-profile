import { gsap } from 'gsap';

let tl = gsap.timeline({ default: { ease: 'power1.in', duration: 1 } });
tl.from('.profile-card', { scale: 0, opacity: 0 });
tl.from('.profile-card__image', { y: -200, opacity: 0, scale: 0 });
tl.from('.profile-card__name', { x: -200, opacity: 0, scale: 0 }, '-=75%');
tl.from('.profile-card__location', { x: 200, opacity: 0, scale: 0 }, '-=75%');
tl.from('.profile-card__quote', { opacity: 0, scale: 0 }, '-=75%');
tl.from('.profile-card__link.github', { y: 200, opacity: 0, scale: 0 }, '-=75%');
tl.from('.profile-card__link.frontend-mentor', { y: 200, opacity: 0, scale: 0 }, '-=75%');
tl.from('.profile-card__link.linkedin', { y: 200, opacity: 0, scale: 0 }, '-=75%');
tl.from('.profile-card__link.twitter', { y: 200, opacity: 0, scale: 0 }, '-=75%');
tl.from('.profile-card__link.instagram', { y: 200, opacity: 0, scale: 0 }, '-=75%');
