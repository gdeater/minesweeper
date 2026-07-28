import { useState } from "react";
function InputName({setDisplayName}){
    const [name,setName] = useState("");
    function getName(){
        console.log(name);
        setDisplayName(name);
    }
    return(
        <>
            <input value={name}
                   onChange={function(e){
                    setName(e.target.value)        
                   }}></input>
            <button onClick={() => getName()}>enter</button>
        </>
    );
}
export default InputName;