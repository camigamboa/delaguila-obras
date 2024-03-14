window.onload = function() {
    var scrollBtn = document.getElementById("scrollBtn");

    window.addEventListener("scroll", function() {
        if (document.documentElement.scrollTop > 100) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};

