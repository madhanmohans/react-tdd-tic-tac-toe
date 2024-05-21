import { useState } from "react";
import Square from "./Square";

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    function handleClick(i) {
        const newSquares = squares.slice();
        newSquares[i] = "X";
        setSquares(newSquares);
    }
    return (
        <div className="flex flex-col">
            <div>
              <Square value = {squares[0]} onSquareClick = {() => handleClick(0)}/>
              <Square value = {squares[1]} onSquareClick = {() => handleClick(1)}/>
              <Square value = {squares[2]} onSquareClick = {() => handleClick(2)}/>
            </div>
            <div>
              <Square value = {squares[3]} onSquareClick = {() => handleClick(3)} />
              <Square value = {squares[4]} onSquareClick = {() => handleClick(4)} />
              <Square value = {squares[5]} onSquareClick = {() => handleClick(5)} />
            </div>
            <div>
              <Square value = {squares[6]} onSquareClick = {() => handleClick(6)} />
              <Square value = {squares[7]} onSquareClick = {() => handleClick(7)} />
              <Square value = {squares[8]} onSquareClick = {() => handleClick(8)} />
            </div>
        </div>
    )};