const body = document.body;
const blackBtn = document.querySelector('.black-btn');
const whiteBtn = document.querySelector('.white-btn');
const imageCard = document.getElementById('imageCard');
const cartButton = document.getElementById('cartButton');
const form = document.querySelector('.form-card');
const colorInput = document.getElementById('colorInput');

const blackCar = "https://tse4.mm.bing.net/th/id/OIP.2GS_qRLSnnZ2d6hi3pumJQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3";
const whiteCar = "https://mercedeshibridos.com/wp-content/uploads/GLE-COUPE-blanco-MADRID.jpeg";

imageCard.style.backgroundImage = `url(${blackCar})`;

blackBtn.addEventListener('click', () => {
    console.log("Cambiando a negro"); 
    colorInput.value = "negro";

    body.style.backgroundColor = "#0a0a0a";
    body.style.color = "white";

    document.querySelector('.product-card').style.backgroundColor = "#1a1a1a";
    document.querySelector('.form-card').style.backgroundColor = "#1a1a1a";

    cartButton.style.backgroundColor = "#333";
    
    imageCard.style.backgroundImage = "url('" + blackCar + "')";
});

whiteBtn.addEventListener('click', () => {
    console.log("Cambiando a blanco");
    colorInput.value = "blanco";

    body.style.backgroundColor = "#f9fafb";
    body.style.color = "#111";

    document.querySelector('.product-card').style.backgroundColor = "#ffffff";
    document.querySelector('.form-card').style.backgroundColor = "#ffffff";

    cartButton.style.backgroundColor = "#111";
    cartButton.style.color = "#fff";

    imageCard.style.backgroundImage = "url('" + whiteCar + "')";
});

cartButton.addEventListener('click', () => {
    cartButton.textContent = "Gracias por su compra";
    cartButton.style.background = "green";

    setTimeout(() => {
        cartButton.textContent = "Comprar";
        cartButton.style.background = "#333";
    }, 2000);
});

form.addEventListener('submit', (e) => {
    const nombre = form.querySelector('input[name="nombre"]').value.trim();
    const edad = form.querySelector('input[name="edad"]').value;

    if (nombre === "" || edad === "") {
        e.preventDefault();
        alert("Completa todos los campos");
    }

    if (edad <= 0) {
        e.preventDefault();
        alert("Edad inválida");
    }
});