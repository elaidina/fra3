document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Det du lovat måste du hålla.'
    },
    {
      name: '1',
      img: 'What you promised you must keep.'
    },
    {
      name: '2',
      img: 'sa kungen till prinsessan,'
    },
    {
      name: '2',
      img: 'said the king to the princess,'
    },
    {
      name: '3',
      img: 'Så gå och släpp in honom.'
    },
    {
      name: '3',
      img: 'Then go and let him in.'
    },
    {
      name: '4',
      img: 'Prinsessan gick till dörren och släppte in grodan,...'
    },
    {
      name: '4',
      img: 'The princess went to the door and let the frog in,...'
    },
    {
      name: '5',
      img: '...som hoppade in i rummet med de klafsande ljuden från sina grodfötter:'
    },
    {
      name: '5',
      img: '...who jumped into the room with the clapping sounds of his frog feet: '
    },
    {
      name: '6',
      img: 'Tap, tap, plask, plask'
    },
    {
      name: '6',
      img: 'Tap, tap, splash, splash'
    },
    {
      name: '7',
      img: 'Han fortsatte så ända fram till bordet nära den plats där prinsessan satt.'
    },
    {
      name: '7',
      img: 'He continued in this way as far as the table near where the princess sat.'
    },
    {
      name: '8',
      img: 'Snälla, lyft upp mig på en stol”, sa han till prinsessan,'
    },
    {
      name: '8',
      img: 'Please lift me up on a chair," he said to the princess, '
    },
    {
      name: '9',
      img: 'och låt mig sitta intill dig'
    },
    {
      name: '9',
      img: 'and let me sit next to you.'
    },
    {
      name: '10',
      img: 'Så snart hon gjort det, sa grodan:'
    },
    {
      name: '10',
      img: 'As soon as she had done so, the frog said,'
    },
    {
      name: '11',
      img: 'Ställ din tallrik nära mig, så att jag kan äta från den.'
    },
    {
      name: '11',
      img: 'Put your plate near me, so that I may eat from it.'
    },
    {
      name: '12',
      img: 'Hon gjorde så och när han ätit så mycket han kunde, sa han: '
    },
    {
      name: '12',
      img: 'She did so and when he had eaten as much as he could, he said:'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra3/level42.html'> Continue to next level </a>";


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
