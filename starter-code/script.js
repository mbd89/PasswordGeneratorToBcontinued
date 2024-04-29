const unchecked = document.querySelector('.uncheck1')
const green = document.querySelector('#checked1')
const sliderEl = document.querySelector('#range')


unchecked.addEventListener('click', hide)
green.addEventListener('click', go)




function hide(){

if (unchecked){
    unchecked.classList.add("hidden")
    green.classList.remove("hidden")
} 
}

function go(){
if (green){
    green.classList.add("hidden")
    unchecked.classList.remove("hidden")
}
}

function showProgress(){
    const sliderValue = sliderEl.value
    sliderEl.style.background =  `linear-gradient(to right, rgb(164, 255, 175) ${sliderValue}%, black ${sliderValue}%)`;
}

showProgress();

