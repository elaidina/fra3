document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Han var så stor och ful.'
    },
    {
      name: '1',
      img: 'He was so big and ugly. '
    },
    {
      name: '2',
      img: 'Ankan såg på honom.'
    },
    {
      name: '2',
      img: 'The duck looked at him.'
    },
    {
      name: '3',
      img: 'Det var då en förskräckligt stor ankunge den där! sade hon. '
    },
    {
      name: '3', 
      img: 'That was a terribly big duckling there! she said.'
    },
    {
      name: '4',
      img: 'Ingen av de andra ser ut så. '
    },
    {
      name: '4',
      img: 'None of the others look like that.'
    },
    {
      name: '5',
      img: 'Det är väl aldrig en kalkonunge !'
    },
    {
      name: '5',
      img: "It's never a baby turkey!"
    },
    {
      name: '6',
      img: 'Nå ja, det kommer vi snart underfund med.'
    },
    {
      name: '6',
      img: "Well, we'll figure that out soon."
    },
    {
      name: '7',
      img: 'I vattnet skall han, om jag så måste sparka ut honom.'
    },
    {
      name: '7',
      img: 'In the water he shall, if I have to kick him out.'
    },
    {
      name: '8',
      img: 'Nästa dag var det ett härligt väder.'
    },
    {
      name: '8',
      img: 'The next day the weather was beautiful. '
    },
    {
      name: '9',
      img: 'Solen sken på alla de gröna kardborrarna.'
    },
    {
      name: '9',
      img: 'The sun shone on all the green burdocks.'
    },
    {
      name: '10',
      img: 'Ankmodern med hela sin familj gick ner till kanalen.'
    },
    {
      name: '10',
      img: 'The mother duck with her whole family went down to the canal.'
    },
    {
      name: '11',
      img: 'Plask! Hon sprang ut i vattnet. '
    },
    {
      name: '11',
      img: 'Splash! She ran into the water.'
    },
    {
      name: '12',
      img: 'Kvack! kvack! sade hon och den ena ankungen efter den andra plumsade ut i vattnet efter henne.'
    },
    {
      name: '12',
      img: "Quack! quack! she said, and one duckling after another plunged into the water after her. "
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 20 completed!</h2><a href='https://elaidina.github.io/fra3/level21.html'> Continue to Level 21</a>";


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
