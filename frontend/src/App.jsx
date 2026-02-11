import { useState } from 'react'
import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [winner, setWinner] = useState(null)


  const checkWinner = (squares) => {
    // Winning combinations
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal
      [2, 4, 6]  // diagonal
    ];

    // YOUR CODE:
    // 1. Loop through each winning combination
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];


      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    if (squares.every((square) => square !== null)) {
      return "Draw";
    }

    return null;
  }


  const handleClick = (index) => {
    // YOUR CODE - Think through this logic:

    // 1. If square is already filled, do nothing (return early)
    //    Check: if (board[index]) return;
    if (board[index]) {
      return
    }

    // 2. If game is already over, do nothing (return early)
    //    Check: if (winner) return;

    if (winner) {
      return
    }
    // 3. Create a copy of the board
    //    const newBoard = [...board];  // spread operator to copy array

    const newBoard = [...board]
    // 4. Update the clicked square with current player
    //    newBoard[index] = isXNext ? 'X' : 'O';

    newBoard[index] = isXNext ? 'X' : 'O';

    // 5. Update the board state
    //    setBoard(newBoard);

    setBoard(newBoard);
    // 6. Check if this move created a winner
    //    const gameWinner = checkWinner(newBoard);
    //    if (gameWinner) setWinner(gameWinner);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }

    // 7. Switch to the next player
    //    setIsXNext(!isXNext);

    setIsXNext(!isXNext);
  }


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
  }
  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>


      {/* Display game status */}
      <div className="status">
        {winner ? (
          winner === 'Draw' ? 'Game is a Draw!' : `Winner: ${winner}`
        ) : (
          `Next player: ${isXNext ? 'X' : 'O'}`
        )}
      </div>
      {/* The board - 9 squares */}
      <div className="board">
        {/* YOUR CODE: Map through board array and create 9 buttons */}
        {/* Each button should:
          - display board[i] (X, O, or empty)
          - onClick call handleClick(i)
          - have a className="square"
      */}
        <div className="square cell" onClick={() => handleClick(0)}>{board[0]}</div>
        <div className="square cell" onClick={() => handleClick(1)}>{board[1]}</div>
        <div className="square cell" onClick={() => handleClick(2)}>{board[2]}</div>
        <div className="square cell" onClick={() => handleClick(3)}>{board[3]}</div>
        <div className="square cell" onClick={() => handleClick(4)}>{board[4]}</div>
        <div className="square cell" onClick={() => handleClick(5)}>{board[5]}</div>
        <div className="square cell" onClick={() => handleClick(6)}>{board[6]}</div>
        <div className="square cell" onClick={() => handleClick(7)}>{board[7]}</div>
        <div className="square cell" onClick={() => handleClick(8)}>{board[8]}</div>
      </div>

      <button onClick={resetGame}>Reset Game</button>
    </div>
  )
}

export default App