if (jQuery('[data-toggle="tooltip"]').length) {
    jQuery('[data-toggle="tooltip"]').tooltip();
}

if (jQuery('.selectpicker').length) {
    jQuery('.selectpicker').selectpicker();
}

if (jQuery('.owl-carousel').length) {
    jQuery('.owl-carousel').owlCarousel();
}

let topNav = `<div class="top-bar bg-secondary py-2"> <div class="container"> <div class="row"> <div class="col-sm-6"> <ul class="social-links d-flex mb-0 justify-content-around justify-content-sm-start"> <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="d-inline-block p-2 text-white"><i class="fa fa-twitter" aria-hidden="true"></i></a></li><li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="d-inline-block p-2 text-white"><i class="fa fa-facebook" aria-hidden="true"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="d-inline-block p-2 text-white"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li><li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="d-inline-block p-2 text-white"><i class="fa fa-instagram" aria-hidden="true"></i></a></li><li><a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" class="d-inline-block p-2 text-white"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li></ul> </div><div class="col-sm-6"> <div class="d-sm-flex d-none align-items-center justify-content-end"> <a href="tel:+9199999999" rel="noopener noreferrer" class="py-2 text-white ml-2 mb-2 mb-sm-0"><i class="fa fa-phone" aria-hidden="true"></i> +91 999 999 9999</a> <a href="" class="btn btn-primary ml-3 mb-2 mb-sm-0">Book Car</a> <a href="" class="btn btn-success ml-3 mb-2 mb-sm-0"><i class="fa fa-phone" aria-hidden="true"></i> +91 999 999 9999</a> </div></div></div></div></div>`;

let navBar = `<nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom"> <div class="container"> <a class="navbar-brand" href="#">Car Rental</a> <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav ml-auto"> <li class="nav-item active"> <a class="nav-link" href="/about.html">About</a> </li><li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false"> Lease </a> <div class="dropdown-menu" aria-labelledby="navbarDropdown"> <a class="dropdown-item" href="#">Lease to Rent</a> <a class="dropdown-item" href="#">Lease to Own</a> </div></li></ul> </div></div></nav>`;

let footerNav = `<div class="footer-nav bg-secondary "> <div class="container p-0 p-sm-3"> <div class="d-sm-inline-block d-flex flex-column flex-sm-row"> <a href="#" class="d-inline-block text-decoration-none text-white px-2 py-3">About</a> <a href="#" class="d-inline-block text-decoration-none text-white px-2 py-3">Card for Sell</a> <a href="#" class="d-inline-block text-decoration-none text-white px-2 py-3">Our Location</a> <a href="#" class="d-inline-block text-decoration-none text-white px-2 py-3">FAQ's</a> <a href="#" class="d-inline-block text-decoration-none text-white px-2 py-3">Blog</a> <a href="#" class="d-inline-block text-decoration-none text-white px-2 py-3">Careers</a> <a href="#" class="d-inline-block text-decoration-none text-white px-2 py-3">Latest Promotions</a> <a href="#" class="d-inline-block text-decoration-none text-white px-2 py-3">Terms & Conditions</a> <a href="#" class="d-inline-block text-decoration-none text-white px-2 py-3">Privacy Policy</a> <a href="#" class="d-inline-block text-decoration-none text-white px-2 py-3">Contact Us</a> </div></div></div>`;

let footer = `<div class="footer-elements bg-dark py-5"> <div class="container"> <div class="row"> <div class="col-md-3 col-sm-6"> <div class="d-flex align-items-start mb-3 mb-sm-0"> <i class="fa fa-circle-o-notch fa-2x bg-primary rounded text-white p-3 mr-3" aria-hidden="true"></i> <div class="d-inline-block"> <h6 class="font-weight-bold m-0 text-white">For Accounts & Billing</h6> <a class=" text-white" href="tel:+919999999999">+91 999 999 9999</a> <a class=" text-white" href="mailto:billing@domain.com">billing@domain.com</a> </div></div></div><div class="col-md-3 col-sm-6"> <div class="d-flex align-items-start mb-3 mb-sm-0"> <i class="fa fa-map-marker fa-2x bg-primary rounded text-white p-3 mr-3" aria-hidden="true"></i> <div class="d-inline-block"> <h6 class="font-weight-bold mb-0 text-white">Address</h6> <p class="m-0 text-white">Speedy Drive Car Rental, Retail 04, Maison De Ville Breeze Hotel, Business Bay, Dubai, United Arab Emirates.</p></div></div></div><div class="col-md-3 col-sm-6"> <div class="d-flex align-items-start mb-3 mb-sm-0"> <i class="fa fa-location-arrow fa-2x bg-primary rounded text-white p-3 mr-3" aria-hidden="true"></i> <div class="d-inline-block"> <h6 class="font-weight-bold m-0 text-white">Emergency Contact</h6> <a class=" text-white" href="tel:+919999999999">+91 999 999 9999</a> <a class=" text-white" href="tel:+919999999999">+91 999 999 9999</a> </div></div></div><div class="col-md-3 col-sm-6"> <div class="d-flex align-items-start mb-3 mb-sm-0"> <i class="fa fa-user fa-2x bg-primary rounded text-white p-3 mr-3" aria-hidden="true"></i> <div class="d-inline-block"> <h6 class="font-weight-bold m-0 text-white">Sales</h6> <a class=" text-white" href="tel:+919999999999">+91 999 999 9999</a> <a class=" text-white" href="tel:+919999999999">+91 999 999 9999</a> <a class=" text-white" href="mailto:billing@domain.com">drive@domain.com</a> </div></div></div></div></div></div>`;

$(document).ready(function(){
    $('header').prepend(topNav);
    $('header').append(navBar);
    $('footer').prepend(footerNav);
    $('footer').append(footer);
});
