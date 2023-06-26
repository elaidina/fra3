document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'sade ankungen.'
    },
    {
      name: '1',
      img: "said the duckling."
    },
    {
      name: '2',
      img: 'Så härligt att få det över huvudet och dyka ned till bottnen.'
    },
    {
      name: '2',
      img: 'So lovely to get it over your head and dive down to the bottom.'
    },
    {
      name: '3',
      img: 'Jo, det är just ett stort nöje! sade hönan.'
    },
    {
      name: '3',
      img: "Yes, it's just a great pleasure! said the hen. "
    },
    {
      name: '4',
      img: 'Du måste visst ha blivit tokig! '
    },
    {
      name: '4',
      img: 'You must have gone crazy! '
    },
    {
      name: '5',
      img: 'Fråga katten, som är den klokaste jag känner, om han tycker om att flyta på vattnet eller dyka ned.'
    },
    {
      name: '5',
      img: 'Ask the cat, who is the smartest I know, if he likes to float on water or dive.'
    },
    {
      name: '6',
      img: ' Jag vill inte tala om mig. '
    },
    {
      name: '6',
      img: "I don't want to talk about me."  
    },
    {
      name: '7',
      img: 'Fråga själva vårt herskap, den gamla gumman.'
    },
    {
      name: '7',
      img: ' Ask our Lordship herself, the old lady.'
    },
    {
      name: '8',
      img: 'Klokare än hon fins ingen i världen. '
    },
    {
      name: '8',
      img: 'There is no one in the world wiser than her.'
    },
    {
      name: '9',
      img: 'Tror du, att hon har lust att flyta och få vatten över huvudet?'
    },
    {
      name: '9',
      img: 'Do you think she wants to float and get water over her head?      '
    },
    {
      name: '10',
      img: 'Ni förstår mig inte, sade ankungen.'
    },
    {
      name: '10',
      img: "You don't understand me, said the duckling."
    },
    {
      name: '11',
      img: ' Ja, om inte vi förstår dig, vem skulle då förstå dig? '
    },
    {
      name: '11',
      img: "Yes, if we don't understand you, then who would understand you?"
    },
    {
      name: '12',
      img: 'Du tror väl inte att du kan vara klokare än katten och gumman, för att inte tala om mig?'
    },
    {
      name: '12',
      img: "You don't think you can be wiser than the cat and the old woman, not to mention me?"
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 29 completed!</h2><a href='https://elaidina.github.io/fra3/level30.html'> Continue to Level 30</a>";


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
