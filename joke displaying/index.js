const jokeEl = document.getElementById('joke')
const jokebtn = document.getElementById('jokebutton')

jokebtn.addEventListener('click', gereratejoke)



gereratejoke()

async function gereratejoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()
    jokeEl.innerHTML = data.joke



    // .then((res) => res.json())
    //     .then((data) => {
    //         jokeEl.innerHTML = data.joke
    //     })
}