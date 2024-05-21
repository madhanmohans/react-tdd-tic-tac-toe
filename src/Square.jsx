export default function Square({value, onSquareClick}) {
    return (
        <button 
            className="border w-10 h-10 font-bold font-mono text-3xl"
            onClick = { onSquareClick }
        >
            {value}
        </button>
    );
}