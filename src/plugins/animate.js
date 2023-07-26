import anime from "animejs";

export function fadeIn(element, delay = 10) {
  anime({
    targets: element,
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 1500,
    easing: "easeInOutExpo",
    delay: delay,
    once: true,
  });
}
export function autoOpacity(element, delay = 0) {
  anime({
    targets: element,
    opacity: [0, 1],
    duration: 1000,
    easing: "easeInQuad",
    autoplay: true,
    delay: delay,
  });
}

export function carouselShow(element, delay = 20) {
  anime({
    targets: element,
    opacity: [0, 1],
    duration: 1000,
    easing: "easeInQuad",
    delay: delay,
  });
}
export function carouselClose(element, delay = 0) {
  anime({
    targets: element,
    opacity: [1, 0],
    duration: 1000,
    easing: "easeInQuad",
    delay: delay,
  });
}
