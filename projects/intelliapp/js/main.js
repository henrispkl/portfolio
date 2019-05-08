function parallaxBg(element, factor = 4) {
    document.addEventListener("scroll", () => {
        let h = document.documentElement,
            b = document.body,
            st = "scrollTop",
            sh = "scrollHeight";
        let percentage = Math.round(
            ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
        );
        element.style.backgroundPositionY = percentage / factor + "%";
    });
}

let bg = document.getElementById("main-image");
parallaxBg(bg, 1);

//////////////////////////////

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
};

// Get the header
var header = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
