document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Kan du lägga ägg? frågade hon.'
    },
    {
      name: '1',
      img: 'Can you lay eggs? she asked.'
    },
    {
      name: '2',
      img: 'Nej!'
    },
    {
      name: '2',
      img: ' No!'
    },
    {
      name: '3',
      img: 'Nå, håll då munnen på dig ! '
    },
    {
      name: '3',
      img: 'Well, then keep your mouth shut! '
    },
    {
      name: '4',
      img: 'Och katten sade: Kan du skjuta rygg, spinna och gnistra?'
    },
    {
      name: '4',
      img: 'And the cat said: Can you push back, purr and sparkle?'
    },
    {
      name: '5',
      img: 'Ja, då skall du inte ha någon åsikt, då förståndigt folk talar!'
    },
    {
      name: '5',
      img: "Yes, then you shouldn't have any opinion, when sensible people speak!"
    },
    {
      name: '6',
      img: 'Och ankungen satt i sin vrå och var på dåligt humör.'
    },
    {
      name: '6',
      img: 'And the duckling sat in his corner and was in a bad mood. '
    },
    {
      name: '7',
      img: 'Plötsligt kom han att tänka på friska luften och solskenet Och fick lust att flyta på vattnet.'
    },
    {
      name: '7',
      img: 'Suddenly he thought of the fresh air and the sunshine And felt like floating on the water.'
    },
    {
      name: '8',
      img: 'Slutligen kunde han inte låta bli att säga det till hönan.'
    },
    {
      name: '8',
      img: "Finally, he couldn't help but tell the hen."
    },
    {
      name: '9',
      img: 'Vad går åt dig? frågade hon. '
    },
    {
      name: '9',
      img: "What's wrong with you? she asked."
    },
    {
      name: '10',
      img: 'Du har ingenting att göra, därför får du de där infallen. '
    },
    {
      name: '10',
      img: "You have nothing to do, that's why you get those whims. "
    },
    {
      name: '11',
      img: 'Lägg ägg eller spinn, så gå det över!'
    },
    {
      name: '11',
      img: "Lay eggs or spin, and it's over!"
    },
    {
      name: '12',
      img: 'Men det är så härligt att flyta på vattnet!'
    },
    {
      name: '12',
      img: 'But it is so wonderful to float on the water! '
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 28 completed!</h2><a href='https://elaidina.github.io/fra3/level29.html'> Continue to Level 29</a>";


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
