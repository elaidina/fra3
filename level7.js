document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Then he closed the door,'
    },
    {
      name: '1',
      img: 'Ensuite, il a fermé la porte,'
    },
    {
      name: '2',
      img: "he lay down in grandmother's bed and waited for Little Red Riding Hood.  "
    },
    {
      name: '2',
      img: "il s’est couché dans le lit de la grand-mère et a attendu le Petit Chaperon Rouge. "
    },
    {
      name: '3',
      img: 'A little later,  '
    },
    {
      name: '3',
      img: 'Un peu après,  '
    },
    {
      name: '4',
      img: "Little Red Riding Hood arrived at Grandma's,"
    },
    {
      name: '4',
      img: 'le Petit Chaperon rouge est arrivée chez la grand-mère, '
    },
    {
      name: '5',
      img: 'knocked on the door: knock, knock.'
    },
    {
      name: '5',
      img: 'a frappé à la porte : toc, toc.'
    },
    {
      name: '6',
      img: 'Who is here ? '
    },
    {
      name: '6',
      img: 'Qui est là ?'
    },
    {
      name: '7',
      img: 'As the wolf had a loud voice, '
    },
    {
      name: '7',
      img: "Comme le loup avait une grosse voix,"
    },
    {
      name: '8',
      img: 'the little girl thought her grandmother had a cold.'
    },
    {
      name: '8',
      img: "She answered:"
    },
    {
      name: '9',
      img: 'Elle a répondu :'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 7 completed!</h2><a href='https://elaidina.github.io/fra3/level8.html'> Continue to Level 8</a>";


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
