document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'När prinsessan öppnade dörren, kom grodan in och sov på hennes kudde tills morgonen kom. '
    },
    {
      name: '1',
      img: 'When the princess opened the door, the frog came in and slept on her pillow until morning came.'
    },
    {
      name: '2',
      img: 'Den tredje kvällen gjorde han det igen, men när prinsessan vaknade, ...'
    },
    {
      name: '2',
      img: ' On the third night he did it again, but when the princess awoke, ...'
    },
    {
      name: '3',
      img: '...följande morgon, blev hon väldigt överraskad. '
    },
    {
      name: '3',
      img: '... the following morning, she was very surprised. '
    },
    {
      name: '4',
      img: 'Hon såg då inte en groda utan en vacker prins, ...'
    },
    {
      name: '4',
      img: 'She then saw not a frog but a handsome prince, ...'
    },
    {
      name: '5',
      img: '...som såg på henne med de vackraste ögon hon någonsin sett.'
    },
    {
      name: '5',
      img: '...who looked at her with the most beautiful eyes she had ever seen.'
    },
    {
      name: '6',
      img: 'Han berättade att han blivit förtrollad av en ond fe, ...'
    },
    {
      name: '6',
      img: 'He told that he had been bewitched by an evil fairy,...'
    },
    {
      name: '7',
      img: '...som hade förvandlat honom till en groda och att han så skulle förbli, ...'
    },
    {
      name: '7',
      img: '...who had turned him into a frog, and that he would remain so, ...'
    },
    {
      name: '8',
      img: '...tills någon prinsessa tog honom ur brunnen och lät honom äta från sin tallrik...'
    },
    {
      name: '8',
      img: '...until some princess took him out of the well and let him eat from her plate ...'
    },
    {
      name: '9',
      img: '...och sova i sin säng i tre nätter.'
    },
    {
      name: '9',
      img: '...and sleep in her bed for three nights. '
    },
    {
      name: '10',
      img: 'Du har nu brutit förtrollningen.'
    },
    {
      name: '10',
      img: 'You have now broken the spell.'
    },
    {
      name: '11',
      img: 'sa prinsen, och jag har inga andra önskningar än att du vill följa med mig till min fars kungarike, ...'
    },
    {
      name: '11',
      img: "said the prince, “and I have no other wishes than that you will come with me to my father's kingdom, ..."
    },
    {
      name: '12',
      img: '...där jag kommer att gifta mig med dig och älska dig så länge jag lever.'
    },
    {
      name: '12',
      img: ' where I will marry you and love you as long as I live.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra3/level44.html'> Continue to next level </a>";


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
