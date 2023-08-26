const ings = document .querySelector(".ings"),
qrinput = ings .querySelector(".form input"),
generatBtn = ings .querySelector(".form button"),
qrimg = ings .querySelector(".qr-code img");

generatBtn .addEventListener("click", () => {
    let qrvalue = qrinput.value;
    if(!qrvalue) return; //if the input is empty then return from here
    generatBtn.innerText = "Generating QR Code...";
    //getting a QR code of user entered value using the qrserver
    //api and passing the api returned img src to qrimg
    qrimg.src ='https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}';
    qrimg.addEventListener("load", () =>{ // once QR code img loaded
        ings.classList.add("active");
        generatBtn.innerText = "Generate QR Code...";
    })
});

qrinput.addEventListener("keyup", () =>{
   if(!qrinput.value) {
    ings.classList.remove("active");
   }
});