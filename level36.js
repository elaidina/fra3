document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Så mycken lycka drömde jag inte om, då jag var den fula ankungen!'
    },
    {
      name: '1',
      img: "I didn't dream of so much happiness when I was the ugly duckling!"
    },
    {
      name: '2',
      img: 'En kväll för länge sedan tog en ung prinsessa på sig sin hätta och sina träskor och gick ut för att ta sig en  promenad i skogen.'
    },
    {
      name: '2',
      img: 'One evening long ago, a young princess put on her bonnet and clogs and went out for a walk in the forest. '
    },
    {
      name: '3',
      img: 'Efter en stund kom hon till en vacker springbrunn, där hon satte sig ner, för att vila. '
    },
    {
      name: '3',
      img: 'After a while she came to a beautiful fountain, where she sat down to rest.'
    },
    {
      name: '4',
      img: 'Hon hade en gyllene boll i sin hand.'
    },
    {
      name: '4',
      img: 'She had a golden ball in her hand.'
    },
    {
      name: '5',
      img: 'Det var hennes favoritleksak, som hon nästan alltid gick och jonglerade med. '
    },
    {
      name: '5',
      img: 'It was her favorite toy, which she almost always juggled.'
    },
    {
      name: '6',
      img: 'Hon satt nu vid brunnen och kastade bollen upp i luften för att sedan fånga den när den föll ner. '
    },
    {
      name: '6',
      img: 'She was now sitting by the well and threw the ball into the air and then caught it as it fell down. '
    },
    {
      name: '7',
      img: 'Efter en stund kastade hon den så högt, att hon missade att fånga den. '
    },
    {
      name: '7',
      img: 'After a while she threw it so high that she missed catching it. '
    },
    {
      name: '8',
      img: 'Bollen föll ner på marken, studsade iväg och rullade sedan på marken tills den så småningom föll ner i brunnen.'
    },
    {
      name: '8',
      img: 'The ball fell to the ground, bounced off, then rolled on the ground until it eventually fell into the well.'
    },
    {
      name: '9',
      img: 'Prinsessan tittade i brunnen efter sin boll, men brunnen var väldigt djup, så djup att hon inte såg botten på den. '
    },
    {
      name: '9',
      img: 'The princess looked in the well for her ball, but the well was very deep, so deep that she could not see the bottom of it.'
    },
    {
      name: '10',
      img: 'Hon började olyckligt gråta över sin förlust och sa:'
    },
    {
      name: '10',
      img: 'She began to weep miserably at her loss, and said, '
    },
    {
      name: '11',
      img: 'Om jag bara kunde få min boll tillbaka igen, skulle jag ge bort alla mina fina kläder och juveler,...'
    },
    {
      name: '11',
      img: 'If I could only get my ball back again, I would give away all my fine clothes and jewels,...'
    },
    {
      name: '12',
      img: '...ja allt som jag hade i denna värld.'
    },
    {
      name: '12',
      img: '...yea, all that I had in this world.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra3/level37.html'> Continue to next level </a>";


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
