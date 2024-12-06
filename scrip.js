// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// saat humburger-menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
// toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

//klik diluar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e){
    if (!hm.constains(e.target) && !navbarNav.contains(e.target)){ 
    navbarNav.classList.remove('active');
    if (!sb.constains(e.target) && !searchForm.contains(e.target)){ 
    searchForm.classList.remove('active');
}
});