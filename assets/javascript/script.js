//variable :
const tableau = ["bateau", "harpon", "playstation", "ordinateur", "clavier"]
let newTableau = []
let wordTableau = []
const wordGame = document.querySelector('.motpendu')
const imagecontainer = document.querySelector('#pendu')
const lettre = document.querySelector('.lettre')
let lettreDispo = document.querySelector('#lettreDispo')
let wordNumber = random(0, tableau.length - 1)
let wordChoice = tableau[wordNumber]
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const wrongLetter = document.querySelector('#wrong')
let error = 0



//function :
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lettreAlphabet() {
    lettreDispo.innerHTML = ""
    alphabet.forEach(letter => {
        const lettreAffich = document.createElement('p')
        lettreAffich.textContent = ""
        lettreAffich.textContent = letter
        lettreAffich.addEventListener('click', () => {
            replace(lettreAffich)
        })

        lettreDispo.appendChild(lettreAffich)
        lettreAffich.classList.add("lettreAffich")
        document.querySelector(".lettreAffich").appendChild = lettreAffich
    })

}

function hideWord() {

    let wordHide = ""
    const wHide = document.createElement('p')
    wHide.classList.add("wHide")
    wHide.id = "hidenWOrd"
    wordGame.innerHTML = ""
    wordGame.appendChild(wHide)
    for (let i = 0; i < wordChoice.length; i++) {
        wordHide = "_"
        wordTableau[i] = wordChoice[i]
        newTableau.push(wordHide)

    }

    newTableau.forEach(element => {
        wHide.textContent += element
    });
    console.log(wordChoice);
    return wordChoice
}

function replace(para) {


    let finded = false
    for (let i = 0; i < wordTableau.length; i++) {

        if (para.textContent.toLowerCase() == wordTableau[i].toLowerCase()) {
            finded = true
            newTableau[i] = wordTableau[i]
            para.classList.add('hidden')
        }
    }

    if (!finded) {

        wrongLetter.textContent += para.textContent + "-"
        para.classList.add('hidden')
        error++

        imgAffich()
    }

    document.querySelector("#hidenWOrd").textContent = newTableau.join("")
    if (document.querySelector("#hidenWOrd").textContent == wordChoice) {
        wrongLetter.textContent = `Bravo ! vous avez gagner !`
        lettreDispo.innerHTML =""

    }
    if (error == 11) {
        wrongLetter.textContent = `Perdu , dommage,  peut-etre la prochaine fois !`
        lettreDispo.innerHTML =""


    }
}


function imgAffich() {

    imagecontainer.innerHTML = ""
    const image = document.createElement('img')
    image.src = ""
    imagecontainer.appendChild(image)
    image.src = `./assets/image/${error}.png`

}

function retry() {
    error = 0
    wrongLetter.innerHTML = "Mauvaise lettres utiliser :"
    imagecontainer.innerHTML = ""
    wordNumber = random(0, tableau.length - 1)
    wordChoice = tableau[wordNumber]
    newTableau = []
    wordTableau = []
    lettreAlphabet()
    hideWord()

}



lettreAlphabet()
hideWord()

