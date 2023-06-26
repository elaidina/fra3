document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: ' Jag kan i bästa fall låta göra ett par skinnhandskar av pälsen.'
    },
    {
      name: '1',
      img: "At best, I can have a pair of leather gloves made from the fur."
    },
    {
      name: '2',
      img: 'Hör på, sa då katten till honom. '
    },
    {
      name: '2',
      img: " Listen, the cat then told him. "
    },
    {
      name: '3',
      img: 'Döda mig inte.'
    },
    {
      name: '3',
      img: "Do not kill me. "
    },
    {
      name: '4',
      img: 'Låt istället göra ett par stövlar åt mig, så att jag kan visa mig ute bland folk.'
    },
    {
      name: '4',
      img: 'Instead, have a pair of boots made for me, so that I can show myself out among people.'
    },
    {
      name: '5',
      img: 'Då kommer du snart att få hjälp.'
    },
    {
      name: '5',
      img: 'Then you will soon get help.      '
    },
    {
      name: '6',
      img: 'Mjölnarsonen blev förvånad över att hans katt kunde tala och han lät göra ett par stövlar åt honom. '
    },
    {
      name: '6',
      img: 'Mjölnarsonen was surprised that his cat could speak and he had a pair of boots made for him. '
    },
    {
      name: '7',
      img: 'När de var färdiga drog katten dem på sig. '
    },
    {
      name: '7',
      img: 'When they were done, the cat pulled them on him.'
    },
    {
      name: '8',
      img: 'Sedan tog han en säck och hällde ner lite säd i den.'
    },
    {
      name: '8',
      img: 'Then he took a sack and poured some grain into it.'
    },
    {
      name: '9',
      img: 'Därefter letade han reda på ett snöre, så att han skulle kunna binda ihop säcken.'
    },
    {
      name: '9',
      img: 'Next he looked for a string, so that he could tie the sack together.'
    },
    {
      name: '10',
      img: "Till sist slängde han upp säcken över axeln och gick sin väg."
    },
    {
      name: '10',
      img: 'At last he slung the sack over his shoulder and went on his way.'
    },
    {
      name: '11',
      img: "På den tiden regerades landet av en kung som tyckte mycket om rapphöns. "
    },
    {
      name: '11',
      img: 'At that time, the country was ruled by a king who was very fond of partridges. '
    },
    {
      name: '12',
      img: 'Det visste katten och eftersom de var svåra att skjuta, hade han listat ut ett sätt att ta dem till fånga.'
    },
    {
      name: '12',
      img: 'The cat knew that and since they were hard to shoot, he had figured out a way to capture them. '
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 9 completed!</h2><a href="https://elaidina.github.io/fra3/level10.html"> Continue to Level 10</a>'


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
