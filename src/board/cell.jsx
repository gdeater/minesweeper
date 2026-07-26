import { useState } from "react";

function Cell({setBoard,col,row,board,flag}) {
    let newBoard = structuredClone(board);
    function whenClicked(board, row, col) {
        if (flag === 1){
            newBoard[row][col].flagged = true;
            setBoard(newBoard);
            return;
        }
        else{
            if (board[row][col].flagged === true){
                newBoard[row][col].flagged = false;
                setBoard(newBoard);
                return;
            }
            if (board[row][col].mine === true){
                let tempBoard = structuredClone(board);
                for(let r = 0;r < board.length; r++){
                    for(let c = 0;c < board[0].length;c++){
                        if (tempBoard[r][c].mine){
                            tempBoard[r][c].revealed = true;
                            tempBoard[r][c].flagged = false;
                        }
                    }
                }
                setBoard(tempBoard);
                return;
            }
            function reveal(r, c) {

                if (r < 0 ||
                    r > board.length - 1 ||
                    c < 0 ||
                    c > board[0].length -1 ||
                    board[r][c].revealed === true
                ){
                    return;
                }

                board[r][c].revealed = true;

                if (board[r][c].mine === true){
                    return;
                }

                if (board[r][c].number > 0){
                    return;
                }
                reveal(r - 1, c);
                reveal(r + 1, c);
                reveal(r, c - 1);
                reveal(r, c + 1);

                reveal(r - 1, c - 1);
                reveal(r - 1, c + 1);
                reveal(r + 1, c - 1);
                reveal(r + 1, c + 1);
            }
        reveal(row, col);
        setBoard(board);
        }
    }
    return (
        <button onClick={() => whenClicked(newBoard,row,col)}>
            {board[row][col].flagged ? "f." : (board[row][col].revealed
            ? (board[row][col].mine ? ".." : board[row][col].number)
            : "[]")}
        </button>
    );
}

export default Cell;