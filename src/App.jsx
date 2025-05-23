import { useState } from "react";
import GameBoard from "./components/GameBoard";
import HistoryBoard from "./components/HistoryBoard";

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  const hanlePlay = (nextSquares) => {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (move) => {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 flex items-center justify-center px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl rounded-xl shadow-xl p-6 bg-white/5 backdrop-blur-sm border border-white/10">
        {/* Game Board */}
        <GameBoard
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={hanlePlay}
        />

        {/* History Board */}
        <HistoryBoard history={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
}
