document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Han flög ut i vattnet och simmade fram mot de präktiga svanarna. '
    },
    {
      name: '1',
      img: 'He flew into the water and swam towards the magnificent swans. '
    },
    {
      name: '2',
      img: 'De såg honom och sköt med uppblåsta fjädrar fram emot honom.'
    },
    {
      name: '2',
      img: 'They saw him and shot at him with inflated feathers.'
    },
    {
      name: '3',
      img: 'Döda mig bara!'
    },
    {
      name: '3',
      img: 'Just kill me! '
    },
    {
      name: '4',
      img: 'sade det stackars djuret, böjde sitt huvud ned mot vattenbrynet och väntade döden.'
    },
    {
      name: '4',
      img: "said the poor animal, bending his head down to the water's edge and awaiting death."
    },
    {
      name: '5',
      img: 'Men vad såg han i det klara vattnet?'
    },
    {
      name: '5',
      img: 'But what did he see in the clear water?'
    },
    {
      name: '6',
      img: 'Han såg under sig sin egen bild men han var inte längre en klumpig, svartgrå fågel, ful och stygg, utan var själv en svan.'
    },
    {
      name: '6',
      img: 'He saw his own image beneath him, but he was no longer a clumsy, black-grey bird, ugly and naughty, but was himself a swan.'
    },
    {
      name: '7',
      img: 'Det gör ingenting att vara född i ankgården, om man bara legat i ett svanägg.'
    },
    {
      name: '7',
      img: "It doesn't matter to be born in the duck farm, if you just lay in a swan's egg."
    },
    {
      name: '8',
      img: 'Och de stora svanarna simmade runt omkring honom och strök honom med näbben.'
    },
    {
      name: '8',
      img: 'And the great swans swam around him and stroked him with their beaks.'
    },
    {
      name: '9',
      img: 'Ut i trädgården kom några små barn.'
    },
    {
      name: '9',
      img: 'Out into the garden came some small children.'
    },
    {
      name: '10',
      img: 'De kastade bröd och säd ut i vattnet. '
    },
    {
      name: '10',
      img: 'They threw bread and grain into the water. '
    },
    {
      name: '11',
      img: 'Det minsta ropade: '
    },
    {
      name: '11',
      img: 'The smallest cried:'
    },
    {
      name: '12',
      img: 'Där är en ny! '
    },
    {
      name: '12',
      img: 'There is a new one! '
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra3/level35.html'> Continue to next level </a>";


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
