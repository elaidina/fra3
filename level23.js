document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: ' Låt honom vara! sade modern. '
    },
    {
      name: '1',
      img: 'Let him be! said the mother. '
    },
    {
      name: '2',
      img: 'Han gör ju ingen något ont!'
    },
    {
      name: '2',
      img: "He doesn't hurt anyone!"
    },
    {
      name: '3',
      img: 'Ja, men han är för stor och ovanlig, sade ankan, som hade bitit honom och därför skall han näpsas.'
    },
    {
      name: '3',
      img: 'Yes, but he is too big and unusual, said the duck, which had bitten him, and therefore he must be pecked.'
    },
    {
      name: '4',
      img: 'Det är vackra barn mor har, sade den gamla ankan.'
    },
    {
      name: '4',
      img: 'Mother has beautiful children, said the old duck. '
    },
    {
      name: '5',
      img: 'Alla är vackra, så när som på den där ena.'
    },
    {
      name: '5',
      img: 'All are beautiful, so when on that one. '
    },
    {
      name: '6',
      img: 'Den har inte lyckats.'
    },
    {
      name: '6',
      img: 'It has not succeeded. '
    },
    {
      name: '7',
      img: 'Jag skulle önska, att hon kunde göra om den.'
    },
    {
      name: '7',
      img: ' I wish she could redo it.'
    },
    {
      name: '8',
      img: 'Det går inte för sig, ers nåd! sade ankmodern.'
    },
    {
      name: '8',
      img: "It doesn't work, your grace! said the mother duck. "
    },
    {
      name: '9',
      img: 'Han är inte vacker, men han är en innerligt god varelse...'
    },
    {
      name: '9',
      img: 'He is not handsome, but he is a heartily good creature,...'
    },
    {
      name: '10',
      img: '...och simmar lika vackert som någon av de andra, ja, till och med litet bättre. '
    },
    {
      name: '10',
      img: '...and swims as beautifully as any of the others, yea, even a little better. '
    },
    {
      name: '11',
      img: 'Han har legat för länge i ägget. '
    },
    {
      name: '11',
      img: "He's been in the egg too long. "
    },
    {
      name: '12',
      img: 'Därför har han inte fått den rätta formen. '
    },
    {
      name: '12',
      img: 'Therefore, he has not been given the right form.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 23 completed!</h2><a href='https://elaidina.github.io/fra3/level24.html'> Continue to Level 24</a>";


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
