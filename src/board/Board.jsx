import Cell from "./Cell";

function Board({ board,setBoard,flag }) {
    return (
        <div>
            {board.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <Cell
                            key={colIndex}
                            setBoard = {setBoard}
                            row={rowIndex}
                            col={colIndex}
                            board={board}
                            flag={flag}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;