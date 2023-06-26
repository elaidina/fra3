document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Vattnet gick över huvudet på dem men de kom snabbt upp igen och flöt så vackert.'
    },
    {
      name: '1',
      img: 'The water went over their heads but they quickly came back up and floated so beautifully. '
    },
    {
      name: '2',
      img: 'Benen gick av sig själva.'
    },
    {
      name: '2',
      img: 'The legs went off by themselves.'
    },
    {
      name: '3',
      img: 'Alla var ute, den fula, grå ungen simmade med.'
    },
    {
      name: '3',
      img: 'Everyone was out, the ugly, gray kid was swimming along.'
    },
    {
      name: '4',
      img: 'Nej, det är inte någon kalkon! sade hon.'
    },
    {
      name: '4',
      img: "No, it's not a turkey! she said. "
    },
    {
      name: '5',
      img: 'Se bara, hur vackert han använder benen och hur rak han håller sig! '
    },
    {
      name: '5',
      img: ' Just look how beautifully he uses his legs and how straight he stands! '
    },
    {
      name: '6',
      img: ' Det är min egen unge.'
    },
    {
      name: '6',
      img:  "It's my own kid. "
    },
    {
      name: '7',
      img: 'I själva verket är han ändå ganska vacker, när man riktigt betraktar honom. '
    },
    {
      name: '7',
      img: 'In fact, he is still quite handsome, when you really look at him. '
    },
    {
      name: '8',
      img: 'Kvack! Kvack! kom nu med, så skall jag föra er ut i världen och presentera er i ankgården.'
    },
    {
      name: '8',
      img: ' Quack! Quack! now come along, and I will take you out into the world and introduce you to the duck farm.'
    },
    {
      name: '9',
      img: 'Så kom de in i ankgården.'
    },
    {
      name: '9',
      img: 'Then they entered the duck yard. '
    },
    {
      name: '10',
      img: 'Det var ett förskräckligt väsen där inne eftersom det var två familjer, som slogs om ett ålhuvud.'
    },
    {
      name: '10',
      img: ' There was a terrible commotion in there because there were two families fighting over an eel head.'
    },
    {
      name: '11',
      img: 'Se, så går det till i världen! sade ankmodern och slickade sig om näbben. '
    },
    {
      name: '11',
      img: "See, that's how the world works! said the mother duck, licking her beak."
    },
    {
      name: '12',
      img: 'Se till att sköta er och nig med halsen för den gamla ankan där borta! '
    },
    {
      name: '12',
      img: 'Be sure to watch yourselves and your necks for that old duck over there! '
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 21 completed!</h2><a href='https://elaidina.github.io/fra3/level22.html'> Continue to Level 12</a>";


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
