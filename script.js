const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();

// ------------------------------
const backPages = new Stack()
const nextPages = new Stack()

let currentPage = 'Google';

try {
  console.log(backPages.stack);
  console.log(nextPages.stack);
} catch (e) {
  console.log(e);
}

// ------------------------------
showCurrentPage = (action) => {
  console.log(`User chose ${action}`)
  console.log(`The current page is ${currentPage}`)
  console.log(`Back: ${backPages.peek()}`)
  console.log(`Forward: ${nextPages.peek()}`)
}

// showCurrentPage('Nothing')

newPage = (page) => {
  backPages.push(currentPage)
  currentPage = page

  while (!nextPages.isEmpty()) {
    nextPages.pop()
  }

  showCurrentPage('New Page')
}

newPage('Netflix')

/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------

  // ------------------------------
  // User Interface Part 2
  // ------------------------------
