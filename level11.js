document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Han skickar några rapphöns, som han just har fångat.'
    },
    {
      name: '1',
      img: 'He sends some partridges, which he has just caught.'
    },
    {
      name: '2',
      img: 'Kungen blev överraskad över de härliga, feta rapphönsen och blev utom sig av glädje.'
    },
    {
      name: '2',
      img: 'The king was surprised by the beautiful, fat partridges and was overjoyed. '
    },
    {
      name: '3',
      img: 'Han lät katten fylla sin säck med så mycket guld som han orkade bära.'
    },
    {
      name: '3',
      img: 'He let the cat fill his sack with as much gold as he could carry.'
    },
    {
      name: '4',
      img: 'Bär det till din herre och tacka honom för hans gåva.'
    },
    {
      name: '4',
      img: 'Take it to your master and thank him for his gift.'
    },
    {
      name: '5',
      img: 'Men den stackars mjölnarsonen satt hemma vid fönstret med huvudet lutat mot handen och tänkte:'
    },
    {
      name: '5',
      img: "But the poor miller's son sat at home by the window with his head leaning on his hand and thought:"
    },
    {
      name: '6',
      img: 'Nu har jag gjort mig av med mina sista slantar på ett par stövlar till katten.'
    },
    {
      name: '6',
      img: "Now I've got rid of my last pennies on a pair of boots for the cat."
    },
    {
      name: '7',
      img: 'Vad kan jag få ut av det?'
    },
    {
      name: '7',
      img: 'What can I get out of it?'
    },
    {
      name: '8',
      img: 'Just då kom katten in, tog säcken från ryggen, öppnade den och hällde ut allt guldet framför mjölnarsonen.'
    },
    {
      name: '8',
      img: "Just then the cat came in, took the sack from his back, opened it and poured out all the gold in front of the miller's son."
    },
    {
      name: '9',
      img: 'Här får du för stövlarna.'
    },
    {
      name: '9',
      img: 'Here you get for the boots. '
    },
    {
      name: '10',
      img: 'Kungen hälsar till dig och tackar för de fina rapphönsen.'
    },
    {
      name: '10',
      img: 'The king greets you and thanks you for the fine partridges.'
    },
    {
      name: '11',
      img: 'Mjölnarsonen blev glad över så stor rikedom! '
    },
    {
      name: '11',
      img: 'Mjölnarsonen was happy about such great wealth! '
    },
    {
      name: '12',
      img: 'Medan katten drog av sig stövlarna, berättade han alltihop. '
    },
    {
      name: '12',
      img: 'While the cat pulled off his boots, he told all.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 11 completed!</h2><a href='https://elaidina.github.io/fra3/level12.html'> Continue to Level 12</a>";


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
