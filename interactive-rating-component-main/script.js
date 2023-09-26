const first = document.querySelector(".first");
const second = document.querySelector(".second");
const submit = document.querySelector("#submit");
const again = document.querySelector("#again");
const count = document.getElementById('count');
const rates = Array.from(document.querySelectorAll(".rates"));

submit.addEventListener('click',()=>{
    second.classList.remove("hidden");
    first.classList.add("hidden");
});

again.addEventListener('click',()=>{
    first.classList.remove("hidden");
    second.classList.add("hidden");
});

rates.forEach((rate) => {
    rate.addEventListener("click", ()=> {
        count.innerText = rate.innerHTML;
    });
});