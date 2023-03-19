window.addEventListener('scroll', evt => {
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
});