function DifficultyUI({setAnnouncement,setBoard,setCountFlag,setDifficultyPlayed}){
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
    function reset(rowLength,colLength,mines,diff){
        const board = [];
        setAnnouncement("");

        for (let row = 0; row < rowLength; row++) {
            let currentRow = [];
            for (let col = 0; col < colLength; col++) {
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
        setCountFlag(mines);
        setDifficultyPlayed(diff);
        console.log(diff);
    }
    return(
        <div>
            <button onClick={() => reset(6,7,3,"easy")}>easy</button>
            <button onClick={() => reset(10,10,15,"medium")}>medium</button>
            <button onClick={() => reset(15,15,30,"hard")}>hard</button>
        </div>
    );
}
export default DifficultyUI;