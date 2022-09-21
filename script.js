const card = document.querySelector(".card");
const container = document.querySelector(".container");
const purchase = document.querySelector(".purchase");
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");


container.addEventListener("mousemove", (event) => {
    const xAxis = (window.innerWidth / 2 - event.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - event.pageY) / 25;
    card.style.transform = 'rotateX(${yAxis}deg) rotateY(${xAxis}deg)'; 
});


container.addEventListener("mouseenter", (e) => {
    card.style.transform = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(100px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
    card.style.transform = "all 0.5s ease";
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});