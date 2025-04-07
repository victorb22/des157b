(function() {
    'use strict';
    console.log('reading js');

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    const cream = document.querySelector('#cream');
    const orange = document.querySelector('#orange');
    const dgreen = document.querySelector('#dgreen');
    const green = document.querySelector('#green');
    const black = document.querySelector('#black');
    const bannerText = document.querySelector('#textBanner');
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            bannerText.className = 'switch';
            cream.className = 'switch';
            orange.className = 'switch';
            dgreen.className = 'switch';
            green.className = 'switch';
            black.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            banner.removeAttribute('class');
            bannerText.removeAttribute('class');
            cream.removeAttribute('class');
            orange.removeAttribute('class');
            dgreen.removeAttribute('class');
            green.removeAttribute('class');
            black.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    })
})()