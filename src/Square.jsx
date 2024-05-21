export default function Square( {value} ) {
    function handleClick() {
        console.log("Clicked!");
    };
    return (
        <button 
            className="border w-10 h-10 font-bold font-mono text-3xl"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}