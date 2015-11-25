# React Tic-Tac-Toe
React head-to-head for JS Coding Nights Munich.

## Task: Implement a Tic-Tac-Toe board using React or React Native.
### Basic: Game Screen

1. Implement the game board.  The `game.js` file is provided to handle basic board functionality: creation, setting a cell value and checking for a winner.  Note: X's are represented by a `1` in the game board while O's are a `0`.  Empty cells are `null`.
2. Clicking or tapping on a cell should alternately place X's and O's on the game board.  Clicking or tapping on a cell with a value already in it should do nothing.
3. Implement the win state.  Display the winner of the game and a reset button to start again.


### Bonus
* Prompt the players for their names rather than using just X and O.
* Add a moves log to the bottom of the game screen.  Show the list of moves made by each player of the form `NAME (X/O) : ROW,COL`
* Add a player statistics.  Number of wins, total number of games, etc.
* Game history log with date and winner


# Usage
````
git clone https://github.com/adamterlson/react-tic-tac-toe.git
npm intall
````

## Native
Complete the Requirements in the [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) guide.
Open the ios xcode project in XCode and run it.  I recommend not attempting Android support now.

## Web
From the web folder, run `npm dev` and navigate to [http://localhost:8080/webpack-dev-server/index.html](http://localhost:8080/webpack-dev-server/index.html).
