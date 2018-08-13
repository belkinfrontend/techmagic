$(document).ready(function () {
    $('#mixedSlider').multislider({
        duration: 800,
        interval: 0
    });




        let left = document.querySelector(".MS-left");
        let right = document.querySelector(".MS-right");

        let sliders = document.querySelectorAll(".item");
        let i = 1;
        sliders[i].classList.add("active");

        left.onclick = () => {
            sliders[i].classList.remove("active");
            i--;

            if (i < 0) {
                i = sliders.length - 1;
            }


            sliders[i].classList.add("active");
            console.log(sliders);
        }


        right.onclick = () => {

            sliders[i].classList.remove("active");
            i++;
            if (i >= sliders.length) {
                i = 0;
            }
            sliders[i].classList.add("active");
        }
    
    
   
});