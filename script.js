let departure = document.querySelector("#departure");
let arrival = document.querySelector("#arrival");
let btn = document.querySelector("#button");

function changeCard() {
  btn.addEventListener("click", () => {
    console.log(departure.value);
    console.log(arrival.value);
    if (departure.value && arrival.value == "test") {
      document.querySelector(".card2").innerHTML = `
    <img id="train" src=${"./images/notfound.png"} alt="" height="200px">
    <hr>
    <p>${"No trip found."}</p>
    `;
    }
  });
}

changeCard();
