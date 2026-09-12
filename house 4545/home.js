const btn1 = document.querySelector("#btn1");
const details1 = document.querySelector("#details1");

btn1.addEventListener("click", function(){
    details1.classList.toggle("hidden");
})

const btn2 = document.querySelector("#btn2");
const details2 = document.querySelector("#details2");

btn2.addEventListener("click", function(){
    details2.classList.toggle("hidden")
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


const menuBtn = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", function(){
       if (sidebar.style.display === "none") {
       sidebar.style.display = "block";
       } else {
        sidebar.style.display ="none";
       }
       if (content) {
        content.classList.toggle("full-width")
       }
    });
    
}

// const title = document.getElementById("title");
// if (title){
//     title.style.color = "pink"
// }



