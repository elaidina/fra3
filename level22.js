document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Hon är den förnämaste av alla här.'
    },
    {
      name: '1',
      img: 'She is the most distinguished of all here.'
    },
    {
      name: '2',
      img: 'Hon är av spanskt blod därför är hon så tjock.'
    },
    {
      name: '2',
      img: " She is of Spanish blood that's why she is so fat."
    },
    {
      name: '3',
      img: 'Pass på!'
    },
    {
      name: '3',
      img: 'Look out! '
    },
    {
      name: '4',
      img: ' Inte i hop med benen!'
    },
    {
      name: '4',
      img: 'Not messing with the legs! '
    },
    {
      name: '5',
      img: 'En väluppfostrad ankunge sätter ut benen långt ifrån varandra, liksom far och mor.'
    },
    {
      name: '5',
      img: 'A well-behaved duckling puts its legs far apart, like father and mother.'
    },
    {
      name: '6',
      img: 'Se så, nig nu och säg kvack!'
    },
    {
      name: '6',
      img: 'Look, you now and say quack!'
    },
    {
      name: '7',
      img: 'Och det gjorde de, men de andra ankorna runt omkring såg på dem och sade helt högt: '
    },
    {
      name: '7',
      img: 'And they did, but the other ducks around looked at them and said out loud: '
    },
    {
      name: '8',
      img: 'Se! Nu skall vi få det där följet också! '
    },
    {
      name: '8',
      img: 'Look! Now we will get that companion too! '
    },
    {
      name: '9',
      img: 'Precis som om vi inte redan var tillräckligt många! '
    },
    {
      name: '9',
      img: "Just as if there weren't enough of us already! "
    },
    {
      name: '10',
      img: 'Och fy, så den där ena ungen ser ut! '
    },
    {
      name: '10',
      img: 'And wow, what does that one kid look like! '
    },
    {
      name: '11',
      img: 'Honom kan vi ju inte tåla.'
    },
    {
      name: '11',
      img: "We can't stand him."
    },
    {
      name: '12',
      img: ' Och strax flög en anka fram och bet honom i nacken.'
    },
    {
      name: '12',
      img: ' And immediately a duck flew forward and bit him on the neck.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 22 completed!</h2><a href='https://elaidina.github.io/fra3/level23.html'> Continue to Level 23</a>";


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
