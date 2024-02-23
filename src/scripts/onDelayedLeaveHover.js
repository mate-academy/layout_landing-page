export function onDelayedLeaveHover({ target, onEnter, onLeave, delay }) {
  let timer = 0;

  const onEnterHandler = (e) => {
    clearTimeout(timer);
    onEnter(e);
  };

  const onLeaveHandler = (e) => {
    timer = setTimeout(() => onLeave(e), delay);
  };

  target.addEventListener('mouseenter', onEnterHandler);
  target.addEventListener('mouseleave', onLeaveHandler);

  return {
    onEnterHandler,
    onLeaveHandler,
  };
}
