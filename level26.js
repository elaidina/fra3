document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Den stackarn!'
    },
    {
      name: '1',
      img: ' The poor thing!'
    },
    {
      name: '2',
      img: 'han tänkte visst inte på att gifta sig, bara han fick lov att ligga i vassen och dricka litet vatten.'
    },
    {
      name: '2',
      img: "he certainly didn't think of getting married, only he was allowed to lie in the reeds and drink a little water."
    },
    {
      name: '3',
      img: 'Han väntade flera timmar, innan han såg sig om och så skyndade han bort från mossen allt vad han kunde.'
    },
    {
      name: '3',
      img: 'He waited several hours before he looked around and then he hurried away from the marsh as fast as he could.'
    },
    {
      name: '4',
      img: 'Han sprang över fält och äng och det var en sådan blåst, att han hade svårt att komma framåt. '
    },
    {
      name: '4',
      img: 'He ran across fields and meadows and there was such a wind that he had difficulty moving forward. '
    },
    {
      name: '5',
      img: 'Fram mot kvällen kom han till en fattig liten bondstuga. '
    },
    {
      name: '5',
      img: "Towards evening he came to a poor little peasant's cottage. "
    },
    {
      name: '6',
      img: 'Den var så eländig, att den inte själv visste åt vilken sida den skulle ramla så den blev stående. '
    },
    {
      name: '6',
      img: "It was so miserable that it didn't know which side it was going to fall on so it stayed standing."
    },
    {
      name: '7',
      img: 'Blåsten susade till den grad omkring ankungen, att han måste sätta sig på stjärten för att hålla mot och det blev allt värre och värre. '
    },
    {
      name: '7',
      img: 'The wind whizzed around the duckling to such an extent that he had to sit on his tail to hold on and it got worse and worse. '
    },
    {
      name: '8',
      img: 'Nu märkte han, att dörrens ena gångjärn hade lossnat och dörren hängde så snett att han genom springan kunde smyga sig in i rummet och det gjorde han.'
    },
    {
      name: '8',
      img: "Now he noticed that one of the door's hinges had come loose and the door hung so crooked that he could sneak into the room through the gap, and he did."
    },
    {
      name: '9',
      img: 'Här bodde en gammal gumma med sin katt och sin höna. '
    },
    {
      name: '9',
      img: 'Here lived an old woman with her cat and her hen.'
    },
    {
      name: '10',
      img: 'Katten, som hon kallade Kisserulten, kunde skjuta rygg och spinna, han gnistrade till och med, ...'
    },
    {
      name: '10',
      img: 'The cat, which she called Kisserulten, could arch his back and purr, he even sparkled,...'
    },
    {
      name: '11',
      img: '...men då måste man stryka honom mot håren.'
    },
    {
      name: '11',
      img: '...but then you had to stroke his hair. '
    },
    {
      name: '12',
      img: 'Hönan hade mycket små, korta ben och kallades därför Kyckelikortben.'
    },
    {
      name: '12',
      img: 'The hen had very small, short legs and was therefore called Chicken Short Legs. '
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 26 completed!</h2><a href='https://elaidina.github.io/fra3/level27.html'> Continue to Level 27</a>";


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
