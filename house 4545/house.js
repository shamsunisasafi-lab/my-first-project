


const btn1 = document.querySelector("#btn1");
const details1 = document.querySelector("#details1")

btn1.addEventListener("click", function(){
    details1.classList.toggle("hidden");
})

const btn2 = document.querySelector("#btn2");
const details2 = document.querySelector("#details2");

btn2.addEventListener("click", function(){
    details2.classList.toggle("hidden")
});


const toggleBtn = document.querySelector("#themeToggle");
toggleBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains ("dark-mode")){
        toggleBtn.textContent = "Light Mode";      
    } else {
        toggleBtn.textContent = "Dark Mode"
    }
});

const btn3 = document.querySelector("#btn3");
const details3 = document.querySelector("#details3");

btn3.addEventListener("click", function(){
    details3.classList.toggle("hidden")
});

const btn4 = document.querySelector("#btn4");
const details4 = document.querySelector("#details4");

btn4.addEventListener("click", function(){
    details4.classList.toggle("hidden")
});


const btn5 = document.querySelector("#btn5");
const details5 = document.querySelector("#details5");

btn5.addEventListener("click", function(){
    details5.classList.toggle("hidden")
});

const btn6 = document.querySelector("#btn6");
const details6 = document.querySelector("#details6");

btn6.addEventListener("click", function(){
    details6.classList.toggle("hidden")
});

const btn7 = document.querySelector("#btn7");
const details7 = document.querySelector("#details7");

btn7.addEventListener("click", function(){
    details7.classList.toggle("hidden")
});



   



























