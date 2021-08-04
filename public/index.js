let resumeLink = document.querySelector('#resume-link');
let resume = document.querySelector("#resume");
let body = document.querySelector("body");
let cover = document.querySelector("#cover");

let resumeLink1 = document.querySelector("#resume-mob-link");

let mobileLayout = document.querySelector('#mobile-layout');

let mobileMenu = document.querySelector("#open-mobile-menu");


resumeLink.addEventListener("click", function () {
    resume.style.width="100%"
    body.style.overflowY="hidden";
    cover.style.left="100%";
});

resumeLink1.addEventListener("click", function () {
    resume.style.width="100%"
    body.style.overflowY="hidden";
    cover.style.left="100%";
});

let aboutLink = document.querySelector('#about-link');
let aboutLink1 = document.querySelector('#about-mob-link');
let about = document.querySelector("#about-me");



aboutLink.addEventListener("click", function () {
    about.style.width="100%"
    body.style.overflowY="hidden";
    cover.style.left="100%";
});

aboutLink1.addEventListener("click", function () {
    about.style.width="100%"
    body.style.overflowY="hidden";
    cover.style.left="100%";
});

let portfolioLink = document.querySelector('#portfolio-link');
let portfolioLink1 = document.querySelector('#portfolio-mob-link');
let portfolio = document.querySelector("#portfolio");

portfolioLink.addEventListener("click", function () {
    portfolio.style.width="100%"
    body.style.overflowY="hidden";
    cover.style.left="100%";
});

portfolioLink1.addEventListener("click", function () {
    portfolio.style.width="100%"
    body.style.overflowY="hidden";
    cover.style.left="100%";
});

let blogLink = document.querySelector('#blog-link');
let blogLink1 = document.querySelector('#blog-mob-link');
let blog = document.querySelector("#blog");

blogLink.addEventListener("click", function () {
    blog.style.width="100%"
    body.style.overflowY="hidden";
    cover.style.left="100%";
});

blogLink1.addEventListener("click", function () {
    blog.style.width="100%"
    body.style.overflowY="hidden";
    cover.style.left="100%";
});

let contactLink = document.querySelector('#contact-link');
let contactLink1 = document.querySelector('#contact-mob-link');
let contact = document.querySelector("#contact");

contactLink.addEventListener("click", function () {
    contact.style.width="100%"
    body.style.overflowY="hidden";
    cover.style.left="100%";
}); 

contactLink1.addEventListener("click", function () {
    contact.style.width="100%"
    body.style.overflowY="hidden";
    cover.style.left="100%";
}); 
 
let close = document.querySelectorAll(".close");

for (let i = 0; i < close.length; i++) {
close[i].addEventListener("click", function () {
resume.style.width="0%"
about.style.width="0%"
portfolio.style.width="0%"
blog.style.width="0%"
contact.style.width="0%"
body.style.overflowY="auto";
cover.style.left="-100%";
mobileLayout.style.display = "none";

})    
}

mobileMenu.addEventListener("click", function () {
    mobileLayout.style.display="block";
    cover.style.left="100%";
    body.style.overflowY="hidden";

})


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff, font-size: 20px}";
    document.body.appendChild(css);
};

 