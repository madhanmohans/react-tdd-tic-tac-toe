import { useState } from "react";

export default function Square() {
    const [value, setValue] = useState(null);
    function handleClick() {
        console.log("Clicked!");
        setValue("X");
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