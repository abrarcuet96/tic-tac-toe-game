const HistoryBoard = ({ history, jumpTo }) => {
  const moves = history.map((squares, move) => {
    const description =
      move > 0 ? `Go to the move → ${move}` : `🚀 START THE GAME!`;

    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className="w-full px-4 py-2 bg-white/10 border border-neon-cyan rounded-md text-amber-600 hover:bg-neon-cyan/20 hover:text-white transition-all duration-300 shadow-md backdrop-blur-md"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-700 via-gray-900 to-gray-700 border-2 border-neon-cyan rounded-2xl p-6 shadow-neon-green">
      <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-neon-pink text-center tracking-wide">
        🕹 Move History
      </h2>
      <ul className="space-y-3 text-lg">{moves}</ul>
    </div>
  );
};

export default HistoryBoard;
