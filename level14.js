document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Sedan skyndade katten vidare till ett stort sädesfält och en stor skog.'
    },
    {
      name: '1',
      img: 'Then the cat hurried on to a large cornfield and a large forest. '
    },
    {
      name: '2',
      img: 'Han befallde folket, som arbetade där, att säga detsamma.'
    },
    {
      name: '2',
      img: 'He commanded the people who worked there to say the same. '
    },
    {
      name: '3',
      img: ' Och eftersom han såg så märklig ut, blev folket lite rädda för honom.'
    },
    {
      name: '3',
      img: ' And because he looked so strange, the people became a little afraid of him.'
    },
    {
      name: '4',
      img: 'Till slut kom katten fram till trollkarlens slott. '
    },
    {
      name: '4',
      img: "Finally the cat arrived at the wizard's castle. "
    },
    {
      name: '5',
      img: 'Han bugade sig för denne och sa:'
    },
    {
      name: '5',
      img: 'He bowed to him and said:'
    },
    {
      name: '6',
      img: 'Jag har hört, att du kan förvandla dig till vilket djur som helst.'
    },
    {
      name: '6',
      img: 'I have heard that you can transform yourself into any animal.'
    },
    {
      name: '7',
      img: 'Men skulle du verkligen kunna förvandla dig till ett  så stort djur som en elefant?'
    },
    {
      name: '7',
      img: 'But could you really transform into an animal as big as an elephant?'
    },
    {
      name: '8',
      img: 'Jo, det vill jag mena, sa trollkarlen.'
    },
    {
      name: '8',
      img: "Well, that's what I mean, said the wizard." 
    },
    {
      name: '9',
      img: 'Och genast stod en elefant framför katten.'
    },
    {
      name: '9',
      img: 'And immediately an elephant stood in front of the cat.'
    },
    {
      name: '10',
      img: ' Otroligt! utropade denne.'
    },
    {
      name: '10',
      img: 'Unbelievable! he exclaimed.'
    },
    {
      name: '11',
      img: 'Du är bestämt den störste trollkarlen i hela världen. '
    },
    {
      name: '11',
      img: 'You are definitely the greatest wizard in the whole world.'
    },
    {
      name: '12',
      img: 'Men jag kan slå vad om, att du inte kan förvandla dig till ett så litet djur som en mus.'
    },
    {
      name: '12',
      img: "But I bet you can't turn into an animal as small as a mouse."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 14 completed!</h2><a href='https://elaidina.github.io/fra3/level15.html'> Continue to Level 15</a>";


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
