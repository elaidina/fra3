document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Även det kan jag, skröt trollkarlen.'
    },
    {
      name: '1',
      img: 'I can do that too, boasted the wizard.'
    },
    {
      name: '2',
      img: 'Och genast sprang han omkring som en liten mus.'
    },
    {
      name: '2',
      img: 'And immediately he ran about like a little mouse.'
    },
    {
      name: '3',
      img: 'Men vips, så fångade katten musen och åt upp den.'
    },
    {
      name: '3',
      img: 'But suddenly, the cat caught the mouse and ate it.'
    },
    {
      name: '4',
      img: 'Under tiden hade vagnen med kungen, prinsessan och greven farit vidare och kom nu till den stora ängen.'
    },
    {
      name: '4',
      img: 'In the meantime the carriage with the king, princess and count had moved on and now came to the great meadow.'
    },
    {
      name: '5',
      img: 'Vem äger allt höet?'
    },
    {
      name: '5',
      img: 'Who owns all the hay?'
    },
    {
      name: '6',
      img: 'frågade kungen.'
    },
    {
      name: '6',
      img: 'asked the king.'
    },
    {
      name: '7',
      img: 'Greven, svarade folket, precis som katten hade befallt dem.'
    },
    {
      name: '7',
      img: 'The count, answered the people, just as the cat had commanded them.'
    },
    {
      name: '8',
      img: 'Och när de kom fram till det stora sädesfältet och den stora skogen, så sa folket varje gång, att det tillhörde greven.'
    },
    {
      name: '8',
      img: 'And when they came to the great cornfield and the great forest, the people said each time that it belonged to the count.'
    },
    {
      name: '9',
      img: 'Kungen blev förvånad över all denna rikedom.'
    },
    {
      name: '9',
      img: 'The king was amazed at all this wealth.'
    },
    {
      name: '10',
      img: 'Till slut nådde de fram till trollkarlens slott. '
    },
    {
      name: '10',
      img: "Finally they reached the wizard's castle. "
    },
    {
      name: '11',
      img: 'Katten stod uppe på trappan och väntade på dem. '
    },
    {
      name: '11',
      img: 'The cat was standing on the stairs waiting for them.'
    },
    {
      name: '12',
      img: 'När vagnen stannade, sprang han fram, öppnade dörren och hälsade dem med:'
    },
    {
      name: '12',
      img: 'When the carriage stopped, he ran forward, opened the door and greeted them with:'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 15 completed!</h2><a href='https://elaidina.github.io/fra3/level16.html'> Continue to Level 16</a>";


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
