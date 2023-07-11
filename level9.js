document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: ' Little Red Riding Hood undressed'
    },
    {
      name: '1',
      img: "Le Petit Chaperon rouge s’est déshabillée"
    },
    {
      name: '2',
      img: 'and went to bed. '
    },
    {
      name: '2',
      img: " et s’est couchée. "
    },
    {
      name: '3',
      img: 'She thought her grandmother was a little weird. '
    },
    {
      name: '3',
      img: "Elle a trouvé que sa grand-mère était un peu bizarre. "
    },
    {
      name: '4',
      img: 'She said to him:'
    },
    {
      name: '4',
      img: 'Elle lui a dit :'
    },
    {
      name: '5',
      img: 'Grandmother, your arms are very big.'
    },
    {
      name: '5',
      img: 'Grand-mère, vos bras sont très grands.      '
    },
    {
      name: '6',
      img: "It's to kiss you well, my little girl. "
    },
    {
      name: '6',
      img: 'C’est pour bien t’embrasser, ma petite fille. '
    },
    {
      name: '7',
      img: 'Grandma, you have long legs. '
    },
    {
      name: '7',
      img: 'Grand-mère, vous avez de grandes jambes.'
    },
    {
      name: '8',
      img: "It's for running fast, my little girl."
    },
    {
      name: '8',
      img: 'C’est pour courir vite, ma petite fille.'
    },
    {
      name: '9',
      img: "Grandma, you have big ears."
    },
    {
      name: '9',
      img: ' Grand-mère, vous avez de grandes oreilles.'
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
