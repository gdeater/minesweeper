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
                            board={board}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;