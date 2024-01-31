function recupererVille() {
  document.querySelector("#button").addEventListener("click", function () {
    const cityDeparture = document.querySelector("#departure").value;
    const cityArrival = document.querySelector("#arrival").value;
    const date = document.querySelector("#start").value;

    fetch("http://localhost:3000/trips/selectedTrips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        departure: cityDeparture,
        arrival: cityArrival,
        date: date,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.result) {
          document.querySelector(".card2").innerHTML = `
        <img id="train" src=${"./images/notfound.png"} alt="" height="200px">
        <hr>
        <p>${"No trip found."}</p>
        `;
        } else {
          console.log(data);
          for (const trip of data.trips) {
            console.log(trip);
            document.querySelector(".card2").innerHTML = `
            <div id="cityCard">                   
              <p>${trip.departure} > ${trip.arrival} ${trip.date} ${trip.price} <button type="submit">Book</button></p>
            </div>
          `;
          }
          document.querySelector("#departure").value = "";
          document.querySelector("#arrival").value = "";
        }
      });
  });
}
recupererVille();
