import Square from "./Square"
export default function App() {
  return(
    <div className="bg-gray-900 text-gray-200 h-screen">
      <div className="container mx-auto">
        <div data-testid = "gameBoard" className="flex justify-center items-center h-screen">
          <div className="flex flex-col">
            <div>
              <Square value = "1" />
              <Square value = "2" />
              <Square value = "3" />
            </div>
            <div>
              <Square value = "4" />
              <Square value = "5" />
              <Square value = "6" />
            </div>
            <div>
              <Square value = "7"/>
              <Square value = "8"/>
              <Square value = "9"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 