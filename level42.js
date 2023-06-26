document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Nu är jag trött. '
    },
    {
      name: '1',
      img: 'Now I am tired.'
    },
    {
      name: '2',
      img: 'Bär mig upp till ditt rum och lägg mig I din säng.'
    },
    { 
      name: '2',
      img: 'Carry me up to your room and put me in your bed.'
    },
    {
      name: '3',
      img: 'Prinsessan tog honom då, om än motvilligt, i sin hand, ...'
    },
    {
      name: '3',
      img: 'The princess then took him, albeit reluctantly, in her hand,...'
    },
    {
      name: '4',
      img: '...bar upp honom till sitt rum och lade honom på sin kudde.'
    },
    {
      name: '4',
      img: '...carried him up to her room, and laid him on her pillow.'
    },
    {
      name: '5',
      img: 'Där sov grodan hela natten. '
    },
    {
      name: '5',
      img: 'There the frog slept all night.'
    },
    {
      name: '6',
      img: ' Så snart det var ljust hoppade han upp ur sängen, ...'
    },
    {
      name: '6',
      img: 'As soon as it was light, he jumped out of bed,...'
    },
    {
      name: '7',
      img: '...hoppade nerför trapporna och gick ut ur huset.'
    },
    {
      name: '7',
      img: '...jumped down the stairs and left the house.'
    },
    {
      name: '8',
      img: 'Nå äntligen.'
    },
    {
      name: '8',
      img: 'Well at last.'
    },
    {
      name: '9',
      img: 'tänkte prinsessan'
    },
    {
      name: '9',
      img: 'thought the princess'
    },
    {
      name: '10',
      img: 'nu har han gått och han kommer inte att besvära mig mer.'
    },
    {
      name: '10',
      img: 'now he has gone and he will trouble me no more.'
    },
    {
      name: '11',
      img: 'Men hon bedrog sig för till kvällen hörde hon samma konstiga steg i yttertrappan,...'
    },
    {
      name: '11',
      img: 'But she was deceived because in the evening she heard the same strange footsteps on the front steps,...'
    },
    {
      name: '12',
      img: '...samma knackning på dörren och grodans röst som ännu en gång ropade:'
    },
    {
      name: '12',
      img: "...the same knocking on the door and the frog's voice calling once more:"
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra3/level43.html'> Continue to next level </a>";


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
