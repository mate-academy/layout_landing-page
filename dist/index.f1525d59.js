var e=document.querySelectorAll(".my-element"),t=new IntersectionObserver(function(e,t){e.forEach(function(e){e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")})},{root:null,rootMargin:"0px",threshold:.1});e.forEach(function(e){return t.observe(e)});
//# sourceMappingURL=index.f1525d59.js.map
