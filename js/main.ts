//root

// futures tabs
let featuresContainer = document.querySelector("#feature") as HTMLDivElement;
let ulTab = document.querySelectorAll("#features ul li");
let featDiv = document.querySelector("#features .feat") as HTMLDivElement;
let img = document.querySelector("#features .feat div img") as HTMLImageElement;
let h3Feat = document.querySelector("#features .feat div h3") as HTMLElement;
let pFeat = document.querySelector(
  "#features .feat div p"
) as HTMLParagraphElement;

// frequently
let questionContainer = document.querySelectorAll<HTMLElement>(".q-a >div");
let questionImgContainer =
  document.querySelectorAll<HTMLElement>(".q-a >div>div>img");

// function for switch tab in futures
function switchTab(i) {
  ulTab.forEach((e) => {
    e.classList.remove("active");
  });
  if (i.id == "simple") {
    i.classList.add("active");
    img.src = "../images/illustration-features-tab-1.svg";
    h3Feat.innerHTML = `Bookmark in one click  `;
    pFeat.innerHTML = `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.`;
  }
  if (i.id == "speedy") {
    i.classList.add("active");
    img.src = "../images/illustration-features-tab-2.svg";
    h3Feat.innerHTML = `Intelligent search `;
    pFeat.innerHTML = `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`;
  }
  if (i.id == "easy") {
    i.classList.add("active");
    img.src = "../images/illustration-features-tab-3.svg";
    h3Feat.innerHTML = `Share your bookmarks `;
    pFeat.innerHTML = `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button. `;
  }
}

// function open answer of question
function openAn() {
  questionContainer.forEach((e) => {
    e.addEventListener("click", () => {
      let answer = e.children[1];
      let img = e.children[0].children[1];
      if (answer.classList[0] == "close") {
        (<HTMLDivElement>answer).style.display = "block";
        answer.className = "open";
        img.className = "open";
      } else {
        (<HTMLDivElement>answer).style.display = "none";
        answer.className = "close";
        img.className = "close";
      }
    });
  });
}
openAn();

let contact = document.querySelector(".contact-btn");
let inputEmail = document.querySelector(
  "#email input[type='email']"
) as HTMLInputElement;
let emailContinuer = document.querySelector("#email ") as HTMLDivElement;
let error = document.querySelector("#email .error") as HTMLDivElement;
function email() {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  contact?.addEventListener("click", () => {
    if (!inputEmail.value.match(pattern)) {
      emailContinuer.style.border = "2px solid hsl(0, 94%, 66%)";
      error.style.display = "block";
      setTimeout(() => {
        emailContinuer.style.border = "none";
        error.style.display = "none";
      }, 5000);
    }
  });
}
email();
