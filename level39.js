document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Grodan ropade efter henne: '
    },
    {
      name: '1',
      img: ' The frog called after her: '
    },
    {
      name: '2',
      img: 'Stanna Prinsessa! '
    },
    {
      name: '2',
      img: 'Stop, Princess!'
    },
    {
      name: '3',
      img: 'Du lovade ju att ta mig med!'
    },
    {
      name: '3',
      img: 'You promised to take me with you!'
    },
    {
      name: '4',
      img: 'Men hon stannade inte för att lyssna på honom.'
    },
    {
      name: '4',
      img: "But she didn't stop to listen to him."
    },
    {
      name: '5',
      img: 'Nästa dag, precis när prinsessan hade satt sig ner för att äta middag,...'
    },
    {
      name: '5',
      img: 'The next day, just as the princess had sat down to dinner,...'
    },
    {
      name: '6',
      img: '...hörde hon ett konstigt ljud:'
    },
    {
      name: '6',
      img: '...she heard a strange sound:'
    },
    {
      name: '7',
      img: 'Tap, tap, plask, plask'
    },
    {
      name: '7',
      img: 'Tap, tap, splash, splash'
    },
    {
      name: '8',
      img: '...som om något kom upp för marmortrapporna. '
    },
    {
      name: '8',
      img: 'as if something was coming up the marble stairs.'
    },
    {
      name: '9',
      img: 'Strax därefter hördes en lätt knackning på dörren och en röst ropade:'
    },
    {
      name: '9',
      img: 'Soon after, a light knock was heard on the door and a voice called out:'
    },
    {
      name: '10',
      img: 'Öppna dörren, min älskade prinsessa!'
    },
    {
      name: '10',
      img: 'Open the door, my beloved princess!'
    },
    {
      name: '11',
      img: 'Öppna dörren och släpp in din käresta!'
    },
    {
      name: '11',
      img: 'Open the door and let your loved one in!'
    },
    {
      name: '12',
      img: 'Kom ihåg vad du lovade mig där nere vid brunnen!'
    },
    {
      name: '12',
      img: "Remember what you promised me down at the well!"
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra3/level40.html'> Continue to next level </a>";


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
