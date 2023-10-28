var quots_txt = document.getElementById("quots-txt");
var author_txt = document.getElementById("author");
var labrary_box = document.getElementById("labrary-box");
var back = document.getElementById("back");
var delet = document.getElementById("delet");
var apro =document.getElementById('aprove')

var x = 0;
back.addEventListener("click", () => {
  window.location = "../index.html";
});

document.addEventListener("DOMContentLoaded", function () {
    for (let i = x ; i <=localStorage.length ; i++) {
    var userdeledQote = JSON.parse(localStorage.getItem("userquote"+i));
    var quoteSave = userdeledQote.quote;
    var authorSave = userdeledQote.author;
    var useremail = userdeledQote.email;
    let quote_labrary_box = document.createElement("div");
    quote_labrary_box.className = "quots-box";
    let quote_labrary = document.createElement("p");
    quote_labrary.className = "quotes-txt";
    quote_labrary.appendChild(document.createTextNode(quoteSave));
    let author_labrary = document.createElement("p");
    author_labrary.className = "autgher";
    author_labrary.appendChild(document.createTextNode(authorSave));
    let user_email = document.createElement("p");
    user_email.className = "email";
    user_email.appendChild(document.createTextNode(useremail));
    let icons_div = document.createElement("div");
    icons_div.classList = "icons-box";
    let delet = document.createElement("span");
    delet.className = "material-symbols-outlined del";
    delet.setAttribute("id", "delet");
    delet.appendChild(document.createTextNode("delete"));
    let aprove = document.createElement("span");
    aprove.className = "material-symbols-outlined done";
    aprove.setAttribute("id", "aprove");
    aprove.appendChild(document.createTextNode("done"));
    icons_div.appendChild(aprove);
    icons_div.appendChild(delet);
    quote_labrary_box.appendChild(user_email);
    quote_labrary_box.appendChild(quote_labrary);
    quote_labrary_box.appendChild(author_labrary);
    quote_labrary_box.appendChild(icons_div);
    labrary_box.appendChild(quote_labrary_box);
      ///////////////////////////////////////////////
    
    aprove.addEventListener("click", () => {
        var aprovedquote = {
            quote: quoteSave,
            author: authorSave,
        };
        window.localStorage.setItem("aprovedquote" + x,JSON.stringify(aprovedquote));
        localStorage.removeItem("userquote" + x);
        quote_labrary_box.remove();
        x++;
    
        
    });

    delet.addEventListener("click", () => {
     
      quote_labrary_box.remove();
        x++;
  
    
    });
    
  }
});

