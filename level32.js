document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Till slut blev han utmattad, låg alldeles stilla och frös fast i isen.'
    },
    {
      name: '1',
      img: 'Finally he became exhausted, lay very still and froze in the ice.'
    },
    {
      name: '2',
      img: 'Tidigt på morgonen kom en bonde. '
    },
    {
      name: '2',
      img: 'Early in the morning a farmer came.'
    },
    {
      name: '3',
      img: 'Han fick se honom, gick ut och slog med sin träsko sönder isen och bar så ankungen hem till sin hustru. '
    },
    {
      name: '3',
      img: 'He got to see him, went out and broke the ice with his clog, and then carried the duckling home to his wife.'
    },
    {
      name: '4',
      img: 'Där blev han återkallad till livet.'
    },
    {
      name: '4',
      img: 'There he was recalled to life.'
    },
    {
      name: '5',
      img: 'Barnen ville leka med honom, men ankungen trodde, att de ville göra honom illa och for i förskräckelsen upp i mjölkfatet, ...'
    },
    {
      name: '5',
      img: 'The children wanted to play with him, but the duckling thought that they wanted to hurt him and, in terror, ran into the milk dish, ...'
    },
    {
      name: '6',
      img: '...så att mjölken skvalpade ut på golvet. '
    },
    {
      name: '6',
      img: '...so that the milk splashed onto the floor. '
    },
    {
      name: '7',
      img: 'Gumman skrek och slog med händerna i vädret, så flög han i tråget, där smöret låg och så ned i mjöltunnan och upp igen. '
    },
    {
      name: '7',
      img: 'The old woman screamed and clapped her hands in the air, then he flew into the trough where the butter was and then down into the flour barrel and up again. '
    },
    {
      name: '8',
      img: 'Åh, så han såg ut! '
    },
    {
      name: '8',
      img: 'Oh, what he looked like!'
    },
    {
      name: '9',
      img: 'Gumman skrek och slog efter honom med eldtången...'
    },
    {
      name: '9',
      img: 'The old woman screamed and hit him with the tongs ...'
    },
    {
      name: '10',
      img: '...och barnen sprang omkull varandra för att fånga ankungen och de skrattade och skrek. '
    },
    {
      name: '10',
      img: '...and the children ran over each other to catch the duckling and they laughed and screamed. '
    },
    {
      name: '11',
      img: ' Som tur var stod  dörren öppen. '
    },
    {
      name: '11',
      img: 'Luckily the door was open. '
    },
    {
      name: '12',
      img: 'Ut for han bland buskarna i den nyfallna snön - och där låg han som i dvala.'
    },
    {
      name: '12',
      img: 'He went out among the bushes in the newly fallen snow - and there he lay as if asleep.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 32 completed!</h2><a href='https://elaidina.github.io/fra3/level33.html'> Continue to Level 33</a>";


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
