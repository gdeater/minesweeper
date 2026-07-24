import { useState } from "react";

function Cell({board,col,row}) {
    const [num, setNum] = useState("[]");
    function reveal(board,row,col) {
        if (board[row][col].mine === true){
            setNum("kaboom");
            return;
        }
        let cnt = 0;
        if (row > 0){
            if (board[row-1][col].mine === true){
                cnt += 1;
            }
        }
        if (row < board.length - 1){
            if (board[row + 1][col].mine === true){
                cnt += 1;
            }
        }
        if (col > 0){
            if (board[row][col - 1].mine === true){
                cnt += 1;
            }
        }
        if (col < board[0].length - 1){
            if (board[row][col + 1].mine === true){
                cnt += 1;
            }
        }
        setNum(cnt);


    }

    return (
        <button onClick={() => reveal(board,row,col)}>
            {num}
        </button>
    );
}

export default Cell;