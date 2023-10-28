var quots_txt = document.getElementById('quots-txt')
var author_txt = document.getElementById('author')
var labrary_box =document.getElementById('labrary-box')
var back = document.getElementById('back')
var delet = document.getElementById('delet')
var restor =document.getElementById('restor')
var x = 0



back.addEventListener('click', () => {
    window.location = "../pages/landing.html"

})

document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i <= localStorage.length; i++){
        var userdeledQote = JSON.parse(localStorage.getItem('deletedquote'+i))
        var quoteSave = userdeledQote.quote;
        var authorSave = userdeledQote.author;
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
        let restore = document.createElement("span")
        restore.className = "material-symbols-outlined"
        restore.setAttribute('id',"restor")
        restore.appendChild(document.createTextNode("settings_backup_restore"))
        quote_labrary_box.appendChild(quote_labrary)
        quote_labrary_box.appendChild(author_labrary);
        quote_labrary_box.appendChild(delet);
        quote_labrary_box.appendChild(restore);
        labrary_box.appendChild(quote_labrary_box)
        ///////////////////////////////////////////////
        
        delet.addEventListener('click', () => {
            localStorage.removeItem('deletedquote'+x);
            quote_labrary_box.remove()  
            x++
        })
        restore.addEventListener('click', () => {
            console.log("dss")
            var restorquot = {
                quote: quoteSave,
                author :authorSave
            }
            window.localStorage.setItem("savedQuote"+x , JSON.stringify(restorquot))
            localStorage.removeItem('deletedquote' + x);
            quote_labrary_box.remove() 
            x = x+1 
        })


    }
    
});
