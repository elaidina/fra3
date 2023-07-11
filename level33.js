document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Under den stränga vintern fick han utstå nöd och elände. '
    },
    {
      name: '1',
      img: 'During the severe winter he had to endure want and misery.'
    },
    {
      name: '2',
      img: 'Han låg i mossen bland vassen, då solen åter började att skina varmt, lärkorna sjöng - det var härlig vår.'
    },
    {
      name: '2',
      img: 'He was lying in the marsh among the reeds, when the sun again began to shine warmly, the larks sang - it was a lovely spring.'
    },
    {
      name: '3',
      img: 'Han låg i mossen bland vassen, då solen åter började att skina varmt, lärkorna sjöng - det var härlig vår...'
    },
    {
      name: '3',
      img: 'Then he raised even his wings, they whizzed stronger than before...'
    },
    {
      name: '4',
      img: '...och bar honom kraftigt framåt och innan han visste av det, var han i en stor trädgård , där äppelträden stod i blom och syrenerna blommade...'
    },
    {
      name: '4',
      img: '...and carried him strongly forward and before he knew it, he was in a large garden, where the apple trees were in bloom and the lilacs bloomed...'
    },
    {
      name: '5',
      img: ' ...och hängde ner mot kanalen.'
    },
    {
      name: '5',
      img: '...and hung down towards the canal.'
    },
    {
      name: '6',
      img: 'Här var så vackert! '
    },
    {
      name: '6',
      img: 'It was so beautiful here!'
    },
    {
      name: '7',
      img: 'Och ut ur de täta buskarna mitt framför honom kom tre vackra, vita svanar. '
    },
    {
      name: '7',
      img: 'And out of the dense bushes right in front of him came three beautiful, white swans. '
    },
    {
      name: '8',
      img: 'De blåste upp fjädrarna och flöt så lätt på vattnet.'
    },
    {
      name: '8',
      img: 'They inflated their feathers and floated so easily on the water. '
    },
    {
      name: '9',
      img: 'Ankungen kände igen de präktiga djuren och betogs av ett underligt vemod.'
    },
    {
      name: '9',
      img: 'The duckling recognized the magnificent animals and was seized with a strange melancholy.'
    },
    {
      name: '10',
      img: ' Jag vill flyga fram till dem, de kungliga fåglarna men de skulle hugga ihjäl mig, för att jag som är så ful vågar närma mig dem. '
    },
    {
      name: '10',
      img: ' I want to fly up to them, the royal birds, but they would stab me to death, because I, who am so ugly, dare to approach them.'
    },
    {
      name: '11',
      img: 'Men det gör det samma! '
    },
    {
      name: '11',
      img: 'But it does the same! '
    },
    {
      name: '12',
      img: 'Bättre att dödas av dem än att nypas av ankorna, hackas av hönsen, sparkas av pigan, som sköter hönsgården och slita ont om vintern.'
    },
    {
      name: '12',
      img: 'Better to be killed by them than to be pinched by the ducks, pecked by the hens, kicked by the maid who looks after the hen house and toil badly in the winter.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra3/level34.html'> Continue to next level </a>";


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
