# React Tic-Tac-Toe
React head-to-head for JS Coding Nights Munich.

### Task: Implement a Tic-Tac-Toe board using React or React Native.
#### Basic: Game Screen

1. Implement the game board.  The `game.js` file is provided to handle basic board functionality: creation, setting a cell value and checking for a winner.  Note: X's are represented by a `1` in the game board while O's are a `0`.  Empty cells are `null`.
2. Clicking or tapping on a cell should alternately place X's and O's on the game board.  Clicking or tapping on a cell with a value already in it should do nothing.
3. Implement the win state.  Display the winner of the game and a reset button to start again.


#### Bonus
* Prompt the players for their names rather than using just X and O.
* Add a moves log to the bottom of the game screen.  Show the list of moves made by each player of the form `NAME (X/O) : ROW,COL`
* Add a player statistics.  Number of wins, total number of games, etc.
* Game history log with date and winner


# Usage
````
git clone https://github.com/adamterlson/react-tic-tac-toe.git
npm install
````

### Native
Complete the Requirements in the [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) guide.
Open the ios xcode project in XCode and run it.  I recommend not attempting Android support now.

### Web
From the web folder, run `npm dev` and navigate to [http://localhost:8080/webpack-dev-server/index.html](http://localhost:8080/webpack-dev-server/index.html).


#Game.js
I've provided basic game logic so everyone can focus on React.  You may move the game file to a more convenient location of course, but it presently sits at the root.

###Usage
```javascript
import game from '../game';

// Create a new board
let board = game.createBoard();

// Make some moves (NON-DESTRUCTIVE, RETURNS NEW BOARD STATE)
// Pass 1 for X's, 0 for O's.
let board = game.set(board, 0, 0, 0); // O placed at coord row 0, col 0
let board = game.set(board, 1, 1, 0); // X placed at coord row 1, col 0
let board = game.set(board, 0, 0, 1); // X placed at coord row 1, col 0

// Check to see if anyone has won
let winState = game.checkBoard(board);
if (winState) {
    alert('Winner: ', winState.winner ? 'X' : 'O');
}

// Display the board state to the console
game.displayBoard(board);
```

### Common API

###`create()`
Creates a new game board.  This is a 2D array where the top level is an array of rows, so each child array is a column, so indexed via `board[row][column]`.  All cells initialized to null.

###`set(board, [0 or 1], row, col)`
Sets the value at the given row and column in the new board state to the given value (0 or 1).

###`checkBoard(board)`
Returns undefined if there is no winner, otherwise returns `{ winner: 0/1 }`.
