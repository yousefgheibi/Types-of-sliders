const slider = document.querySelector('div#slider');
const right = document.querySelector('div#right');
const left = document.querySelector('div#left');


right.addEventListener("click", event => {
    let scroll = (slider.scrollWidth -slider.scrollLeft)*slider.children.length;
    if(scroll===slider.scrollWidth) {
        slider.scrollLeft = 0;
    }

    slider.scrollBy(300, 0);
})

left.addEventListener("click", event => {
    let scroll = slider.scrollWidth - slider.clientWidth;
    if(slider.scrollLeft===0){
        slider.scrollLeft= scroll;
    }

    slider.scrollBy(-300, 0);
})

