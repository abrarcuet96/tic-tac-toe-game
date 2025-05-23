import { winner } from "../util.js/winner";
import Square from "./square";

const GameBoard = ({ xIsNext, squares, onPlay }) => {
  const winnerPlayer = winner(squares);

  let status;
  if (winnerPlayer) {
    status = `🏆 Winner: ${winnerPlayer[0]}`;
  } else {
    status = `Next Player: ${xIsNext ? "❌" : "⭕"}`;
  }

  const handleClick = (id) => {
    if (squares[id] || winnerPlayer) return;

    const nextSquares = squares.slice();
    nextSquares[id] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  return (
    <div className="flex flex-col items-center flex-1 p-6 bg-white border border-gray-300 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 tracking-wide">
        🎮 Tic Tac Toe
      </h1>

      <div className="grid grid-cols-3 gap-3">
        {squares.map((value, index) => (
          <Square
            key={index}
            id={index}
            value={value}
            onSquareClick={handleClick}
          />
        ))}
      </div>

      <div className="mt-6 px-6 py-3 text-xl font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md">
        {status}
      </div>
    </div>
  );
};

export default GameBoard;
