export function setOverflowBody(hash) {
  return () => {
    const doesMatch = window.location.hash === hash;

    document.body.style.overflow = doesMatch ? 'hidden' : 'auto';
  };
}
