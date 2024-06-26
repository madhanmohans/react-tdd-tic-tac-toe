import Board from "./Board";

export default function App() {
  return(
    <div className="bg-gray-900 text-gray-200 h-screen">
      <div className="container mx-auto">
        <div data-testid = "gameBoard" className="flex justify-center items-center h-screen">
          <Board />
        </div>
      </div>
    </div>
  )
} 