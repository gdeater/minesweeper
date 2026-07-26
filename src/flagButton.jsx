function FlagButton({setFlag}){
    return(
        <div>
            <button onClick={() => setFlag(1)}>flag</button>
            <button onClick={() => setFlag(0)}>un-flag</button>
        </div>
    );
}
export default FlagButton;