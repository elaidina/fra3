document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Den unga prinsessan dröjde inte länge innan hon svarade ja till allt.'
    },
    {
      name: '1',
      img: "It didn't take long for the young princess to say yes to everything."
    },
    {
      name: '2',
      img: 'Samtidigt körde en kusk fram en ståtlig vagn med åtta vackra hästar prydda med plymer,...'
    },
    {
      name: '2',
      img: 'At the same time, a coachman drove a stately carriage with eight beautiful horses adorned with plumes, ...'
    },
    {
      name: '3',
      img: '...fjädrar och gyllene selar.'
    },
    {
      name: '3',
      img: '...feathers and golden harnesses.'
    },
    {
      name: '4',
      img: ' Bakom vagnen red prinsens trogne tjänare, ...'
    },
    {
      name: '4',
      img: "Behind the carriage rode the prince's faithful servant,..."
    },
    {
      name: '5',
      img: '...Henrik, som hade varit så olycklig under sin härskares förtrollning, att hans hjärta nästan brustit.'
    },
    {
      name: '5',
      img: "Henrik, who had been so unhappy under his ruler's spell that his heart almost broke."
    },
    {
      name: '6',
      img: 'De tog då farväl till kungen och satte sig i vagnen. '
    },
    {
      name: '6',
      img: 'They then bade farewell to the king and sat down in the carriage.'
    },
    {
      name: '7',
      img: ' De for glada och förväntansfulla iväg mot prinsens kungarike, ...'
    },
    {
      name: '7',
      img: "They set off happily and expectantly towards the prince's kingdom,..."
    },
    {
      name: '8',
      img: '...dit de utan några förhinder anlände och där levde de lyckliga i många, många år.'
    },
    {
      name: '8',
      img: '...where they arrived without any obstacles and lived there happily for many, many years.'
    },
    /* {
      name: '9',
      img: 'As soon as he was back in the car he opened his present.'
    },
    {
      name: '9',
      img: 'Len čo sa vrátil do auta, otvoril svoj darček.'
    },
    {
      name: '10',
      img: 'I have got sunglasses!'
    },
    {
      name: '10',
      img: 'Mám slnečné okuliare!'
    },
    {
      name: '11',
      img: 'He was very pleased.'
    },
    {
      name: '11',
      img: 'Veľmi sa potešil.'
    },
    {
      name: '12',
      img: 'It snowed a lot while he was sleeping.'
    },
    {
      name: '12',
      img: 'Keď spal, veľa snežilo.'
    } */
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
     if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

cards[optionOneId].parentElement.classList.remove("green")
      

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/sve1/'> Continue to next level </a>";


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
