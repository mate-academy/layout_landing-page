// #region PopUp
const popUPcloseBtn = document.querySelector('.pop-up__close-btn');
const popUp = document.querySelector('.pop-up__menu');
const headerBurgerBtn = document.querySelector('.btn-burger');
const header = document.querySelector('.header');
headerBurgerBtn.onclick = function() {
    popUp.classList.toggle('close');
    headerBurgerBtn.classList.toggle('close');
    header.classList.toggle('close');
};
popUPcloseBtn.onclick = function() {
    popUp.classList.toggle('close');
    header.classList.toggle('close');
    headerBurgerBtn.classList.toggle('close');
};
// #endregion
// #region Slide
const observer = new IntersectionObserver((entries, obs)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});
document.querySelectorAll('.animation--slide-left').forEach((el)=>observer.observe(el));
document.querySelectorAll('.animation--slide-right').forEach((el)=>observer.observe(el));
// #endregion
// #region FOG
document.querySelectorAll('.animation--fog').forEach((el)=>observer.observe(el));
// #endregion
document.querySelector('.btn-phone').addEventListener('click', function() {
    document.querySelector('.phone-link').click();
});
document.addEventListener('click', function(e) {
    if (e.target.matches('.navigation__link')) document.querySelector('.pop-up__close-btn').click();
});

//# sourceMappingURL=layout_landing-page.579125c3.js.map
