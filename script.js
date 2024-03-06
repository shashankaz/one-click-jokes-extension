async function jokes() {
  await fetch("https://icanhazdadjoke.com/slack").then((data) =>
    data.json().then((jokesData) => {
      const jokeText = jokesData.attachments[0].text;
      const jokeElement = document.querySelector("#jokes");
      jokeElement.innerText = jokeText;
    })
  );
}

jokes();
