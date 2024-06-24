const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke);


// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json', 
    }
  };

  try {


    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
   
  } catch (error) {
    console.error('Error fetching joke:', error);
  } finally {
    jokeBtn.textContent = 'Get Another Joke';
  }
}

// HINTS
//  USING .then()
//  function generateJoke() {
//    const config = {
//    headers: {
//           Accept: 'application/json',
//             },
//    }

//    >>fetch('https://icanhazdadjoke.com', config)git stat
//      .then((res) => res.json())
//      .then((data) => {
//        jokeEl.innerHTML = data.joke
//        jokeBtn.textContent = 'Get Another Joke',
//      })
//      .catch((error)) => {
//      console.error('Error fetching joke:', error);
//     });
//  }
