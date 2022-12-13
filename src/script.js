import anime from "animejs";
import Typewriter from 'typewriter-effect/dist/core';

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
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
                duration: 500,
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
    anime({
        targets: '#pwdcurrent',
        opacity: 1,
        delay: 200,
        duration: 1000,
        easing: 'linear'
    })
    const pwdtext_origin_pos = getOffset(pwdtext_origin).top;
    const pwdtext_current_pos = getOffset(pwdtext_current).top;
    const pwdtext_current_height = getOffset(pwdtext_current).height;

    var tp = new Typewriter('#typewriter1', {delay: 75}).pauseFor(2200).typeString("Keep your passwords secure. ").start()

    anime({
        targets: '#pwdcurrent',
        top: pwdtext_origin_pos + pwdtext_current_height / 2,
        delay: 1200,
        duration: 1200,
        easing: "easeInOutExpo"
    })

    anime({
        targets: '.loader-wrap',
        opacity: 0,
        delay: 1700,
        duration: 600,
        easing: "linear",
        complete: () => {
            document.getElementsByClassName('loader-wrap')[0].style.display = 'none';
        },
        begin: () => {
            
        }
    })

    anime({
        targets: "#image",
        opacity: [0, 1],
        scale: [0.85, 1],
        delay: 1350,
        duration: 1000,
        easing: 'easeInOutExpo'
    })
}

const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        height: rect.height
    };
}