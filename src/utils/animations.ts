
// Intersection Observer utility for animations
export const createObserver = (callback: IntersectionObserverCallback, options = {}) => {
  return new IntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: '0px',
    ...options,
  });
};

// Animation delay utility
export const getAnimationDelay = (index: number, baseDelay = 0.1) => {
  return `${baseDelay * index}s`;
};

// Scroll to section utility
export const scrollToSection = (sectionId: string) => {
  const section = document.querySelector(sectionId);
  if (section) {
    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY - 80,
      behavior: 'smooth',
    });
  }
};
