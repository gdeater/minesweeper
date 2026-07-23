import Cell from "./Cell";

function Board({ board }) {
    return (
        <div>
            {board.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <Cell
                            key={colIndex}
                            row={rowIndex}
                            col={colIndex}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;