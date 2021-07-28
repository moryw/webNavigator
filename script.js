const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();

// ------------------------------
const backPages = new Stack()
const nextPages = new Stack()

let currentPage = 'Google';

// ------------------------------
showCurrentPage = (action) => {
  console.log(`User chose: ${action}`)
  console.log(`The current page is ${currentPage}`)
  console.log(`Back: ${backPages.peek()}`)
  console.log(`Forward: ${nextPages.peek()}`)
}

newPage = (page) => {
  backPages.push(currentPage)
  currentPage = page

  while (!nextPages.isEmpty()) {
    nextPages.pop()
  }

  showCurrentPage('New Page')
}

backPage = () => {
  nextPages.push(currentPage)
  currentPage = backPages.pop() //don't know why this works

  showCurrentPage('Back')
}

nextPage = () => {
  backPages.push(currentPage)
  currentPage = nextPages.pop()

  showCurrentPage('Forward')
}

// showCurrentPage('Nothing')
// newPage('Netflix')
// backPage()
// nextPage()
/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '
const question2 = 'Where would you like to go next? '

// ------------------------------
let finish = true
let showBack = false
let showNext = false

// showCurrentPage('Start Page')
// newPage('Netflix')
// newPage('Codecademy')
// backPage()

while (finish) {
  let instructions = baseInfo

  if (!backPages.isEmpty()) {
    instructions += `, ${backInfo}`

    showBack = true
  }

  if (!nextPages.isEmpty()) {
    instructions += `, ${nextInfo}`

  }


  instructions += `, ${quitInfo}`
  console.log(instructions)
  // ------------------------------
  let answer
  if (backPages.isEmpty() && nextPages.isEmpty()) {
    answer = prompt(question)
  } else {
    answer = prompt(question2)
  }
  let lowerCaseAnswer = answer.toLowerCase()
  let formatedAnswer = answer[0].toUpperCase() + answer.slice(1)

  if (lowerCaseAnswer === 'b') {
    if (!backPages.isEmpty()) {
      backPage()
    } else {
      console.log('Sorry, there is no history for Back')
    }
  } else if (lowerCaseAnswer === 'n') {
    if (!nextPages.isEmpty()) {
      nextPage()
    } else {
      console.log('Sorry, there is no history for Next')
    }
  } else if (lowerCaseAnswer === 'q') {
    console.log(`Thanks for playing`)
    return
  } else {
    newPage(formatedAnswer)
  }

}



























// end
