document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Hon skulle ju ligga på äggen tills ungarna kom ut men nu hade hon tröttnat efter att ha legat så länge utan att få besök. '
    },
    {
      name: '1',
      img: 'She was supposed to lie on the eggs until the chicks came out, but now she was tired after lying for so long without visitors.'
    },
    {
      name: '2',
      img: 'De andra ankorna tyckte mera om att simma omkring i kanalerna än att springa upp och tjattra med henne.'
    },
    {
      name: '2',
      img: 'The other ducks liked swimming around in the canals more than running up and chatting with her.'
    },
    {
      name: '3',
      img: 'Äntligen knakade det i det ena ägget efter det andra : '
    },
    {
      name: '3',
      img: 'Finally, one egg after another cracked:'
    },
    {
      name: '4',
      img: 'Pip! pip! sade det.'
    },
    {
      name: '4',
      img: 'Beep! beep! said it.'
    },
    {
      name: '5',
      img: 'Alla äggulorna hade blivit levande och stack ut huvudet.'
    },
    {
      name: '5',
      img: 'All the yolks had come alive and were sticking their heads out.'
    },
    {
      name: '6',
      img: 'Kvack! kvack! '
    },
    {
      name: '6',
      img: 'Quack! quack! '
    },
    {
      name: '7',
      img: 'sade hon och så kvackade de allt vad de kunde och tittade åt alla sidor under de gröna bladen ...'
    },
    {
      name: '7',
      img: 'said she, and so they quacked all they could and looked in every direction under the green leaves, ...'
    },
    {
      name: '8',
      img: "...och modern lät dem titta så mycket de ville, för grönt är bra för ögonen."
    },
    {
      name: '8',
      img: '...and the mother let them look as much as they liked, for green is good for the eyes.'
    },
    {
      name: '9',
      img: 'Vad stor världen är! sade alla ungarna för de hade nu mycket bättre svängrum än då de låg inuti ägget.'
    },
    {
      name: '9',
      img: 'How big the world is! said all the cubs because they now had much more room to maneuver than when they were inside the egg.'
    },
    {
      name: '10',
      img: 'Tror ni att det här är hela världen?'
    },
    {
      name: '10',
      img: ' Do you think this is the whole world?'
    },
    {
      name: '11',
      img: 'sade modern. '
    },
    {
      name: '11',
      img: 'said the mother.'
    },
    {
      name: '12',
      img: ' Den sträcker sig långt på andra sidan trädgården, ända in på prästens ägor,  men där har jag aldrig varit.'
    },
    {
      name: '12',
      img: "It stretches far on the other side of the garden, right into the priest's property, but I have never been there."
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 17 completed!</h2><a href="https://elaidina.github.io/fra3/level18.html"> Continue to Level 18</a>';


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
