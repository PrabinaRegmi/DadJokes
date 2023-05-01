const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("btn");

jokeBtn.addEventListener("click", jokeGenerate);

jokeGenerate();

// Using .then()
// function jokeGenerate() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }

// Using asyn/await
async function jokeGenerate() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}
