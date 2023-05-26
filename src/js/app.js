import Request from "./request.js";

let windowWeight = 0;

window.onresize = () => {
    windowWeight = window.innerWidth;
    hoverBtn ()
    addTextToggle ()
}

window.onload = () => {
    windowWeight = window.innerWidth;
    getRequest()
    clickText()
    hoverBtn ()
    addTextToggle ()
}
function getRequest () {
    let request = new Request
    new Promise((resolve, reject) => {
        resolve(request.getProducts());
    })
        .then((data) => {
            let list = document.querySelector(".products")
            list.classList = "grid xl:grid-cols-4 gap-x-4 gap-y-12 md:grid-cols-3 min-[600px]:grid-cols-2"
            let products = data['products']
            products.forEach((el, index) =>  index > 0 ? createProducts(el, list) : null);
            hoverBtn()
        })
        .catch(error => console.error(error));
}  

function createProducts(data, list) {
    const {title, images, variants} = data    

    const card = document.createElement("div")
    card.className = "card"
    
    list.append(card)

    const imgProd = new Image
    imgProd.src = images[0].src
    imgProd.classList = "border-black border rounded"
    card.append(imgProd)

    const blockInfo = document.createElement("div")
    blockInfo.classList = ("flex justify-between mt-3")
    card.append(blockInfo)

    const blockTitlePrice = document.createElement("div")
    blockInfo.append(blockTitlePrice)

    const titleProd = document.createElement("h3")
    titleProd.classList = "font-bold text-sm"
    titleProd.innerHTML = title
    blockTitlePrice.append(titleProd)

    const priceProd = document.createElement("p")
    priceProd.classList = "font-bold text-sm"
    priceProd.innerHTML = variants[0].price
    blockTitlePrice.append(priceProd)

    const blockCondition = document.createElement("div")
    blockInfo.append(blockCondition)

    const condition = document.createElement('h4')
    condition.classList = "font-bold text-sm"
    condition.innerHTML = 'Condition'
    blockCondition.append(condition)

    const conditionState = document.createElement('p')
    conditionState.classList = "text-sm"
    conditionState.innerHTML = "Slightly used"
    blockCondition.append(conditionState)

   

    const button = document.createElement("a")
    button.setAttribute("href", "#")
    button.style.opacity = "0"
    button.innerHTML = "PICK-UP IN <span class=" + "underline" + "> 2200</span>"
    button.classList = "bg-black w-full	py-4 text-white flex justify-center border border-black rounded hover:bg-inherit hover:text-black mt-3 btnHover"
    card.append(button)
}


function clickText () {
    let toggleText = document.querySelector(".toggleText");
    let buttonShow = document.querySelector(".btnShow")

    buttonShow.addEventListener("click", () => {
        toggleText.classList.toggle("block");
        buttonShow.classList.toggle("block");
    })
}

function hoverBtn () {
    let btn = document.querySelectorAll(".btnHover")
    if (windowWeight > 760) {
        let i = 1
        let cards = document.querySelectorAll(".card")
        cards.forEach((e) => {
            e.classList.add(i)
            let card = document.getElementsByClassName(`card ${i}`)
            let btn = card[0].children[2]
            btn.style.opacity = "0"
            e.addEventListener("mouseover", () => {
                btn.style.opacity = "1"
            })
            e.addEventListener("mouseout", () => {
                btn.style.opacity = "0"
            })
            i++
        })
    } else {
        btn.forEach(e => e.style.opacity = "1")
    }
}

function addTextToggle () {
    let text = document.querySelector(".textToggle")
    windowWeight > 760 ? 
    text.innerHTML = "Important info regarding our service" : 
    text.innerHTML = "Important info"
}