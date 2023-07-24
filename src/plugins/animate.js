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
export function autoOpacity(element) {
  anime({
    targets: element,
    opacity: [0, 1],
    duration: 1000,
    easing: "easeInOutExpo",
    autoplay: true,
  });
}
