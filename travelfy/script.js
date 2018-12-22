$(document).ready(function () {
    setTimeout(function () {
        $(".bg-img").css("height", "100%");
    }, 500);

    $(".bg1").hover(function () {
        $(".container-bg").css("background-color", "#025c89");
    }, function () {
        $(".container-bg").css("background-color", "rgb(132, 50, 71)");
    });
    $(".bg2").hover(function () {
        $(".container-bg").css("background-color", "#6d8472");
    }, function () {
        $(".container-bg").css("background-color", "rgb(132, 50, 71)");
    });
    $(".bg3").hover(function () {
        $(".container-bg").css("background-color", "#6397b5");
    }, function () {
        $(".container-bg").css("background-color", "rgb(132, 50, 71)");
    });
    $(".bg4").hover(function () {
        $(".container-bg").css("background-color", "#808893");
    }, function () {
        $(".container-bg").css("background-color", "rgb(132, 50, 71)");
    });
    $(".bg5").hover(function () {
        $(".container-bg").css("background-color", "#85d8e0");
    }, function () {
        $(".container-bg").css("background-color", "rgb(132, 50, 71)");
    });

    $(".featured-pane").each(function () {
        var thisImg = $(this).find(".img-place");
        $(this).hover(function () {
            thisImg.css("background-size", "105%");
        }, function () {
            thisImg.css("background-size", "100%");
        });
    });

    $(".bg-img:first-child").addClass("bg-img-active");

    setInterval(function () {
        //$(".bg-img").not(".bg-img-active").hide();
        $(".bg-img-active").removeClass("bg-img-active").next().addClass("bg-img-active");
        if ($(".bg-img-active").is(":last-child")) {
            setTimeout(function () {
                $(".bg-img").first().addClass("bg-img-active");
            }, 4000);
        }
    }, 4000);
});