document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Då sprang prinsessan fram till dörren och öppnade den.'
    },
    {
      name: '1',
      img: 'Then the princess ran to the door and opened it. '
    },
    {
      name: '2',
      img: 'Hon fick då syn på grodan, som hon fullkomligt hade glömt bort.'
    },
    {
      name: '2',
      img: 'She then caught sight of the frog, which she had completely forgotten.'
    },
    {
      name: '3',
      img: 'Vid denna syn blev hon rädd, ...'
    },
    {
      name: '3',
      img: 'At this sight she was frightened, ...'
    },
    {
      name: '4',
      img: '...stängde snabbt dörren och återvände till bordet.'
    },
    {
      name: '4',
      img: '...quickly closed the door and returned to the table. '
    },
    {
      name: '5',
      img: 'Hennes far, kungen, såg att något hade skrämt henne och frågade vad det var. '
    },
    {
      name: '5',
      img: 'Her father, the king, saw that something had frightened her and asked what it was.'
    },
    {
      name: '6',
      img: 'Det är en otäck groda vid dörren.'
    },
    {
      name: '6',
      img: "There's a nasty frog at the door."
    },
    {
      name: '7',
      img: 'sa hon'
    },
    {
      name: '7',
      img: 'she said'
    },
    {
      name: '8',
      img: 'Han hämtade upp min boll ur brunnen i morse.'
    },
    {
      name: '8',
      img: 'He picked up my ball from the well this morning. '
    },
    {
      name: '9',
      img: 'Jag lovade honom, att han skulle få leva med mig,...'
    },
    {
      name: '9',
      img: ' I promised him that he would be allowed to live with me,...'
    },
    {
      name: '10',
      img: '...eftersom jag trodde att han aldrig skulle kunna komma upp ur brunnen och komma hit. '
    },
    {
      name: '10',
      img: '...because I thought he would never be able to get out of the well and come here. '
    },
    {
      name: '11',
      img: 'Men nu är han här vid dörren och vill komma in.'
    },
    {
      name: '11',
      img: 'But now he is here at the door and wants to come in.'
    },
    {
      name: '12',
      img: 'Medan hon pratade knackade grodan återigen på dörren och sa:'
    },
    {
      name: '12',
      img: 'While she was talking, the frog knocked on the door again and said:'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra3/level41.html'> Continue to next level </a>";


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
