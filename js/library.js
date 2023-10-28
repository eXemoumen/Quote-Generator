var quots_txt = document.getElementById('quots-txt')
var author_txt = document.getElementById('author')
var labrary_box =document.getElementById('labrary-box')
var back = document.getElementById('back')
var delet = document.getElementById('delet')
var trash = document.getElementById("trash") 
var x = 0



back.addEventListener('click', () => {
    window.location = "../pages/landing.html"

})
trash.addEventListener('click', () => {
    window.location = "../pages/trash.html"

})

document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i <= localStorage.length; i++){
        var userSavedQote = JSON.parse(localStorage.getItem('savedQuote'+i))
        var quoteSave = userSavedQote.quote;
        var authorSave = userSavedQote.author;
        let quote_labrary_box = document.createElement('div')
        quote_labrary_box.className = "quots-box"
        let quote_labrary = document.createElement('p')
        quote_labrary.className = "quotes-txt"
        quote_labrary.appendChild(document.createTextNode(quoteSave))
        let author_labrary = document.createElement('p')
        author_labrary.className = "autgher"
        author_labrary.appendChild(document.createTextNode(authorSave))
        let delet = document.createElement("span")
        delet.className = "material-symbols-outlined"
        delet.setAttribute('id',"delet")
        delet.appendChild(document.createTextNode("delete"))
        quote_labrary_box.appendChild(quote_labrary)
        quote_labrary_box.appendChild(author_labrary);
        quote_labrary_box.appendChild(delet);
        labrary_box.appendChild(quote_labrary_box)
        ///////////////////////////////////////////////
        
        delet.addEventListener('click', () => {

            var deletedQote = {
                quote: quoteSave,
                author :authorSave
            }
            window.localStorage.setItem("deletedquote"+x , JSON.stringify(deletedQote))
       
            console.log('savedQuote'+x)
            localStorage.removeItem('savedQuote'+x);
            quote_labrary_box.remove()  
            x++
        })


    }
    
});

