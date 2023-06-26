document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'De utstötte ett helt underligt ljud, bredde ut sina präktiga, långa vingar och flög bort från de kalla trakterna till varmare länder och öppna sjöar. '
    },
    {
      name: '1',
      img: ' They uttered a strange sound, spread their magnificent, long wings, and flew away from the cold regions to warmer lands and open lakes. '
    },
    {
      name: '2',
      img: 'De steg så högt, så högt och den fula , lilla ankungen blev så underlig till mods. '
    },
    {
      name: '2',
      img: 'They climbed so high, so high and the ugly little duckling became so strangely at ease. '
    },
    {
      name: '3',
      img: 'Han vände sig runt omkring i vattnet och  sträckte halsen högt upp i luften efter dem och utstötte ett skri så högt och förunderligt, att han själv blev rädd.'
    },
    {
      name: '3',
      img: 'He turned around in the water and stretched his neck high into the air after them, and uttered a scream so loud and wonderful that he himself was frightened.'
    },
    {
      name: '4',
      img: 'Han kunde inte glömma de vackra fåglarna, de lyckliga fåglarna och då han inte längre kunde se dem, dök han ända ned till bottnen och när han kom upp igen, var han utom sig.'
    },
    {
      name: '4',
      img: 'He could not forget the beautiful birds, the happy birds and when he could no longer see them, he dived right down to the bottom and when he came up again, he was beside himself.'
    },
    {
      name: '5',
      img: 'Han visste inte vad fåglarna hette eller vart de flög, men tyckte ändå om dem så, som han ännu aldrig hade tyckt om någon. '
    },
    {
      name: '5',
      img: "He didn't know what the birds were called or where they flew, but still liked them so, as he had never yet liked anyone. "
    },
    {
      name: '6',
      img: 'Han var inte avundsjuk på dem. '
    },
    {
      name: '6',
      img: 'He was not jealous of them. '
    },
    {
      name: '7',
      img: 'Han skulle varit glad, om bara ankorna velat ha honom bland sig, det stackars fula djuret!'
    },
    {
      name: '7',
      img: 'He would have been happy, if only the ducks wanted him among them, the poor ugly animal!'
    },
    {
      name: '8',
      img: 'Och vintern blev så kall, så kall.'
    },
    {
      name: '8',
      img: 'And the winter got so cold, so cold.'
    },
    {
      name: '9',
      img: 'Ankungen måste simma omkring i vattnet för att hindra att det skulle frysa till. '
    },
    {
      name: '9',
      img: 'The duckling must swim around in the water to prevent it from freezing.'
    },
    {
      name: '10',
      img: 'Men med varje natt blev hålet, som han simmade i, allt mindre och mindre.'
    },
    {
      name: '10',
      img: 'But with each night the hole in which he swam became smaller and smaller. '
    },
    {
      name: '11',
      img: 'Det frös så, att det knakade i isskorpan. '
    },
    {
      name: '11',
      img: ' It froze so hard that it cracked the ice crust. '
    },
    {
      name: '12',
      img: 'Ankungen måste ständigt röra benen, så att vattnet inte skulle frysa till. '
    },
    {
      name: '12',
      img: 'The duckling must constantly move its legs, so that the water would not freeze.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 31 completed!</h2><a href='https://elaidina.github.io/fra3/level32.html'> Continue to Level 32</a>";


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
