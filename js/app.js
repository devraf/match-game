///Code refresh
const shuffle = (array) => {
  let tempItem, random
  //start from the next to last index and swap with random
  //then repeat to the beginning of the array
  for (let i = array.length - 1; i > 1; i--) {
    //assign last index and random index for swapping
    random = pickRandomNumber(i)
    tempItem = array[i]
    //swap last index with random index
    array[i] = array[random]
    array[random] = tempItem
  }
  return array
}
//random number generator for the shuffle function
const pickRandomNumber = numberLimit => {
  return Math.floor(Math.random() * numberLimit)
}
//card set
const masterCardList = [
  'apple',
  'cherry',
  'lemon',
  'grape',
  'strawberry',
  'orange',
  'banana',
  'watermelon',
  'apple',
  'cherry',
  'lemon',
  'grape',
  'strawberry',
  'orange',
  'banana',
  'watermelon'
]
//start button player uses to shuffle cards/start game
const startButton = document.querySelector('.start')
//create an array of li's from the ul parent node
const hideText = (element) => {
  element.classList.toggle('is-hidden')
}
//shuffles the masterCardList and adds text to the li > span element
const addShuffledListToLi = () => {
  shuffle(masterCardList).forEach((fruit, index) => {
    li[index].children[0].innerText = fruit
    li[index].children[0].classList.add('is-hidden')
    li[index].children[0].classList.remove('matched')
    li[index].children[0].classList.remove('flipped')
    li[index].addEventListener('click', toggleHiddenCard)
  })
  clickLimit = 0
  twoCardsFlipped = false
  score = 0
}

startButton.addEventListener('click', addShuffledListToLi)
const ul = document.querySelector('ul')
const li = document.querySelectorAll('li')
const liArray = Array.from(ul.children)
let clickLimit = 0;
let twoCardsFlipped = false

toggleHiddenCard = event => {
  if (!twoCardsFlipped) {
    if (!event.target.children[0].classList.contains('flipped') && !event.target.children[0].classList.contains('matched') ) {
      event.target.children[0].classList.toggle('is-hidden')
      event.target.children[0].classList.toggle('flipped')
      clickLimit++
      if (clickLimit === 2) {
        twoCardsFlipped = true
        matchCheck()
        checkWin()
      }
    }
  }
}

