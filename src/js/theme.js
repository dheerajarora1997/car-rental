if (jQuery('[data-toggle="tooltip"]').length) {
    jQuery('[data-toggle="tooltip"]').tooltip();
}

if (jQuery('.selectpicker').length) {
    jQuery('.selectpicker').selectpicker();
}

if (jQuery('.owl-carousel').length) {
    jQuery('.owl-carousel').owlCarousel();
}

let topNav = `<div class="top-bar bg-secondary py-2"> <div class="container"> <div class="row"> <div class="col-sm-6"> <ul class="social-links d-flex mb-0"> <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="d-inline-block p-2 text-white"><i class="fa fa-twitter" aria-hidden="true"></i></a></li><li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="d-inline-block p-2 text-white"><i class="fa fa-facebook" aria-hidden="true"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="d-inline-block p-2 text-white"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li><li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="d-inline-block p-2 text-white"><i class="fa fa-instagram" aria-hidden="true"></i></a></li><li><a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" class="d-inline-block p-2 text-white"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li></ul> </div><div class="col-sm-6"> <div class="d-flex align-items-center justify-content-end"> <a href="tel:+9199999999" rel="noopener noreferrer" class="py-2 text-white ml-2"><i class="fa fa-phone" aria-hidden="true"></i> +91 999 999 9999</a> <a href="" class="btn btn-primary ml-3">Book Car</a> <a href="" class="btn btn-success ml-3"><i class="fa fa-phone" aria-hidden="true"></i> +91 999 999 9999</a> </div></div></div></div></div>`;

let navBar = `<nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom"> <div class="container"> <a class="navbar-brand" href="#">Navbar</a> <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav ml-auto"> <li class="nav-item active"> <a class="nav-link" href="/about.html">About</a> </li><li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false"> Lease </a> <div class="dropdown-menu" aria-labelledby="navbarDropdown"> <a class="dropdown-item" href="#">Lease to Rent</a> <a class="dropdown-item" href="#">Lease to Own</a> </div></li></ul> </div></div></nav>`;

let footer = ``;

$(document).ready(function(){
    $('header').prepend(topNav);
    $('header').append(navBar);
});
