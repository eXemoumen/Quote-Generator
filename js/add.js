var email = document.getElementById('email')
var quote = document.getElementById('quote')
var author = document.getElementById('author')
var add_btn = document.getElementById('add-btn')
var back = document.getElementById('back')
var x =0
back.addEventListener('click', () => {
    window.location = "../pages/landing.html"

})
add_btn.addEventListener('click', () => {
    if (email.value == "" | quote.value == "" | author.value == "") {
        alert("Please fill all the fields")
    } else {
        var userquote = {
            quote: quote.value,
            author: author.value,
            email : email.value
        }
        window.localStorage.setItem("userquote"+x , JSON.stringify(userquote))
        
        quote.value = " "
        author.value = " "
        email.value= " "
        x++
    }
})
