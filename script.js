const log = console.log;
const randomNumber = () => Math.floor(Math.random()*16);
var data = {
    name: '',
    author: '',
    npage: '',
    urlp: ''
}

function creatDiv(BookId, nameClass, key, value, bigBox) {
    
    let div = document.createElement("div");
    div.id = BookId;
    div.className = nameClass;
    bigBox.appendChild(div);

    BookId = document.getElementById(BookId);
    let elm = document.createElement("p");
    BookId.appendChild(elm);
    elm.innerText = `${value.name}`;

    elm = document.createElement("p");
    BookId.appendChild(elm);
    elm.innerText = `${value.author}`;

    elm = document.createElement("p");
    BookId.appendChild(elm);
    elm.innerText = `${value.npage}`;

    elm = document.createElement("a");
    var link = document.createTextNode("This is link"); 
    elm.appendChild(link);  
    elm.href = `${value.urlp}`;  
    div.prepend(elm); 

    elm = document.createElement("button");
    BookId.appendChild(elm);
    elm.className = "del";
    elm.innerText = "delete";
    elm.onclick = () =>{ elm.parentElement.remove();
                        localStorage.removeItem(key);}
}

function addBook() {
    let bigBox = document.getElementById("listOfBook");
    for (let index = 0; index <  localStorage.length; index++) {
        const key = localStorage.key(index);
        const value = JSON.parse(localStorage.getItem(key));
        const id = "book" + index;
        creatDiv(id, "bookClass", key, value, bigBox);
        console.log(id);
    }
}

function main(i) {
    clean.onclick = function () {localStorage.clear();};
    add.onclick = function () {
        data.name = bname.value;
        data.author = author.value;
        data.npage = npage.value;
        data.urlp = url.value;
        localStorage.setItem("Book" + i, JSON.stringify(data));
        location.reload();
    };
    addBook();
}

main(randomNumber());