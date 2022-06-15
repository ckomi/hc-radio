/*========================================== PARTICLES.JS ==========================================*/
particlesJS("particles-js", { particles: { number: { value: 160, density: { enable: !0, value_area: 800 } }, color: { value: "#ffffff" }, shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } }, opacity: { value: .25, random: !1, anim: { enable: !1, speed: 1, opacity_min: .1, sync: !1 } }, size: { value: 3, random: !0, anim: { enable: !1, speed: 40, size_min: .1, sync: !1 } }, line_linked: { enable: !0, distance: 150, color: "#ffffff", opacity: .3, width: 1 }, move: { enable: !0, speed: 3, direction: "none", random: !1, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 600, rotateY: 1200 } } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: !0, mode: "repulse" }, onclick: { enable: !0, mode: "push" }, resize: !0 }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: .4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } }, retina_detect: !0 });
/*========================================== Animations On Scroll ==========================================*/
$(document).ready((function() { AOS.init() }));
/*========================================== LOADING Home items ==========================================*/

$(document).ready(function() {

    if ($(".burger").css('display') == 'none') {
        $("#navnav").hide().delay(3100).fadeIn(1000);
    } else {
        $(".burger").hide().delay(3100).fadeIn(1000);
        $(".brandForMobile").hide().delay(3100).fadeIn(1000);
    }

    $("#header h1").hide().delay(3300).fadeIn(1000);
    $("#header p").hide().delay(3400).fadeIn(1000);
    $("#header .loginButton").hide().delay(3500).fadeIn(1000);
    $("#playhc").hide().delay(3500).fadeIn(500);

    $("#playlists").hide().delay(3500).fadeIn(500);

    $("#eventSection").hide().delay(3500).fadeIn(500);

    $("#aboutSection").hide().delay(3500).fadeIn(500);
    $("#contactus").hide().delay(3500).fadeIn(500);
    $("#footer").hide().delay(3500).fadeIn(500);

});

setTimeout(function() {
    $("#logo").fadeOut(500);
}, 3000);

/*========================================== SMOOTH SCROLL onClick HREF ==========================================*/

$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({ scrollTop: pos });
});

/*========================================== BURGER BAR ==========================================*/



var burger = document.querySelector('.burger');

// On click hamburger menu SHOW/HIDE items for MOBILE
function openBurger() {
    // Get Overlay, Nav items & burger icons
    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');

    nav.classList.toggle("showMenu");
    burger.classList.toggle("toggle")

    if (burger.classList.contains("toggle")) {
        overlay.classList.add("showOverlay");
    } else {
        overlay.classList.remove("showOverlay");
    }
    // All from HOME without BACKGROUND
    $(".brandForMobile").toggle();
    $("header h1").toggle();
    $("header p").toggle();
    $(".loginButton").toggle();
    // PLAY HC section
    $("#playhc").toggle();
    // PLAYLIST section
    $("#playlists").toggle();
    // EVENTS section
    $("#eventSection").toggle();
    // ABOUTUS section
    $("#aboutSection").toggle();
    // CONTACT section
    $("#contactus").toggle();
    // FOOTER section
    $("#footer").toggle();
};

// On click HREF mobile SHOW/HIDE
$(document).ready(function() {
    $('.linkKaElem').click(function() {
        // IF BURGER have class TOGGLE do:
        if (burger.classList.contains("toggle")) {
            // Call function to show all elements ^^^
            openBurger();
        }
    });
});
/*========================================== PLAY / PAUSE Rotate ==========================================*/

// On click PLAY/PAUSE do
function playPause() {
    // Rotating/Stop rotating
    var cheeckRotate = document.getElementById("disklogo");
    // if animation is PAUSED in CSS
    if (window.getComputedStyle(cheeckRotate).WebkitAnimationPlayState === "paused") {

        // On play set animation: RUNNING; to disk & music
        document.getElementById("musiclogo").style.WebkitAnimationPlayState = "running";
        document.getElementById("disklogo").style.WebkitAnimationPlayState = "running";
        // On play set visible: HIDDEN; to play and VISIBLE to pause
        document.getElementById("playlogo").style.visibility = 'hidden';
        document.getElementById("pauselogo").style.visibility = 'visible';

    } else {
        // On play set animation: PAUSED; to disk & music
        document.getElementById("musiclogo").style.WebkitAnimationPlayState = "paused";
        document.getElementById("disklogo").style.WebkitAnimationPlayState = "paused";
        // On pause set visible: HIDDEN; to pause and VISIBLE to play
        document.getElementById("playlogo").style.visibility = 'visible';
        document.getElementById("pauselogo").style.visibility = 'hidden';
    }
};

