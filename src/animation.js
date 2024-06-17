// animations.js

export const animateOnScroll = (element, animation) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add(animation);
        observer.unobserve(element); // Stop observing after animation starts
      }
    },
    {
      threshold: 0.1,
    }
  );
  observer.observe(element);
};

export const disconnectObserver = (element) => {
  const observer = new IntersectionObserver(
    () => {},
    {
      threshold: 0.1,
    }
  );
  observer.unobserve(element);
};
