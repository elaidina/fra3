document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Allernådigaste konung!'
    },
    {
      name: '1',
      img: 'Most gracious king! '
    },
    {
      name: '2',
      img: 'Min herre, greven, badade här i sjön, och just då kom en tjuv och stal hans kläder. '
    },
    {
      name: '2',
      img: 'My lord, the count, was bathing here in the lake, and just then a thief came and stole his clothes.'
    },
    {
      name: '3',
      img: 'Nu måste greven stanna i vattnet och kan inte stiga upp.'
    },
    {
      name: '3',
      img: ' Now the count must stay in the water and cannot rise.'
    },
    {
      name: '4',
      img: 'Då lät kungen genast hämta de allra finaste kläder. '
    },
    {
      name: '4',
      img: 'Then the king immediately had the finest clothes brought.'
    },
    {
      name: '5',
      img: 'Mjölnarsonen drog på sig dem och måste sedan sätta sig upp hos kungen i vagnen.'
    },
    {
      name: '5',
      img: 'Mjölnarsonen put them on and then has to sit up with the king in the carriage. .'
    },
    {
      name: '6',
      img: 'Prinsessan blev glad, för hon tyckte om den unge greven.'
    },
    {
      name: '6',
      img: 'The princess was happy, because she liked the young count.'
    },
    {
      name: '7',
      img: 'Under tiden hade katten sprungit i förväg. Han kom fram till en stor äng. '
    },
    {
      name: '7',
      img: 'Meanwhile, the cat had run ahead. He came to a large meadow. '
    },
    {
      name: '8',
      img: 'Där höll folk just på att räfsa hö. '
    },
    {
      name: '8',
      img: 'People were just raking hay there. '
    },
    {
      name: '9',
      img: 'De berättade, att ängen tillhörde den store trollkarlen.'
    },
    {
      name: '9',
      img: 'They told that the meadow belonged to the great sorcerer.'
    },
    {
      name: '10',
      img: 'Då befallde katten dem:'
    },
    {
      name: '10',
      img: 'Then the cat ordered them:'
    },
    {
      name: '11',
      img: 'När kungen nu strax kör förbi här och frågar vem som äger ängen, så svara: '
    },
    {
      name: '11',
      img: ' When the king drives by here and asks who owns the meadow, answer: '
    },
    {
      name: '12',
      img: 'greven! Gör ni inte det, så blir det synd  om er!'
    },
    {
      name: '12',
      img: " the count! If you don't, it will be a pity for you!"
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 13 completed!</h2><a href='https://elaidina.github.io/fra3/level14.html'> Continue to Level 14</a>";


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
