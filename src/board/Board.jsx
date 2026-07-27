import Cell from "./Cell";

function Board({ board,setBoard,flag,setCountFlag,countFlag, setAnnouncement,rowLength,colLength,mines }) {
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
                            setCountFlag={setCountFlag}
                            countFlag={countFlag}
                            setAnnouncement={setAnnouncement}
                            rowLength={rowLength}
                            colLength={colLength}
                            mines={mines}

                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;