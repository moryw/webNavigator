const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
const backPages = new Stack()
const nextPages = new Stack()

try {
  console.log(backPages.stack);
  console.log(nextPages.stack);
} catch (e) {
  console.log(e);
}

// ------------------------------
// Helper Functions
// ------------------------------

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
