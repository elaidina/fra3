document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: "sade den gamla ankan."
    },
    {
      name: '1',
      img: ' said the old duck. '
    },
    {
      name: '2',
      img: "Du skall se att det är ett kalkonägg ! "
    },
    {
      name: '2',
      img: 'You will see that it is a turkey egg!'
    },
    {
      name: '3',
      img: 'På det sättet blev jag också lurad en gång.'
    },
    {
      name: '3',
      img: " In that way, I was also cheated once."
    },
    {
      name: '4',
      img: "Får jag se på ägget!"
    },
    {
      name: '4',
      img: 'Can I see the egg!'
    },
    {
      name: '5',
      img: 'Jo, det är ett kalkonägg!'
    },
    {
      name: '5',
      img: "Yes, it's a turkey egg!"
    },
    {
      name: '6',
      img: "Låt du det ligga och lär de andra barnen simma!"
    },
    {
      name: '6',
      img: 'Leave it alone and teach the other children to swim!     '
    },
    {
      name: '7',
      img: 'Jag vill ändå ligga litet längre på det, sade den ruvande ankan.'
    },
    {
      name: '7',
      img: ' I still want to stay a little longer on it, said the brooding duck. '
    },
    {
      name: '8',
      img: 'Har jag nu legat så länge, så kan jag ligga den återstående tiden med.'
    },
    {
      name: '8',
      img: "If I've been lying for that long, I can lie for the rest of the time."
    },
    {
      name: '9',
      img: 'Var så god! '
    },
    {
      name: '9',
      img: 'You are welcome! '
    },
    {
      name: '10',
      img: 'sade den gamla ankan och så gick hon.'
    },
    {
      name: '10',
      img: 'said the old duck, and off she went.'
    },
    {
      name: '11',
      img: 'Äntligen brast det stora ägget. '
    },
    {
      name: '11',
      img: 'Finally the big egg cracked. '
    },
    {
      name: '12',
      img: 'Pip! pip! sade ungen och ramlade ut.'
    },
    {
      name: '12',
      img: ' Beep! beep! said the kid, falling out. '
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 19 completed!</h2><a href='https://elaidina.github.io/fra3/level20.html'> Continue to Level 20</a>";


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
