document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Och de andra barnen jublade också: '
    },
    {
      name: '1',
      img: 'And the other children also cheered: '
    },
    {
      name: '2',
      img: 'Ja, det har kommit en ny! '
    },
    {
      name: '2',
      img: 'Yes, there is a new one!'
    },
    {
      name: '3',
      img: 'Och de klappade händerna och dansade runt omkring, sprang efter far och mor och så kastades bröd i vattnet och alla sade de: '
    },
    {
      name: '3',
      img: 'And they clapped their hands and danced around, ran after father and mother and then bread was thrown into the water and they all said: '
    },
    {
      name: '4',
      img: 'Den nya är den vackraste!'
    },
    {
      name: '4',
      img: ' The new one is the most beautiful!'
    },
    {
      name: '5',
      img: 'Så ung och så söt!'
    },
    {
      name: '5',
      img: 'So young and so cute!'
    },
    {
      name: '6',
      img: 'Och de gamla svanarna bugade sig för honom. '
    },
    {
      name: '6',
      img: 'And the old swans bowed to him. '
    },
    {
      name: '7',
      img: 'Då kände han sig helt blyg och stack huvudet bakom vingarna.'
    },
    {
      name: '7',
      img: 'Then he felt completely shy and stuck his head behind his wings. '
    },
    {
      name: '8',
      img: 'Han visste inte hur det var. '
    },
    {
      name: '8',
      img: "He didn't know how it was. "
    },
    {
      name: '9',
      img: 'Han var allt för lycklig, men alls inte stolt, för ett gott hjärta blir aldrig stolt. '
    },
    {
      name: '9',
      img: 'He was all too happy, but not at all proud, for a good heart is never proud. '
    },
    {
      name: '10',
      img: 'Han tänkte på, hur han hade varit förföljd och förhånad och hörde nu alla säga, att han var den vackraste av alla vackra fåglar. '
    },
    {
      name: '10',
      img: 'He thought of how he had been persecuted and mocked and now heard everyone say that he was the most beautiful of all beautiful birds.'
    },
    {
      name: '11',
      img: 'Och syrenerna böjde sig med kvistarna ända ned i vattnet till honom och solen sken så varmt och så gott. '
    },
    {
      name: '11',
      img: 'And the lilacs bent their branches right down to him in the water, and the sun shone so warm and so good. '
    },
    {
      name: '12',
      img: 'Då blåste hans fjädrar upp sig, den smidiga halsen höjde sig och ur hjärtat jublade han:'
    },
    {
      name: '12',
      img: 'Then his feathers puffed up, his supple neck rose, and from his heart he exulted:'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra3/level36.html'> Continue to next level </a>";


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
