import anime from "animejs";

function fadeIn(element) {
  anime({
    targets: element,
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 2000,
    easing: "easeInOutExpo",
    delay: 500,
  });
}
export function scrollFadeIn(elsDom) {
  const windowHeight = window.innerHeight;
  if (!Array.isArray(elsDom)) elsDom = [elsDom];
  elsDom.forEach((el) => {
    const positionFromTop = el.getBoundingClientRect().top;
    if (positionFromTop - windowHeight <= 0 && !el.animated) {
      fadeIn(el);
      el.animated = true;
    }
  });
}
export function autoOpacity(element) {
  anime({
    targets: element,
    opacity: [0, 1],
    duration: 1000,
    easing: "easeInOutExpo",
    autoplay: true,
  });
}
