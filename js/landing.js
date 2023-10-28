var slide = ""
var sldier = ''
var curentSlide = 0
var btn = document.getElementById('btn');
var autoBtn = document.getElementById('btn-auto')
var stopBtn = document.getElementById('btn-stop')
var quotes_box = document.getElementById('quots-txt');
var author_box = document.getElementById('author');
var selectBtn = document.querySelectorAll('#category');
var category = " ";
const apikey = "7BZAVMNJNh0P9o/12ba0KA==RQB8BQfrB8IROfXA";
var apiurl = ""
var icons = document.querySelectorAll("#icon")
var auto = " "
var labrary_path = document.getElementById('labrary-path')
var addquote = document.getElementById('add-quote')
var quotes = ""
var author = ""
var box_slider =document.getElementById('boxs-slider')
var x =0


sldier = setInterval(function () {
    slide[curentSlide].classList= "slides"
    curentSlide = (curentSlide + 1) % slide.length
    slide[curentSlide].classList += " active"
    
}, 5000)


selectBtn.forEach(selectBtn => {
    selectBtn.addEventListener('click', () => {
        category= selectBtn.value
        apiurl = "https://api.api-ninjas.com/v1/quotes?category=" + category;
        selectBtn.classList.toggle("selected")

    })
})
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apikey,
  },
};

async function getquot() {
    const response = await fetch(apiurl, options);
    const data = await response.json();
    quotes = data[0].quote;
    author = data[0].author;
    console.log(data)
    quotes_box.innerHTML = quotes
    author_box.innerHTML = author
    icons.forEach(icons => {
        icons.className ="material-symbols-outlined "
    })
    
}
function stopgrn() {
    clearInterval(auto)
}
btn.addEventListener("click", getquot);
autoBtn.addEventListener('click', () => {
    auto =  setInterval(getquot,1000)
})
stopBtn.addEventListener('click', stopgrn)

labrary_path.addEventListener('click', () => {
    window.location = "../pages/library.html"
})
addquote.addEventListener('click', () => {
    window.location = "../pages/addquote.html"
})

icons.forEach(icons => {
    icons.addEventListener('click', () => {
        console.log(icons.textContent)
        if (icons.textContent =="favorite") {
            icons.classList.toggle("red")
            window.localStorage.clear();
        } else if (icons.textContent == "push_pin") {
            icons.classList.toggle("bleu")
            var quoteOBJ = {
                quote: quotes,
                author :author
            }
            window.localStorage.setItem("savedQuote"+x , JSON.stringify(quoteOBJ))
            x = x+1 
            
            
        }
    })
})

document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i <= localStorage.length; i++){
        var userSavedQote = JSON.parse(localStorage.getItem('aprovedquote'+i))
        var quoteSave = userSavedQote.quote;
        var authorSave = userSavedQote.author;
        let quote_labrary_box = document.createElement('div')
        quote_labrary_box.className = "slides"
        let quote_labrary = document.createElement('p')
        quote_labrary.className = "quotes-txt"
        quote_labrary.appendChild(document.createTextNode(quoteSave))
        let author_labrary = document.createElement('p')
        author_labrary.className = "autgher"
        author_labrary.appendChild(document.createTextNode(authorSave))
        quote_labrary_box.appendChild(quote_labrary)
        quote_labrary_box.appendChild(author_labrary);
        box_slider.appendChild(quote_labrary_box)
        ///////////////////////////////////////////////
        slide = document.querySelectorAll(".slides")
       
    }
    
});




particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#000" },
        shape: {
        type: "polygon",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
        },
    opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
    size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
    line_linked: {
        enable: true,
        distance: 150,
        color: "#fff",
        opacity: 0.7,
        width: 1,
        },
        move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
            retina_detect: true,
    });