const CHARACTERS = []

const url = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d80711ba6c0f0213843cd530b7f62f73&hash=ecf6a28795aafa3a652fea7ef5b667d8'
const key = '?ts=1&apikey=d80711ba6c0f0213843cd530b7f62f73&hash=ecf6a28795aafa3a652fea7ef5b667d8'

const body = document.querySelector('body')

const fetchData  = () => {

   return fetch(url)
        .then((res)=> res.json())
        .then((json) =>{ 
            CHARACTERS.push(...json.data.results);
            document.querySelector('button').style.display = 'none'
            console.log(CHARACTERS);
        })
        .catch((err)=>{console.error('HUBO UN ERROR : ' + err)})
        .finally(console.log('Fetching terminado'))
}

document.querySelector('button').onclick = async() => {
    await fetchData();
    createCards();}

const createCards = () => {
    console.log('cards')
    CHARACTERS.forEach((personaje)=>{
        createCharacterCard(personaje)
    })
}

const createCharacterCard = (char) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const name = document.createElement('h1')
    name.textContent = char.name

    const img = document.createElement('img')
    img.setAttribute('src', char.thumbnail.path+'.'+char.thumbnail.extension) 

    const link = document.createElement('a')
    link.setAttribute('href', char.resourceURI+key)

    const parag = document.createElement('p')
    parag.textContent = char.description

    link.appendChild(img)
    card.appendChild(name)
    card.appendChild(link)
    card.appendChild(parag)
    body.appendChild(card)

}