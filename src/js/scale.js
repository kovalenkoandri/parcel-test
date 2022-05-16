window.onresize = function () {
  let container = document.getElementById('partners__ul');
  const minScale = 0.75;
  const maxScale = 3;
  let scale = Math.min(
    window.innerWidth / (container.offsetWidth + 8),
    window.innerHeight / (container.offsetHeight + 8),
  );
  scale = Math.min(maxScale, Math.max(minScale, scale));
  document.documentElement.style.setProperty('--trickyScale', scale);
};
