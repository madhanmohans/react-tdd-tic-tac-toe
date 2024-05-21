import Square from "./Square";

export default function Board() {
    return (
        <div className="flex flex-col">
            <div>
              <Square />
              <Square />
              <Square />
            </div>
            <div>
              <Square />
              <Square />
              <Square />
            </div>
            <div>
              <Square />
              <Square />
              <Square />
            </div>
        </div>
    );
}