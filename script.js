//const { response } = require("express");

let departure = document.querySelector("#departure");
let arrival = document.querySelector("#arrival");
let btn = document.querySelector("#button");

function changeCard() {
  btn.addEventListener("click", () => {
    console.log(departure.value);
    console.log(arrival.value);
    if (departure.value == "paris" && arrival.value == "lyon") {
      document.querySelector(".card2").innerHTML = `
      <div id="cityCard">                   
        <p>paris > lyon 16:23 126€ <button type="submit">Book</button></p>
        </div>
      </div>
    `;
    } else {
      document.querySelector(".card2").innerHTML = `
      <img id="train" src=${"./images/notfound.png"} alt="" height="200px">
        <hr>
        <p>${"No trip found."}</p>
    `;
    }
  });
}

changeCard();

// document.querySelector("#button").addEventListener("click", function () {
//   const departure = document.querySelector("#departure").value;
//   const arrival = document.querySelector("#arrival").value;

//   fetch("http://localhost:3000/trips", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ departure, arrival }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.result) {
//         document.querySelector(".card2").innerHTML = `
//         <div class="city">
//           <p>${data.departure} > ${data.arrival} ${data.date} <button>book</button></p>
//       `;
//       }
//     });
// });
