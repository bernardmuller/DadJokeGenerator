/////// dealing with headers (dad joke api)

let dadJoke = document.querySelector('#dad-joke')
let button = document.querySelector("#gen-btn")

const generateJoke = async () => {
    const joke = await getDadJoke();
    console.log(joke)
    dadJoke.textContent = joke;
}

const getDadJoke = async () => {
    const config = {headers: { Accept: 'application/json', }};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    const joke = res.data.joke;   
    return joke
}

button.addEventListener('click', generateJoke)