let score = 0
const checkWin = () => {
  if(score === 8) {
    console.log('finished')
  }
}
const matchCheck = () => {
  let cards = []
  // find li with flipped class
  liArray.forEach((fruit, index) => {
    if (fruit.children[0].classList.contains('flipped')) {
      cards.push(index)
    }
  })
  if (liArray[cards[0]].children[0].innerText === liArray[cards[1]].children[0].innerText) {
    console.log('match')
    setTimeout(() => {
      liArray[cards[0]].children[0].classList.toggle('flipped')
      liArray[cards[0]].children[0].classList.toggle('matched')
      liArray[cards[1]].children[0].classList.toggle('flipped')
      liArray[cards[1]].children[0].classList.toggle('matched')
      clickLimit = 0
      twoCardsFlipped = false
      score++
    }, 1000)
  } else setTimeout(() => {
    liArray[cards[0]].children[0].classList.toggle('flipped')
    liArray[cards[0]].children[0].classList.toggle('is-hidden')
    liArray[cards[1]].children[0].classList.toggle('flipped')
    liArray[cards[1]].children[0].classList.toggle('is-hidden')
    clickLimit = 0
    twoCardsFlipped = false
  }, 1000)
  return cards
}
//
// const app = {
//   ul: document.querySelector('ul'),
//   assignItemsToCards: () => {
//     app.gamePlayPieces.forEach((fruit, index) => {
//       app.ul.children[index].children[0].innerText = fruit
//       app.ul.children[index].classList.add(index)
//     })
//   },
//   hidepieces: () => {
//     app.gamePlayPieces.forEach((fruit, index) => {
//       app.ul.children[index].children[0].classList.add('is-hidden')
//     })
//   },
//   startButton: document.querySelector('.start'),
//   beginGame: () => {
//     app.startButton.addEventListener('click', () => {
//       app.shufflePieces()
//       app.assignItemsToCards()
//       app.hidepieces()
//       app.showBoxItem()
//     })
//   },
//   showBoxItem: () => {
//     app.ul.addEventListener('click', app.showCard)
//   },
//   addMatchClass: () => {
//     app.ul.addEventListener('click', event => {
//       if (event.target.closest('li')) {
//         event.target.children[0].classList.remove('is-hidden')
//         event.target.children[0].classList.add('match')
//       }
//     })
//   },
//   findHiddenClass: () => {
//     app.ul.forEach(fruit => {
//       if (!app.ul.children[0].classList.contains('match')) {
//         ul.children[0].classList.add('is-hidden')
//       }
//     })
//   },
//   score: 0,
//   firstCard: '',
//   secondCard: '',
//   firstLiIndex: '',
//   secondLiIndex: '',
//   liList: '',
//   showCard: event => {
//     //remove hidden class and add check match class
//     //TODO add if li contains is-hidden class logic
//     if (!event.target.closest('li').children[0].classList.contains('matched-set')) {
//       event.target.closest('li').children[0].classList.remove('is-hidden')
//       event.target.closest('li').children[0].classList.add('check-match')
//     }
//     //counter to limit clicks to two
//     app.addToCardCounter()
//     console.log(app.clickedCardCounter)
//     //convert ul children to an array to use forEach on the li's
//     app.liList = Array.from(app.ul.children)
//     //find the li's with the check match class and
//     if (app.clickedCardCounter <= 2 && !event.target.closest('li').children[0].classList.contains('matched-set')) {
//       app.liList.forEach((fruit, index) => {
//         if (app.ul.children[index].children[0].classList.contains('check-match')) {
//           if (app.clickedCardCounter === 1) {
//             app.firstCard = event.target.closest('li').children[0].innerText
//             app.firstLiIndex = event.target.closest('li').className
//             app.liList[app.firstLiIndex].addEventListener('click', app.deactivateCard)
//           } else if (app.clickedCardCounter === 2) {
//             app.secondCard = event.target.closest('li').children[0].innerText
//             app.secondLiIndex = event.target.closest('li').className
//             app.liList[app.secondLiIndex].addEventListener('click', app.deactivateCard)
//           }
//           // console.log(event.target.closest('li').children[0].innerText)
//         }
//         // console.log(app.firstCard, app.secondCard)
//       })
//       if (app.addToCardCounter === 2) {
//         app.ul.children.addEventListener('click', event => event.stopPropagation())
//       }
//       console.log(app.firstCard, app.firstLiIndex, app.secondCard, app.secondLiIndex)
//       if (app.firstCard === app.secondCard && app.clickedCardCounter === 2) {
//         app.liList[app.firstLiIndex].children[0].classList.remove('check-match')
//         app.liList[app.firstLiIndex].children[0].classList.add('matched-set')
//         app.liList[app.secondLiIndex].children[0].classList.remove('check-match')
//         app.liList[app.secondLiIndex].children[0].classList.add('matched-set')
//         app.clickedCardCounter = 0
//       } else if (app.clickedCardCounter === 2) {
//         app.liList[app.firstLiIndex].children[0].classList.remove('check-match')
//         setTimeout(() => {
//           app.liList[app.firstLiIndex].children[0].classList.add('is-hidden')
//           app.liList[app.firstLiIndex].removeEventListener('click', app.deactivateCard)
//         }, 500)
//         app.liList[app.secondLiIndex].children[0].classList.remove('check-match')
//         setTimeout(() => {
//           app.liList[app.secondLiIndex].children[0].classList.add('is-hidden')
//           app.liList[app.secondLiIndex].removeEventListener('click', app.deactivateCard)
//         }, 500)
//         app.clickedCardCounter = 0
//       }
//     }
//   },
//   deactivateCard: event => {
//     event.stopPropagation()
//   },
//   clickedCardCounter: 0,
//
//   addToCardCounter: () => {
//     app.clickedCardCounter++
//       return app.clickedCardCounter
//   },
//   addCheckMatchClass: event => {
//     console.log(event.target.closest('ul'))
//   },
//   //TODO
//   //add hidden class to all li's
//   //have a check state
//   //after user clicks on two boxes remove the click event
//   //then check the two clicked boxes for a match
//   //use a unique class for these two clicked boxes
//   //if they match remove the check class and add the completed class
//   //if they do not match remove the check class and readd the hidded class
//   //master item list
//   matchItems: [
//     'apple',
//     'cherry',
//     'lemon',
//     'grape',
//     'strawberry',
//     'orange',
//     'banana',
//     'watermelon',
//     'apple',
//     'cherry',
//     'lemon',
//     'grape',
//     'strawberry',
//     'orange',
//     'banana',
//     'watermelon'
//   ],
//   // add the cliked items here
//   matchSet: [],
//
//   gamePlayPieces: [],
//   //generate a random number
//   randomNumber: (number) => {
//     return Math.floor(Math.random() * (number - 0 + 0)) + 0
//   },
//   shufflePieces: () => {
//     app.gamePlayPieces = app.matchItems
//     let itemToSwap = ''
//     for (let i = app.gamePlayPieces.length - 1; i > 0; i--) {
//       // console.log(i)
//       let itemPosition = app.randomNumber(i)
//       // console.log(itemPosition)
//       let itemToSwap = app.gamePlayPieces[itemPosition]
//       // console.log(itemToSwap)
//       app.gamePlayPieces.push(itemToSwap)
//       // console.log(app.gamePlayPieces[i])
//
//       app.gamePlayPieces.splice(itemPosition, 1, app.gamePlayPieces[i])
//       app.gamePlayPieces.splice(i, 1)
//       // console.log(app.gamePlayPieces)
//     }
//   },
//   init: () => {
//     app.beginGame()
//   }
// }
//
// app.init()
