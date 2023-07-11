document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Se nu bara till, att du lägger ägg och lär dig spinna eller gnistra!'
    },
    {
      name: '1',
      img: 'Now just make sure you lay eggs and learn to purr or sparkle!'
    },
    {
      name: '2',
      img: ' Jag tror, att jag vill gå ut i vida världen, sade ankungen.'
    },
    {
      name: '2',
      img: 'I think I want to go out into the wide world, said the duckling.'
    },
    {
      name: '3',
      img: 'Ja, gör det du! sade hönan.'
    },
    {
      name: '3',
      img: 'Yes, you do! said the hen.'
    },
    {
      name: '4',
      img: 'Och så gick ankungen. '
    },
    {
      name: '4',
      img: 'And so the duckling went. '
    },
    {
      name: '5',
      img: 'Han flöt på vattnet, han dök, men av alla djur sågs han över axeln för sin fulhet.'
    },
    {
      name: '5',
      img: 'He floated on the water, he dived, but of all the animals he was looked over the shoulder for his ugliness.'
    },
    {
      name: '6',
      img: 'Nu kom hösten, löven i skogen blev gula och bruna  och uppe i luften såg det kallt ut. '
    },
    {
      name: '6',
      img: 'Now autumn came, the leaves in the forest turned yellow and brown and up in the air it looked cold. '
    },
    {
      name: '7',
      img: 'Molnen hängde tunga.'
    },
    {
      name: '7',
      img: 'The clouds hung heavy.'
    },
    {
      name: '8',
      img: ' Ja, man kunde riktigt frysa, då man tänkte på det.'
    },
    {
      name: '8',
      img: 'Yes, you could really freeze, when you thought about it. '
    },
    {
      name: '9',
      img: 'Den stackars ankungen hade verkligen inte trevligt.'
    },
    {
      name: '9',
      img: "The poor duckling really didn't have a good time."
    },
    {
      name: '10',
      img: 'En kväll när solen gick ned kom en hel flock stora vackra fåglar ut ur buskarna.'
    },
    {
      name: '10',
      img: 'One evening when the sun was setting, a whole flock of big beautiful birds came out of the bushes.'
    },
    {
      name: '11',
      img: 'Ankungen hade aldrig sett några så vackra, de var alldeles skinande vita, med långa, smidiga halsar.'
    },
    {
      name: '11',
      img: 'The duckling had never seen any so beautiful, they were absolutely shining white, with long, flexible necks.'
    },
    {
      name: '12',
      img: 'Det var svanar.'
    },
    {
      name: '12',
      img: ' It was swans.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 30 completed!</h2><a href='https://elaidina.github.io/fra3/level31.html'> Continue to Level 31</a>";


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
