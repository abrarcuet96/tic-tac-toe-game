import { PiNumberZero } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
const Square = ({ value, onSquareClick, id }) => {
  return (
    <button
      onClick={() => onSquareClick(id)}
      className="w-24 h-24 bg-amber-100  rounded-sm flex items-center justify-center text-amber-800 text-4xl font-bold"
    >
      {value === "X" ? <RxCross1 /> : value === "O" ? <PiNumberZero /> : ""}
    </button>
  );
};

export default Square;
