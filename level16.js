document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Min konung, välkommen till min herres slott. '
    },
    {
      name: '1',
      img: "My king, welcome to my master's castle." 
    },
    {
      name: '2',
      img: 'Den ära som nu visas honom kommer att göra honom lycklig för resten av livet.'
    },
    {
      name: '2',
      img: 'The honor now shown to him will make him happy for the rest of his life.'
    },
    {
      name: '3',
      img: 'Kungen steg ur och förvånades över den präktiga byggnaden, som nästan var större och vackrare än hans eget slott.'
    },
    {
      name: '3',
      img: 'The king got out and was amazed at the magnificent building, which was almost bigger and more beautiful than his own castle.'
    },
    {
      name: '4',
      img: 'Men greven förde prinsessan in i en sal som glittrade och glimmade av guld och ädelstenar.'
    },
    {
      name: '4',
      img: 'But the count led the princess into a hall that glittered and glittered with gold and precious stones. '
    },
    {
      name: '5',
      img: 'Prinsessan gifte sig med greven, och när kungen dog, blev  mjölnarsonen kung. '
    },
    {
      name: '5',
      img: "The princess married the count, and when the king died, the miller's son became king."
    },
    {
      name: '6',
      img: ' Katten i stövlar utnämnde han till sin förnämste minister.'
    },
    {
      name: '6',
      img: 'He named Puss in Boots his chief minister.'
    },
    {
      name: '7',
      img: 'Det var så vackert ute på landet, det var sommar. '
    },
    {
      name: '7',
      img: "It was so beautiful out in the country, it was summer. "
    },
    {
      name: '8',
      img: 'Sädesfälten vajade i vinden. '
    },
    {
      name: '8',
      img: 'The cornfields swayed in the wind.'
    },
    {
      name: '9',
      img: 'Runt omkring åkrar och ängar låg stora skogar och mitt i skogarna låg djupa sjöar. '
    },
    {
      name: '9',
      img: 'All around the fields and meadows were large forests and in the middle of the forests were deep lakes.  '
    },
    {
      name: '10',
      img: "Mitt i solskenet låg ett gammalt slott med djupa kanaler runt omkring. "
    },
    {
      name: '10',
      img: 'In the middle of the sunshine was an old castle with deep canals all around it. '
    },
    {
      name: '11',
      img: "Från muren växte stora kardborrblad som var så höga att små barn kunde stå raka under de största. "
    },
    {
      name: '11',
      img: 'From the wall grew large velcro leaves so tall that small children could stand straight under the largest ones.'
    },
    {
      name: '12',
      img: ' Här låg en anka och ruvade på sina ägg. '
    },
    {
      name: '12',
      img: 'Here lay a duck incubating her eggs.'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 16 completed!</h2><a href="https://elaidina.github.io/fra3/level17.html"> Continue to Level 17</a>'


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
