document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: ' Han kan ju inte ens komma ur vattnet för att besöka mig,...'
    },
    {
      name: '1',
      img: "He can't even get out of the water to visit me,..."
    },
    {
      name: '2',
      img: '...men han kan nog hämta min boll. '
    },
    {
      name: '2',
      img: '...but he can probably get my ball. '
    },
    {
      name: '3',
      img: 'Därför skall jag säga att han får allt han ber om.'
    },
    {
      name: '3',
      img: 'Therefore I shall say that he gets everything he asks for.'
    },
    {
      name: '4',
      img: 'Hon sa då till grodan: '
    },
    {
      name: '4',
      img: 'She then said to the frog: '
    },
    {
      name: '5',
      img: 'Om du hämtar min boll, skall du få allt du bett om.'
    },
    {
      name: '5',
      img: 'If you get my ball, you will get everything you asked for.'
    },
    {
      name: '6',
      img: 'Grodan dök då ner under vattnet ...'
    },
    {
      name: '6',
      img: 'The frog then dived under the water ...'
    },
    {
      name: '7',
      img: '...och efter en stund kom den upp igen med bollen i munnen ...'
    },
    {
      name: '7',
      img: '...and after a while it came up again with the ball in its mouth ...'
    },
    {
      name: '8',
      img: '...och lade den på brunnskanten.'
    },
    {
      name: '8',
      img: '...and placed it on the edge of the well.'
    },
    {
      name: '9',
      img: 'Så snart prinsessan såg bollen, ...'
    },
    {
      name: '9',
      img: 'As soon as the princess saw the ball, ...'
    },
    {
      name: '10',
      img: '...sprang hon förtjust fram och plockade upp den ...'
    },
    {
      name: '10',
      img: '...she excitedly ran forward and picked it up...'
    },
    {
      name: '11',
      img: '... och tänkte inte mer på grodan,...'
    },
    {
      name: '11',
      img: '...and thought no more of the frog, ...'
    },
    {
      name: '12',
      img: '...utan sprang hem så fort hon kunde.'
    },
    {
      name: '12',
      img: '...but ran home as fast as she could. '
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra3/level39.html'> Continue to next level </a>";


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
