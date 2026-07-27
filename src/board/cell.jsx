import { useState } from "react";

function Cell({setBoard,col,row,board,flag,setCountFlag,countFlag,setAnnouncement,rowLength,colLength,mines}) {
    function preCompute(board,row,col){
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
        if (row > 0 && col > 0){
            if (board[row - 1][col - 1].mine === true){
                cnt += 1;
            }
        }
        if (row > 0 && col < board[0].length - 1){
            if (board[row - 1][col + 1].mine === true){
                cnt += 1;
            }
        }
        if (row < board.length - 1 && col > 0){
            if (board[row + 1][col - 1].mine === true){
                cnt += 1;
            }
        }
        if (row < board.length -1 && col < board[0].length-1){
            if (board[row + 1][col + 1].mine === true){
                cnt += 1;
            }
        }
      return cnt;
    }
    function reset(){
        const board = [];
        setAnnouncement("");

        for (let row = 0; row < colLength; row++) {
            let currentRow = [];
            for (let col = 0; col < rowLength; col++) {
                currentRow.push({
                    "revealed": false,
                    "mine": false,
                    "number": 0,
                    "flagged": false
                });
            }
            board.push(currentRow);
        }
        let r;
        let c;
        let placed = 0;

        while (placed < mines) {
            const r = Math.floor(Math.random() * rowLength);
            const c = Math.floor(Math.random() * colLength);

            if (!board[r][c].mine) {
                board[r][c].mine = true;
                placed++;
            }
        }

        for (let r = 0; r< rowLength; r++){
            for(let c = 0; c < colLength; c++){
                board[r][c].number = preCompute(board,r,c);
            }
        }
        setBoard(board);
    }
    let newBoard = structuredClone(board);
    function whenClicked(board, row, col) {
        if (countFlag === 0){
            for (let r = 0; r < board.length; r++){
                for(let c = 0; c < board[0].length;c++){
                    if (!board[r][c].mine && board[r][c].flagged){
                        return;
                    }
                }
            }
            setAnnouncement("you win");
        }
        if (flag === 1){
            if (board[row][col].flagged === false){
                setCountFlag(countFlag - 1);
                newBoard[row][col].flagged = true;
                setBoard(newBoard);
                return;
            }
        }
        else{
            if (board[row][col].flagged === true){
                newBoard[row][col].flagged = false;
                setCountFlag(countFlag + 1);
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
                setAnnouncement("you lose");
                setTimeout(() => {
                    reset();
                },1000)
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