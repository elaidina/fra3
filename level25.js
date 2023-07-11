document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Och modern sa: '
    },
    {
      name: '1',
      img: 'And the mother said: '
    },
    {
      name: '2',
      img: ' Om du ändå vore långt härifrån! '
    },
    {
      name: '2',
      img: 'If only you were far from here!'
    },
    {
      name: '3',
      img: 'Ankorna bet honom, hönsen hackade honom och pigan, som skulle ge djuren mat, sparkade till honom med foten.'
    },
    {
      name: '3',
      img: 'The ducks bit him, the chickens pecked at him, and the maid who was supposed to feed the animals kicked him with her foot.'
    },
    {
      name: '4',
      img: 'Då sprang och flög han över staketet.'
    },
    {
      name: '4',
      img: 'Then he ran and flew over the fence.'
    },
    {
      name: '5',
      img: ' De små fåglarna i buskarna for förskräckta upp i luften.'
    },
    {
      name: '5',
      img: 'The little birds in the bushes flew into the air in terror.'
    },
    {
      name: '6',
      img: ' Det är för att jag är så ful, tänkte ankungen och slöt till ögonen, men sprang ändå framåt. '
    },
    {
      name: '6',
      img: " It's because I'm so ugly, thought the duckling, closing his eyes, but still running forward. "
    },
    {
      name: '7',
      img: 'Så kom han ut till den stora mossen, där änderna bodde. '
    },
    {
      name: '7',
      img: 'Then he came out to the big bog, where the ducks lived.'
    },
    {
      name: '8',
      img: 'Här låg han hela natten, han var så trött och sorgsen.      '
    },
    {
      name: '8',
      img: 'Here he lay all night, he was so tired and sad.'
    },
    {
      name: '9',
      img: 'Om morgonen flög änderna upp och de såg på den nya kamraten.'
    },
    {
      name: '9',
      img: 'In the morning the ducks flew up and they looked at the new companion.  '
    },
    {
      name: '10',
      img: 'Vad är du för en?'
    },
    {
      name: '10',
      img: 'What kind of one are you?'
    },
    {
      name: '11',
      img: 'frågade de och ankungen vände sig åt alla sidor och hälsade så gott han kunde.'
    },
    {
      name: '11',
      img: 'they asked, and the duckling turned in all directions and saluted as best he could.'
    },
    {
      name: '12',
      img: 'Du är innerligt ful! sade änderna, men det kan då göra oss det samma, bara du inte gifter dig in i vår familj.'
    },
    {
      name: '12',
      img: "You are deeply ugly! said the ducks, but it might do the same to us, as long as you don't marry into our family."
    }
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 25 completed!</h2><a href='https://elaidina.github.io/fra3/level26.html'> Continue to Level 26</a>";


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
