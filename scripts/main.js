import { gsap } from 'gsap';

let tl = gsap.timeline({ default: { ease: 'power1.in', duration: 1 } });
tl.from('.profile-card', { scale: 0, opacity: 0 });
tl.from('.profile-card__image', { opacity: 0, scale: 0 });
tl.from('.profile-card__name', { opacity: 0, scale: 0 }, '-=75%');
tl.from('.profile-card__location', { opacity: 0, scale: 0 }, '-=75%');
tl.from('.profile-card__quote', { opacity: 0, scale: 0 }, '-=75%');
tl.from('.profile-card__link.github', { opacity: 0, scale: 0 }, '-=75%');
tl.from('.profile-card__link.frontend-mentor', { opacity: 0, scale: 0 }, '-=75%');
tl.from('.profile-card__link.linkedin', { opacity: 0, scale: 0 }, '-=75%');
tl.from('.profile-card__link.twitter', { opacity: 0, scale: 0 }, '-=75%');
tl.from('.profile-card__link.instagram', { opacity: 0, scale: 0 }, '-=75%');
