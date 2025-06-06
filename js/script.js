var siteUrlInput = document.getElementById("siteUrl");
var siteNameInput = document.getElementById("siteName");
var siteUrlErrorIcon = document.getElementById("siteUrlErrorIcon");
var siteUrlGoodIcon = document.getElementById("siteUrlGoodIcon");
var siteNameErrorIcon = document.getElementById("siteNameErrorIcon");
var siteNameGoodIcon = document.getElementById("siteNameGoodIcon");
var books = []
var validBook = false
console.log("connected");
function isValidUrl(string) {
    const pattern = new RegExp(
        '^([a-zA-Z]+:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
        'i'
    );
    return pattern.test(string);
}
function isValidText(string) {
    const pattern = new RegExp(/^[a-zA-Z0-9]{3,}$/);
    return pattern.test(string);
}
function urlInputCheck() {
    console.log("checking...");
    if (!isValidUrl(siteUrlInput.value)) {
        siteUrlInput.classList.add("error");
        siteUrlInput.classList.remove("good");
        siteUrlErrorIcon.classList.remove("d-none");
        siteUrlGoodIcon.classList.add("d-none");
        validBook = false;
    }
    else {
        siteUrlInput.classList.add("good");
        siteUrlInput.classList.remove("remove");
        siteUrlErrorIcon.classList.add("d-none");
        siteUrlGoodIcon.classList.remove("d-none");
        validBook = true;
    }
}
function textInputCheck() {
    console.log("checking...");
    if (!isValidText(siteNameInput.value)) {
        siteNameInput.classList.add("error");
        siteNameInput.classList.remove("good");
        siteNameErrorIcon.classList.remove("d-none");
        siteNameGoodIcon.classList.add("d-none");
        validBook = false;
    }
    else {
        siteNameInput.classList.add("good");
        siteNameInput.classList.remove("remove");
        siteNameErrorIcon.classList.add("d-none");
        siteNameGoodIcon.classList.remove("d-none");
        validBook = true;
    }
}

function addBook(){
    if(validBook){
        var book = {
            bookName : siteNameInput.value,
            bookUrl : siteUrlInput.value
        }
        books.push(book);
        console.log(books);
    }
    else{
        
    }
}

