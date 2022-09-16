// Gallery slider

(function() {
    const nextBtn = document.querySelector(".btn-next");
    const prevBtn = document.querySelector(".btn-prev");
    const slide = document.querySelectorAll(".gallary-img");
    let i = 0;

    prevBtn.onclick = function() {
    slide[i].classList.remove("active");
    i--;

    if (i < 0) {
        i = slide.length - 1;
    }
    slide[i].classList.add("active");
    };

    nextBtn.onclick = function() {
    slide[i].classList.remove("active");
    i++;

    if (i >= slide.length) {
        i = 0;
    }

    slide[i].classList.add("active");
    };
})()