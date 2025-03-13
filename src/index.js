window.addEventListener("hashchange", function() {
  "#menu" === window.location.hash ? document.body.classList.add("page__body--with-menu") : document.body.classList.remove("page__body--with-menu")
});
var e = document.getElementById("form");
e.addEventListener("submit", function(n) {
  n.preventDefault(),
  e.reset()
});
//# sourceMappingURL=index.5800ab25.js.map
