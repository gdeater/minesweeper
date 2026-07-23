import { useState } from "react";

function Cell() {
    const [num, setNum] = useState("[]");

    function reveal() {
        setNum(1);
    }

    return (
        <button onClick={reveal}>
            {num}
        </button>
    );
}

export default Cell;