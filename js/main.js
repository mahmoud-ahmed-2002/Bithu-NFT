$('#owl-one').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})

$('#owl-two').owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
// $(document).ready(function () {
//     var scroll_pos = 0;
//     $(document).scroll(function () {
//         scroll_pos = $(this).scrollTop();
//         if (scroll_pos > 210) {
//             $("header .navbar").css({ backgroundColor: "rgba(27, 34, 38, 0.8)", backdropFilter: "blur(9000);" });
//         } else {
//             $("header .navbar").css({ backgroundColor: "transparent" });
//         }

//     });
// });

window.onscroll = () => { scrollNavbar() };
scrollNavbar = () => {
    let navBar = document.getElementById("navi")
    if (document.documentElement.scrollTop > 150) {
        navBar.classList.add("nav-style")
    }
    else {
        navBar.classList.remove("nav-style")
    }
}


jQuery(document).ready(function () {
    var paragraphs = $('section.question .acco-section .faq-questions .accordion-panel').hide(); // hide paragraph without CSS
    $('section.question .acco-section .faq-questions .accordion').click(function () {
        paragraphs.not($(this).next()).slideUp(200) // one paragraph will be Show
        $(this).next().slideToggle(200)
    });
});

$('section.home .count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 200000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// let mintedCount = document.querySelector("section.home .box .count")
// window.onscroll = function () {
//     if (window.scrollY >= 50) {
//         mintedCount(el)
//     }
// };
// function mintedCount(el) {
//     let mint = el.dataset.mint;
//     let count = setInterval(() => {
//         el.textContent++;
//         if (el.textContent == mint) {
//             clearInterval(count)
//         }
//     }, 10)
// }


// let sectionCounterCount = document.querySelectorAll(".counter-section .box .items .counter")
// let started = false;


// window.onscroll = function () {
//     if (window.scrollY >= 500) {
//         if (!started) {
//             sectionCounterCount.forEach((num) => startCount(num));
//         }
//         started = true;
//     }
// };
function startCount(el) {
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(counter)
        }
    }, 2000 / goal)
}
