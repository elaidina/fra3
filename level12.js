document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: "Sedan sa han: "
    },
    {
      name: '1',
      img: ' Then he said: '
    },
    {
      name: '2',
      img: "Nu har du tillräckligt med guld, men det stannar inte vid det."
    },
    {
      name: '2',
      img: "Now you have enough gold, but it doesn't stop there. "
    },
    {
      name: '3',
      img: 'I morgon drar jag på mig stövlarna igen, för du ska bli ännu rikare. '
    },
    {
      name: '3',
      img: "Tomorrow I'll put my boots back on, because you're going to be even richer. "
    },
    {
      name: '4',
      img: "Till kungen sa jag, att du är greve."
    },
    {
      name: '4',
      img: 'To the king I said, that you are a count.'
    },
    {
      name: '5',
      img: 'Nästa dag gick katten, med stövlarna på, åter på jakt och gick till kungen med sin fångst. .'
    },
    {
      name: '5',
      img: 'The next day the cat, with his boots on, went hunting again and went to the king with his catch.'
    },
    {
      name: '6',
      img: " Så gick det till varje dag, och katten hade guld med sig hem varenda gång. "
    },
    {
      name: '6',
      img: "That's how it went every day, and the cat brought home gold every single time. "
    },
    {
      name: '7',
      img: 'Hos kungen var han så omtyckt, att han kunde gå ut och in i slottet så mycket han ville. '
    },
    {
      name: '7',
      img: 'He was so popular with the king that he could go in and out of the castle as much as he wanted.'
    },
    {
      name: '8',
      img: 'En gång när han var i köket för att värma sig lite, hörde han att kusken skulle köra en tur med kungen och prinsessan runt sjön.'
    },
    {
      name: '8',
      img: 'Once when he was in the kitchen to warm himself up a bit, he heard that the coachman was going to take the king and princess for a ride around the lake. '
    },
    {
      name: '9',
      img: 'Då hämtade katten snabbt sin herre och gick med honom till sjön.'
    },
    {
      name: '9',
      img: 'Then the cat quickly fetched his master and went with him to the lake.'
    },
    {
      name: '10',
      img: 'Där fick mjölnarsonen ta av sig kläderna och bada. '
    },
    {
      name: '10',
      img: "There the miller's son had to take off his clothes and bathe. "
    },
    {
      name: '11',
      img: 'Men katten gömde sin herres kläder. '
    },
    {
      name: '11',
      img: "But the cat hid his master's clothes. "
    },
    {
      name: '12',
      img: 'När nu kungavagnen kom farande, klagade katten:'
    },
    {
      name: '12',
      img: "When the royal carriage arrived, the cat complained:"
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 12 completed!</h2><a href='https://elaidina.github.io/fra3/level13.html'> Continue to Level 13</a>";


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
