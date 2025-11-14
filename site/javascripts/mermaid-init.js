document.addEventListener('DOMContentLoaded', () => {
  if (window.mermaid && !window.mermaid.initialized) {
    window.mermaid.initialize({
      startOnLoad: true,
      securityLevel: 'loose'
    });
    window.mermaid.initialized = true;
  }
});
