document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Är ni här allesammans? '
    },
    {
      name: '1',
      img: ' Are you all here?'
    },
    {
      name: '2',
      img: 'Och så reste hon på sig. '
    },
    {
      name: '2',
      img: 'And then she got up. '
    },
    {
      name: '3',
      img: 'Nej, jag har inte alla!'
    },
    {
      name: '3',
      img: "No, I don't have them all! "
    },
    {
      name: '4',
      img: 'Det största ägget ligger där ännu. '
    },
    {
      name: '4',
      img: 'The biggest egg is still there. '
    },
    {
      name: '5',
      img: 'Hur länge skall detta vara?'
    },
    {
      name: '5',
      img: 'How long will this last?'
    },
    {
      name: '6',
      img: ' Nu är jag ju jättetrött! Och så lade hon sig igen.'
    },
    {
      name: '6',
      img: "Now I'm really tired! And then she lay down again."
    },
    {
      name: '7',
      img: 'Nå, hur går det?'
    },
    {
      name: '7',
      img: "Well, how's it going? "
    },
    {
      name: '8',
      img: 'sade en gammal anka, som kom på besök.'
    },
    {
      name: '8',
      img: 'said an old duck, who came to visit.'
    },
    {
      name: '9',
      img: 'Det dröjer så länge med det ena ägget! sade ankan, som låg och ruvade. '
    },
    {
      name: '9',
      img: ' takes so long with the one egg! said the duck, who was brooding.'
    },
    {
      name: '10',
      img: 'Det vill inte gå hål på det. '
    },
    {
      name: '10',
      img: "It doesn't want to go through it. "
    },
    {
      name: '11',
      img: 'Men titta på alla de andra, de är de vackraste ankungar jag någonsin sett.'
    },
    {
      name: '11',
      img: 'But look at all the others, they are the most beautiful ducklings I have ever seen.'
    },
    {
      name: '12',
      img: ' Låt mig se det där ägget, som inte vill brista! '
    },
    {
      name: '12',
      img: "Let me see that egg that won't break!"
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 18 completed!</h2><a href='https://elaidina.github.io/fra3/level19.html'> Continue to Level 19</a>";


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
