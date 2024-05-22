import { useState } from "react";
import Square from "./Square";

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [XIsNext, setXIsNext] = useState(true);

    let status;

    function handleClick(i) {
        if(squares[i] || calculateWinner(squares)) return;
        const newSquares = squares.slice();
        if(XIsNext) newSquares[i] = "X";
        else newSquares[i] = "O";
        setXIsNext(!XIsNext);
        setSquares(newSquares);
    }

    function resetBoard() {
        const newSquares = Array(9).fill(null);
        setSquares(newSquares);
        setXIsNext(true);
    }

    const winner = calculateWinner(squares);
    if(winner) status = "Winner is " + winner;
    else status = "Next Player is " + (XIsNext? "X" : "O");

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [firstSquare, secondSquare, thirdSquare] = lines[i];
            if(squares[firstSquare] && squares[firstSquare] == squares[secondSquare] && squares[firstSquare] == squares[thirdSquare]) {
                return(squares[firstSquare]);
            }
        }
    }

    return (
    <div className="flex flex-col items-center">
        <div data-testid="status" className="mb-5">
            <span className="text-2xl">
                {status}
            </span>
        </div>
        <div className="flex flex-col">
            <div className="flex">
              <Square value = {squares[0]} onSquareClick = {() => handleClick(0)}/>
              <Square value = {squares[1]} onSquareClick = {() => handleClick(1)}/>
              <Square value = {squares[2]} onSquareClick = {() => handleClick(2)}/>
            </div>
            <div className="flex">
              <Square value = {squares[3]} onSquareClick = {() => handleClick(3)} />
              <Square value = {squares[4]} onSquareClick = {() => handleClick(4)} />
              <Square value = {squares[5]} onSquareClick = {() => handleClick(5)} />
            </div>
            <div className="flex">
              <Square value = {squares[6]} onSquareClick = {() => handleClick(6)} />
              <Square value = {squares[7]} onSquareClick = {() => handleClick(7)} />
              <Square value = {squares[8]} onSquareClick = {() => handleClick(8)} />
            </div>
        </div>
        <div data-testid="reset" className="pt-10">
            <span className="p-2 rounded font-bold cursor-pointer bg-slate-700" onClick={resetBoard}>
                Start Over
            </span>
        </div>  
        
    </div>
    )};