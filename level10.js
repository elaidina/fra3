document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Han knöt upp säcken med sädeskornen och lade den öppen på marken.'
    },
    {
      name: '1',
      img: 'He untied the sack of grain and laid it open on the ground.'
    },
    {
      name: '2',
      img: 'Snöret lade han i gräset och drog det bort till en häck. '
    },
    {
      name: '2',
      img: 'He laid the string in the grass and pulled it away to a hedge. '
    },
    {
      name: '3',
      img: 'Där gömde han sig och låg på lur.'
    },
    {
      name: '3',
      img: 'There he hid and lay in wait. '
    },
    {
      name: '4',
      img: 'Snart kom rapphönsen.'
    },
    {
      name: '4',
      img: 'Soon the partridges arrived.'
    },
    {
      name: '5',
      img: 'De hoppade in i kornsäcken. '
    },
    {
      name: '5',
      img: 'They jumped into the grain sack.'
    },
    {
      name: '6',
      img: ' När tillräckligt många hade krupit in, drog katten åt snöret. '
    },
    {
      name: '6',
      img: 'When enough people had crawled in, the cat pulled the string. '
    },
    {
      name: '7',
      img: 'Sedan tog han säcken på ryggen och gick raka vägen till kungens slott.'
    },
    {
      name: '7',
      img: "Then he put the sack on his back and went straight to the king's castle."
    },
    {
      name: '8',
      img: "Stopp! Varthän? ropade vakten."
    },
    {
      name: '8',
      img: 'Stop! Where? shouted the guard.'
    },
    {
      name: '9',
      img: 'Till kungen, svarade katten frimodigt.'
    },
    {
      name: '9',
      img: 'To the king, answered the cat boldly.'
    },
    {
      name: '10',
      img: 'Eftersom kungen hade långtråkigt släpptes katten in.'
    },
    {
      name: '10',
      img: 'Since the king was bored, the cat was let in. '
    },
    {
      name: '11',
      img: 'Han bugade sig djupt för kungen och sa:'
    },
    {
      name: '11',
      img: 'He bowed deeply to the king and said:'
    },
    {
      name: '12',
      img: 'Min herre, greven, låter hälsa sin konung. '
    },
    {
      name: '12',
      img: 'My lord, the count, sends greetings to his king. '
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 10 completed!</h2><a href="https://elaidina.github.io/fra3/level11.html"> Continue to Level 11</a>';


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
