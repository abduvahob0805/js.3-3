
const list = document.getElementById("list")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const shop = document.getElementById("shop")
const buy = document.getElementById("buy-btn")
const ota = document.getElementById("products-ota")
const narx = document.getElementById("summa")
const korzinka = document.getElementById("korzinka")
const count = document.getElementById("count")



fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then((json) => productCHizish(json));


function productCHizish(malumot) {
    ota.innerHTML = ""
    malumot.map(mahsulot => {
        const div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML = `
         <img src="${mahsulot.image}" alt="" />
        <h2>${mahsulot.title.slice(0, 20)}</h2>
        <p>${mahsulot.description.slice(0, 20)}</p>
        <span>${mahsulot.price}</span>
        <button id="buy-btn" onclick='buyProducts(this)'>Sotib olish</button>`;

        ota.appendChild(div);
    })

}


shop.addEventListener("click", () => {
    korzinka.style.display = "block";
    ota.style = "filter:blur(30px)";
})
btn1.addEventListener("click", () => {
    korzinka.style.display = "none";
    ota.style = "filter:blur(0)";
    list.innerHTML=``;
    count.textContent=0;
})
btn2.addEventListener("click", () => {
    korzinka.style.display = "none";
    ota.style = "filter:blur(0)";
    list.innerHTML=``;
    count.textContent=0;
})


function buyProducts(e){
    let pul=+e.parentNode.children[3].textContent.split("$")[0]
    const li=document.createElement("li");
    li.textContent=`${e.parentNode.children[1].textContent}--> ${e.parentNode.children[3].textContent}`;
    count.textContent=+count.textContent+pul;
    list.appendChild(li)
}

