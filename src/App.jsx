import Board from "./board/Board";
import FlagButton from "./flagButton";
import { useState } from "react";
function App(){
    const [rowLength,setRowLength] = useState(7);
    const [colLength,setColLength] = useState(7);
    const [mines,setMines] = useState(7);
    const [flag,setFlag] = useState(0);
    const [countFlag,setCountFlag] = useState(mines);

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
    const [board, setBoard] = useState(() => {
        const temp = [];
        for (let row = 0; row < rowLength; row++) {
            const currentRow = [];
            for (let col = 0; col < colLength; col++) {
                currentRow.push(
                {
                    "revealed": false,
                    "mine":false,
                    "number": 0,
                    "flagged":false
                }
              );
            }
            temp.push(currentRow);
        }
        let r;
        let c;
        let placed = 0;

        while (placed < mines) {
            const r = Math.floor(Math.random() * rowLength);
            const c = Math.floor(Math.random() * colLength);

            if (!temp[r][c].mine) {
                temp[r][c].mine = true;
                placed++;
            }
        }
        for (let r = 0; r < temp.length;r++){
          for(let c = 0; c < temp[0].length;c++){
            temp[r][c].number = preCompute(temp,r,c); 
          }
        }
        return temp;
    });
    return(
      <div>
          <Board board={board} setBoard={setBoard} flag={flag}/>
          <FlagButton setFlag={setFlag}/>
          <h1>mode : {flag}</h1>
      </div>
    )
}
export default App;