import anime from "animejs";
import Typewriter from 'typewriter-effect/dist/core';

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    try {
        document.documentElement.scrollTop(0);
    } catch {}
}

const DEBUG = false;

const pwdtext_origin = document.getElementById('pwdtext');
const pwdtext_current = document.getElementById('pwdcurrent');

const download_btn_win = document.getElementById('win-btn');
const download_btn_lin = document.getElementById('lin-btn');

if (!DEBUG) {
    document.fonts.ready.then(() => {
        const img = document.getElementById('image');
        img.onload = () => {
            anime({
                targets: '.loader',
                opacity: 0,
                delay: 100,
                duration: 1000,
                easing: 'linear',
                complete: () => {
                    mainAnimation();
                }
            });
        };
        img.src = img.getAttribute('data-src');
    });
} else {
    document.getElementsByClassName('loader-wrap')[0].style.display = 'none';
}


const mainAnimation = () => {

    pwdtext_current.style.display = "flex";

    const pwdtext_origin_pos = getOffset(pwdtext_origin).top;
    const pwdtext_current_pos = getOffset(pwdtext_current).top;
    const pwdtext_current_height = getOffset(pwdtext_current).height;

    let tp = new Typewriter('#typewriter1', {delay: 75, loop: true})
    .typeString("Keep your passwords secure.")
    .pauseFor(4500)
    .deleteAll()
    .typeString("Use a strong password for the vault!")
    .pauseFor(4500)
    .deleteAll()
    .typeString("The project is fully open-source :)")
    .pauseFor(4500)
    .deleteAll()
    .typeString("Import from KeePass, LastPass, etc.")
    .pauseFor(4500)
    .deleteAll()
    .typeString("Enjoy!")
    .pauseFor(2000)
    .deleteAll()

    anime.timeline({
        duration: 1000,
        autoplay: true,
        easing: "easeInOutExpo"
    })
    .add({
        targets: '#pwdcurrent',
        opacity: 1,
        easing: 'linear'
    })
    .add({
        targets: '#pwdcurrent',
        top: pwdtext_origin_pos + pwdtext_current_height / 2,
        duration: 1200
    })
    .add({
        targets: '.loader-wrap',
        opacity: 0,
        duration: 600,
        easing: "linear",
        complete: () => {
            document.getElementsByClassName('loader-wrap')[0].style.display = 'none';
        }
    }, 1500)
    .add({
        begin: () => {
            tp.start()
        }
    }, 1750)
    .add({
        targets: "#image",
        opacity: [0, 1],
        scale: [0.85, 1],
        complete: () => {
            onresize = () => {
                pwdtext_current.style.top = `${getOffset(pwdtext_origin).top + getOffset(pwdtext_current).height / 2}px`
            };
        }
    }, 1200)
}

const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        height: rect.height
    };
}

const scrollReveal = () => {
	var revealPoint = 150;
	var revealElement = document.querySelectorAll(".reveal");
	for (var i = 0; i < revealElement.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = revealElement[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add("active");
		} else {
			revealElement[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", scrollReveal);