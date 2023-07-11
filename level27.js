document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Hon värpte snällt och gumman höll av henne som sitt eget barn.'
    },
    {
      name: '1',
      img: 'She gave birth nicely and the old woman cared for her like her own child.'
    },
    {
      name: '2',
      img: 'På morgonen märkte man snabbt den främmande ankungen och katten började spinna och hönan kackla.'
    },
    {
      name: '2',
      img: 'In the morning, the strange duckling was quickly noticed and the cat began to purr and the hen to cluck.'
    },
    {
      name: '3',
      img: 'Vad för något! '
    },
    {
      name: '3',
      img: 'What! '
    },
    {
      name: '4',
      img: 'sade gumman och såg sig runt omkring. '
    },
    {
      name: '4',
      img: 'said the old woman, looking around.'
    },
    {
      name: '5',
      img: 'Men hon såg inte så bra och så trodde hon, att ankungen var en fet anka, som hade kommit vilse.'
    },
    {
      name: '5',
      img: "But she couldn't see very well and so she thought the duckling was a fat duck that had gotten lost. "
    },
    {
      name: '6',
      img: 'Det var ju en rar fångst! sade hon.'
    },
    {
      name: '6',
      img: ' It was a rare catch! she said.'
    },
    {
      name: '7',
      img: 'Nu kan jag få ankägg, bara det inte är en ankhanne. '
    },
    {
      name: '7',
      img: "Now I can get duck eggs, as long as it's not a male duck. "
    },
    {
      name: '8',
      img: 'Det måste vi pröva.'
    },
    {
      name: '8',
      img: 'We have to try that.'
    },
    {
      name: '9',
      img: 'Och så blev ankungen antagen på prov i tre veckor men det blev inga ägg. '
    },
    {
      name: '9',
      img: 'And so the duckling was accepted for testing for three weeks, but there were no eggs. '
    },
    {
      name: '10',
      img: "Katten var herre i huset, och hönan var fru och alltid sade de:"
    },
    {
      name: '10',
      img: ' The cat was the master of the house, and the hen was the wife, and they always said:  '
    },
    {
      name: '11',
      img: 'Vi och världen! De trodde, att de utgjorde hälften av den och det var den allra bästa delen.      '
    },
    {
      name: '11',
      img: 'We and the world!They thought they made up half of it and that was the very best part.'
    },
    {
      name: '12',
      img: 'Ankungen tyckte, att man också kunde ha en annan åsikt, men det kunde hönan inte tåla.'
    },
    {
      name: '12',
      img: 'The duckling thought that you could also have a different opinion, but the hen could not stand that.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 27 completed!</h2><a href='https://elaidina.github.io/fra3/level28.html'> Continue to Level 28</a>";


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
