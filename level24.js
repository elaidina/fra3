document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Och så plockade hon honom i nacken och hyfsade till honom.'
    },
    {
      name: '1',
      img: 'And then she picked him by the neck and treated him well.'
    },
    {
      name: '2',
      img: 'De andra ungarna är söta, sade den gamla ankan.'
    },
    {
      name: '2',
      img: 'The other kids are cute, said the old duck. '
    },
    {
      name: '3',
      img: 'Känn er nu som hemma här och om ni hittar ett ålhuvud så kan ni ge det till mig.'
    },
    {
      name: '3',
      img: 'Now feel at home here and if you find an eel head, you can give it to me.'
    },
    {
      name: '4',
      img: 'Den stackars ankungen, som kommit sist ur ägget och var så ful, blev biten, knuffad och hånad av både ankor och höns.'
    },
    {
      name: '4',
      img: 'The poor duckling, who was the last to hatch and was so ugly, was bitten, pushed and mocked by both ducks and hens.'
    },
    {
      name: '5',
      img: 'Han är för stor, sade de allesammans och kalkontuppen, som var född med sporrar...'
    },
    {
      name: '5',
      img: "He's too big, they all said, and the turkey cock, who was born with spurs..."
    },
    {
      name: '6',
      img: '...och därför trodde sig vara kejsare, blåste upp sig som ett skepp för fulla segel, gick rakt in på honom och så kluckade han och blev helt röd i huvudet.'
    },
    {
      name: '6',
      img: '...and therefore thought he was emperor, puffed up like a ship full sails, went right at him, and then he clucked and turned all red in the head.'
    },
    {
      name: '7',
      img: 'Den stackars ankungen visste varken hur han skulle stå eller gå. '
    },
    {
      name: '7',
      img: "The poor duckling didn't know how to stand or walk. "
    },
    {
      name: '8',
      img: 'Han var så ledsen för att han var så ful och ett åtlöje för hela ankgården.'
    },
    {
      name: '8',
      img: 'He was so sorry for being so ugly and a laughingstock to the whole duck farm.'
    },
    {
      name: '9',
      img: 'Så gick det den första dagen och sedan blev det allt värre och värre.'
    },
    {
      name: '9',
      img: "That's how it went the first day and then it got worse and worse. "
    },
    {
      name: '10',
      img: 'Den stackars ankungen blev jagad av dem allihop. '
    },
    {
      name: '10',
      img: 'The poor duckling was chased by them all.'
    },
    {
      name: '11',
      img: 'Till och med hans syskon var elaka mot honom och de sade hela tiden :'
    },
    {
      name: '11',
      img: 'Even his siblings were mean to him and they kept saying: '
    },
    {
      name: '12',
      img: 'Om katten ändå ville ta dig, ditt otäcka spektakel!'
    },
    {
      name: '12',
      img: 'If the cat still wanted to take you, you nasty spectacle! '
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 24 completed!</h2><a href='https://elaidina.github.io/fra3/level25.html'> Continue to Level 25</a>";


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
