document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Vad är det som rullar och skramlar i min mage?'
    },
    {
      name: '1',
      img: 'What is rolling and rattling in my stomach?'
    },
    {
      name: '2',
      img: 'Jag trodde det var sex små killingar,'
    },
    {
      name: '2',
      img: 'I thought it was six little guys,'
    },
    {
      name: '3',
      img: 'Men nu känns det som stora stenbumlingar.'
    },
    {
      name: '3',
      img: 'But now it feels like big boulders.'
    },
    {
      name: '4',
      img: 'Och när han kom fram till brunnen och lutade sig fram för att dricka,'
    },
    {
      name: '4',
      img: 'And when he came to the well and leaned forward to drink, '
    },
    {
      name: '5',
      img: 'gjorde de tunga stenarna att han tappade balansen och föll i vattnet och drunknade. '
    },
    {
      name: '5',
      img: 'the heavy stones caused him to lose his balance and fall into the water and drown. '
    },
    {
      name: '6',
      img: 'När killingarna såg detta, kom de omedelbart springande och ropade högt och ljudligt:'
    },
    {
      name: '6',
      img: 'When the kittens saw this, they immediately came running and shouted loudly and loudly: '
    },
    {
      name: '7',
      img: 'Vargen är död! Vargen är död!'
    },
    {
      name: '7',
      img: "The wolf is dead! The wolf is dead!"
    },
    {
      name: '8',
      img: 'De dansade av glädje runt källan tillsammans med sin mor.'
    },
    {
      name: '8',
      img: "They danced for joy around the spring together with their mother."
    },
    {
      name: '9',
      img: 'Sedan gick de lyckliga hem och visste att de inte längre behövde vara rädda för vargen. '
    },
    {
      name: '9',
      img: 'Then they went home happy knowing that they no longer needed to be afraid of the wolf.'
    },
    {
      name: '10',
      img: 'En mjölnare hade tre söner.'
    },
    {
      name: '10',
      img: 'A miller had three sons.'
    },
    {
      name: '11',
      img: 'När han dog ärvde den äldste sonen kvarnen, den näst äldste fick åsnan och till den yngste blev bara katten kvar.'
    },
    {
      name: '11',
      img: 'When he died, the oldest son inherited the mill, the second oldest got the donkey, and the youngest got only the cat.'
    },
    {
      name: '12',
      img: 'Vad ska jag ta mig till med en katt?'
    },
    {
      name: '12',
      img: 'What am I going to do with a cat?'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 8 completed!</h2><a href='https://elaidina.github.io/fra3/level9.html'> Continue to Level 9</a>";


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
