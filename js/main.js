//root
// futures tabs
var featuresContainer = document.querySelector("#feature");
var ulTab = document.querySelectorAll("#features ul li");
var featDiv = document.querySelector("#features .feat");
var img = document.querySelector("#features .feat div img");
var h3Feat = document.querySelector("#features .feat div h3");
var pFeat = document.querySelector("#features .feat div p");
// frequently
var questionContainer = document.querySelectorAll(".q-a >div");
var questionImgContainer = document.querySelectorAll(".q-a >div>div>img");
// function for switch tab in futures
function switchTab(i) {
    ulTab.forEach(function (e) {
        e.classList.remove("active");
    });
    if (i.id == "simple") {
        i.classList.add("active");
        img.src = "../images/illustration-features-tab-1.svg";
        h3Feat.innerHTML = "Bookmark in one click  ";
        pFeat.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.";
    }
    if (i.id == "speedy") {
        i.classList.add("active");
        img.src = "../images/illustration-features-tab-2.svg";
        h3Feat.innerHTML = "Intelligent search ";
        pFeat.innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
    }
    if (i.id == "easy") {
        i.classList.add("active");
        img.src = "../images/illustration-features-tab-3.svg";
        h3Feat.innerHTML = "Share your bookmarks ";
        pFeat.innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button. ";
    }
}
// function open answer of question
function openAn() {
    questionContainer.forEach(function (e) {
        e.addEventListener("click", function () {
            var answer = e.children[1];
            var img = e.children[0].children[1];
            if (answer.classList[0] == "close") {
                answer.style.display = "block";
                answer.className = "open";
                img.className = "open";
            }
            else {
                answer.style.display = "none";
                answer.className = "close";
                img.className = "close";
            }
        });
    });
}
openAn();
var contact = document.querySelector(".contact-btn");
var inputEmail = document.querySelector("#email input[type='email']");
var emailContinuer = document.querySelector("#email ");
var error = document.querySelector("#email .error");
function email() {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    contact === null || contact === void 0 ? void 0 : contact.addEventListener("click", function () {
        if (!inputEmail.value.match(pattern)) {
            emailContinuer.style.border = "2px solid hsl(0, 94%, 66%)";
            error.style.display = "block";
            setTimeout(function () {
                emailContinuer.style.border = "none";
                error.style.display = "none";
            }, 5000);
        }
    });
}
email();
