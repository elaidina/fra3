document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Medan hon pratade, stack en groda upp huvudet ur vattnet och sa:'
    },
    {
      name: '1',
      img: 'While she was talking, a frog stuck its head out of the water and said,'
    },
    {
      name: '2',
      img: 'Prinsessa, varför är du så ledsen?'
    },
    {
      name: '2',
      img: 'Princess, why are you so sad?'
    },
    {
      name: '3',
      img: 'Äh! sa hon'
    },
    {
      name: '3',
      img: 'Uh! said she'
    },
    {
      name: '4',
      img: 'Vad kan väl du göra för mig din elaka groda?'
    },
    {
      name: '4',
      img: 'What can you do for me you mean frog?'
    },
    {
      name: '5',
      img: 'Min gyllene boll har ramlat ner i brunnen.'
    },
    {
      name: '5',
      img: 'My golden ball has fallen into the well.'
    },
    {
      name: '6',
      img: 'Grodan sa då:'
    },
    {
      name: '6',
      img: 'The frog then said:'
    },
    {
      name: '7',
      img: 'Jag vill inte ha dina fina kläder, dina juveler eller pärlor men om du kommer att älska mig,...'
    },
    {
      name: '7',
      img: "I don't want your fine clothes, your jewels or pearls but if you will love me, ..."
    },
    {
      name: '8',
      img: '... låta mig leva med dig, äta från dina gyllene tallrikar och sova i din säng, ...'
    },
    {
      name: '8',
      img: '...let me live with you, eat from your golden plates and sleep in your bed,...'
    },
    {
      name: '9',
      img: '...då skall jag ge dig tillbaka din boll.'
    },
    {
      name: '9',
      img: '...then I will give you back your ball. '
    },
    {
      name: '10',
      img: 'Vilket trams'
    },
    {
      name: '10',
      img: 'What nonsense'
    },
    {
      name: '11',
      img: 'tänkte prinsessan'
    },
    {
      name: '11',
      img: 'thought the princess'
    },
    {
      name: '12',
      img: 'den här dumma grodan pratar'
    },
    {
      name: '12',
      img: 'this stupid frog is talking'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra3/level38.html'> Continue to next level </a>";


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
