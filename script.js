/*=====================================
        STICKY HEADER
=====================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/*=====================================
        SMOOTH MENU LINKS
=====================================*/

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        }

    });

});


/*=====================================
        ACTIVE NAVIGATION
=====================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=====================================
        SCROLL REVEAL
=====================================*/

const revealItems = document.querySelectorAll(
    ".service-card, .why-card, .review-card, .about-image, .about-content, .contact-grid"
);

function revealOnScroll() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const visible = window.innerHeight - 120;

        if (top < visible) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


/*=====================================
        HERO IMAGE EFFECT
=====================================*/

window.addEventListener("load", () => {

    const heroImage = document.querySelector(".hero-right img");

    if (heroImage) {

        heroImage.style.opacity = "1";

        heroImage.style.transform = "translateY(0)";

    }

});


/*=====================================
        BUTTON HOVER EFFECT
=====================================*/

document.querySelectorAll(".btn,.btn2,.btn-nav").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = ".3s";

    });

});


/*=====================================
        PAGE LOADER (Optional)
=====================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
/*=====================================
        MOBILE MENU
=====================================*/

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("mobile-active");

        const icon = menuToggle.querySelector("i");

        if (nav.classList.contains("mobile-active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

        } else {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

}


/*=====================================
      CLOSE MENU AFTER CLICK
=====================================*/

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-active");

        if (menuToggle) {

            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

        }

    });

});


/*=====================================
          HERO PARALLAX
=====================================*/

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.style.backgroundPositionY = (window.scrollY * 0.4) + "px";

    }

});




/*=====================================
         BUTTON RIPPLE
=====================================*/

document.querySelectorAll(".btn,.btn2,.btn-nav").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.style.left = e.clientX - rect.left + "px";

        ripple.style.top = e.clientY - rect.top + "px";

        ripple.className = "ripple";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/*=====================================
        PRELOAD IMAGES
=====================================*/

window.addEventListener("load", () => {

    document.querySelectorAll("img").forEach(img => {

        const image = new Image();

        image.src = img.src;

    });

});


/*=====================================
      CONSOLE SIGNATURE
=====================================*/

console.log("%cINET COMPUTER SYSTEMS",
    "color:#0078ff;font-size:22px;font-weight:bold;");

console.log("%cProfessional IT & Security Solutions",
    "color:#25D366;font-size:14px;");