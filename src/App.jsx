import Board from "./board/Board";
import { useState } from "react";
function App(){
    const [rowLength,setRowLength] = useState(7);
    const [colLength,setColLength] = useState(7);
    const [mines,setMines] = useState(7);
    const [board, setBoard] = useState(() => {
        const temp = [];
        for (let row = 0; row < rowLength; row++) {
            const currentRow = [];
            for (let col = 0; col < colLength; col++) {
                currentRow.push(
                {
                    "revealed": false,
                    "mine":false,
                    "number": null
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
        return temp;
    });
    console.log(board);
    return(
      <div>
          <Board board={board}/>
      </div>
    )
}
export default App;