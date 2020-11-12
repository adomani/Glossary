window.MathJax = {
  tex: {
    macros: {
      A: '{\\mathbb A}',
      C: '{\\mathbb C}',
      N: '{\\mathbb N}',
      P: '{\\mathbb P}',
      Q: '{\\mathbb Q}',
      R: '{\\mathbb R}',
      Z: '{\\mathbb Z}',
      fm: '{\\mathfrak m}',
      fp: '{\\mathfrak p}',
      fq: '{\\mathfrak q}',
      zmod: ['{\\Z/ #1 \\Z}', 1],
      spec: '{\\operatorname{Spec}\\,}',
      oh: '{\\frac{1}{2}}',
      zoh: '{\\Z [\\oh]}',
      RR: "{\\bf R}",
      bold: ["{\\bf #1}", 1]
    }  
  }    
};
  
(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  script.async = true;
  document.head.appendChild(script);
})();