/*========================================== PLAY / PAUSE Music ==========================================*/

var audio = document.getElementById("music");

function play() {
    audio.load()
    audio.play();
};

var audioStop = document.getElementById("music");

function pause() {
    audioStop.pause();
    audioStop.load()
};

/*========================================== CHOSE STREAM FROM LIST ==========================================*/

var streamPlay = document.getElementById("music");

function playTechno() {
    streamPlay.src = "http://uk7.internet-radio.com:8000/listen.pls";
    stopMusic();
}

function playTrance() {
    streamPlay.src = "http://81.88.36.42:8010/;stream/1";
    stopMusic();
}

function playHipHop() {
    streamPlay.src = "http://149.56.175.167:5708/;stream/1";
    stopMusic();
}

function playAmbient() {
    streamPlay.src = "http://www.partyviberadio.com:8056/;stream/1";
    stopMusic();
}

function stopMusic() {
    // On play set animation: PAUSED; to disk & music
    document.getElementById("musiclogo").style.WebkitAnimationPlayState = "paused";
    document.getElementById("disklogo").style.WebkitAnimationPlayState = "paused";
    // On pause set visible: HIDDEN; to pause and VISIBLE to play
    document.getElementById("playlogo").style.visibility = 'visible';
    document.getElementById("pauselogo").style.visibility = 'hidden';
};

/*========================================== PLAYLISTS / CLOSE Buttons ==========================================*/

/* On click PLAYLISTS HREF show playlist div */
$(document).ready(function() {
    $('#playlistID').click(function() {
        showPlaylist();
    });
});

/* On click PLAYLISTS button */
function showPlaylist() {
    /* Hide PLAYLISTS button & ARROWS down */
    /* Show PLAYLISTS DIV & CLOSE button & ARROWS up */
    $('.pShowButton').css("display", "none");
    $('.pHideButton').css("display", "inline-block");
    $('.showPlaylistScrolldown').css("display", "none");
    $('.hidePlaylistScrolldown').css("display", "block");
    /* Set HEIGHT from 0 -> 450px */
    $('#playlists').css("height", "450px");
    $('#peoples').css("margin-top", "630px");
}

/* On click CLOSE button */
function hidePlaylist() {
    /* Show PLAYLISTS button & ARROWS down */
    /* Hide PLAYLISTS DIV & CLOSE button & ARROWS up */
    $('.pShowButton').css("display", "inline-block");
    $('.pHideButton').css("display", "none");
    $('.showPlaylistScrolldown').css("display", "block");
    $('.hidePlaylistScrolldown').css("display", "none");
    /* Set HEIGHT from 450 -> 0px */
    $('#playlists').css("height", "0px");
    $('#peoples').css("margin-top", "480px");
}

/*========================================== EVENTS Overlay ==========================================*/

var eventHc = document.getElementsByClassName("eventhc");
var prevEventHc;

for (var i = 0; i < eventHc.length; i++) {
    eventHc[i].onclick = function() {
        var classes = this.classList;

        if (classes.contains("show")) {

            classes.remove("show");
        } else {
            if (prevEventHc != null)

                prevEventHc.classList.remove("show");
            prevEventHc = this;
            classes.add("show");
        }
    }
}

function stopPropagation(event) {
    event.stopPropagation();
};

/*========================================== ABOUTUS Paralax peoples ==========================================*/

$(window).scroll(function() {
    var scrollval = $(this).scrollTop(); // It will return scroll value

    $("#peoples").css("transform", 'translate(0px,-' + scrollval / 3 + '%)');
});

/*========================================== CONTACT / CLOSE Buttons ==========================================*/

/* On click CONTACT HREF show playlist div */
$(document).ready(function() {
    $('#contactusID').click(function() {
        showContact();
    });
});

/* On click CONTACT button */
function showContact() {
    /* Hide CONTACT button & ARROWS down */
    /* Show CONTACT DIV & CLOSE button & ARROWS up */
    $('.cShowButton').css("display", "none");
    $('.cHideButton').css("display", "inline-block");
    $('.showContactScrolldown').css("display", "none");
    $('.hideContactScrolldown').css("display", "block");
    /* Set HEIGHT from 0 -> 420px */
    $('#contactus').css("height", "420px");
}

/* On click CLOSE button */
function hideContact() {
    /* Show CONTACT button & ARROWS down */
    /* Hide CONTACT DIV & CLOSE button & ARROWS up */
    $('.cShowButton').css("display", "inline-block");
    $('.cHideButton').css("display", "none");
    $('.showContactScrolldown').css("display", "block");
    $('.hideContactScrolldown').css("display", "none");
    /* Set HEIGHT from 420 -> 0px */
    $('#contactus').css("height", "0px");
}